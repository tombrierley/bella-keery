import PageNotFound from "@components/PageNotFound";
import Page from "@components/Page";

import { fetchPageContentBySlug, fetchAllPages } from "@services/contentful";

const CmsPage = ({ error, page, general, ...props }) => {
  if (error) return <PageNotFound {...general} />;

  return <Page {...general} {...page} {...props} />;
};

export async function getStaticPaths() {
  const { pages } = await fetchAllPages(false);

  const paths = pages.map((page) => ({
    params: {
      slug: page.fields.slug,
    },
  }));

  return {
    paths,
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
