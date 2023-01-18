import PageNotFound from "@components/PageNotFound";
import Page from "@components/Page";

import {
  fetchProjectContentBySlug,
  fetchAllProjects,
} from "@services/contentful";

const CmsPage = ({ error, project, general, ...props }) => {
  if (error) return <PageNotFound {...general} />;

  return <Page {...general} {...project} {...props} />;
};

export async function getStaticPaths() {
  const { projects } = await fetchAllProjects(false);

  const paths = projects.map((projects) => ({
    params: {
      slug: projects.fields.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const response = await fetchProjectContentBySlug(slug);

  return {
    props: {
      ...response,
    },
  };
};

export default CmsPage;
