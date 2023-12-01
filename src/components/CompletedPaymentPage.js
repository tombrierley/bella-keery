import { useContext } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";

import Layout from "@components/Layout";
import PaymentForm from "@components/PaymentForm";

import { SettingsContext } from "@providers/settings";

import formatCurrency from "@utils/formatCurrency";
import formatDate from "@utils/formatDate";

const CompletedPaymentPage = ({
  message,
  images,
  artist,
  venue,
  date,
  price,
  slug,
  ...props
}) => {
  const { settings } = useContext(SettingsContext);

  return (
    <Layout {...props}>
      <h2>
        {settings.siteName} x {artist}
      </h2>

      <h4>
        {venue} - {formatDate(date)}
      </h4>

      <p>Thank you for purchasing your images</p>
    </Layout>
  );
};

export default CompletedPaymentPage;
