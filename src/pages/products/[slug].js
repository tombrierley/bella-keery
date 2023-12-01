import PageNotFound from "@components/PageNotFound";
import ProductPage from "@components/ProductPage";

import {
  fetchProductContentBySlug,
  fetchAllProducts,
} from "@services/contentful";
import { hasCompletedPayment } from "@services/stripe";

const ProductPageTemplate = ({
  error,
  product,
  general,
  completedPayment,
  ...props
}) => {
  if (error) return <PageNotFound {...general} />;

  return (
    <ProductPage
      {...general}
      {...product}
      {...props}
      completedPayment={completedPayment}
    />
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const response = await fetchProductContentBySlug(slug);

  const completedPayment = await hasCompletedPayment({
    productId: response?.product?.id,
  });

  return {
    props: {
      ...response,
      completedPayment,
    },
  };
};

export default ProductPageTemplate;
