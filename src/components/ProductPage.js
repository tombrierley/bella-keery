import { useContext } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";

import Layout from "@components/Layout";
import ImageList from "@components/ImageList";
import RichText from "@components/RichText";

import { SettingsContext } from "@providers/settings";

import formatCurrency from "@utils/formatCurrency";
import formatDate from "@utils/formatDate";

const ProductPage = ({
  message,
  images,
  artist,
  venue,
  date,
  price,
  slug,
  completedPayment,
  highResZip,
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

      <p>
        <strong>Your images</strong>
      </p>

      <p>{message}</p>

      {completedPayment ? (
        <>
          <p>
            Thank you for purchasing your images, please download them using the
            link below:
          </p>

          <a href={highResZip.fields?.file?.url}>Download</a>
        </>
      ) : (
        <>
          <p>
            <strong>
              There are two licensing options for your images, depending on how
              you want to use them.
            </strong>
          </p>
          <p>{formatCurrency(price)}</p>
          <p>
            {images?.length}x images - royalty-free license - one off payment
          </p>
          <a href={`/products/purchase/${slug}`}>Buy images</a>
          {!!images && <ImageList images={images} />}
        </>
      )}
    </Layout>
  );
};

export default ProductPage;
