import PageNotFound from "@components/PageNotFound";
import Page from "@components/Page";

import { fetchPageContentBySlug } from "@services/contentful";

const CmsPage = ({ error, page, general, ...props }) => {
  if (error) return <PageNotFound {...general} />;

  return <Page {...general} {...page} {...props} />;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "*" } }],
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const response = await fetchPageContentBySlug(slug);

  return {
    props: {
      ...response,
    },
  };
};

export default CmsPage;
