import PageNotFound from "@components/PageNotFound";
import Page from "@components/Page";

import { fetchHomepageContent } from "@services/contentful";

const Homepage = ({ error, homepage, general, ...props }) => {
  if (error) return <PageNotFound {...general} />;

  return <Page {...general} {...homepage} {...props} />;
};

export const getStaticProps = async () => {
  const response = await fetchHomepageContent();

  return {
    props: {
      ...response,
    },
  };
};

export default Homepage;
