import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PageNotFound from "@components/PageNotFound";
import PaymentPage from "@components/PaymentPage";
import CompletedPaymentPage from "@components/CompletedPaymentPage";

import {
  fetchProductContentBySlug,
  fetchAllProducts,
} from "@services/contentful";
import { createPaymentIntent, hasCompletedPayment } from "@services/stripe";

const PaymentPageTemplate = ({
  error,
  product,
  general,
  clientSecret,
  completedPayment,
  ...props
}) => {
  if (error) return <PageNotFound {...general} />;

  if (completedPayment) {
    return <CompletedPaymentPage {...general} {...product} {...props} />;
  }

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentPage {...general} {...product} {...props} />
    </Elements>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const response = await fetchProductContentBySlug(slug);

  const completedPayment = await hasCompletedPayment({
    productId: response?.product?.id,
  });

  if (completedPayment) {
    return {
      props: {
        ...response,
        completedPayment,
      },
    };
  }

  const clientSecret = await createPaymentIntent({
    amount: response?.product?.price,
    productId: response?.product?.id,
  });

  return {
    props: {
      ...response,
      clientSecret,
    },
  };
};

export default PaymentPageTemplate;
