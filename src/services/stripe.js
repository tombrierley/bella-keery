import Stripe from "stripe";

export const createPaymentIntent = async ({ amount, productId }) => {
  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
      metadata: {
        product_id: productId,
      },
    });

    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error(error);
  }
};

export const hasCompletedPayment = async ({ productId }) => {
  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.search({
      query: `status:\'succeeded\' AND metadata[\'product_id\']:\'${productId}\'`,
    });

    console.log(paymentIntent);

    return paymentIntent?.data?.length > 0;
  } catch (error) {
    throw new Error(error);
  }
};
