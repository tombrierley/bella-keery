import PageNotFound from "@components/PageNotFound";
import Page from "@components/Page";

import {
  fetchProjectContentBySlug,
  fetchAllProjects,
} from "@services/contentful";

const ProjectPage = ({ error, project, general, ...props }) => {
  if (error) return <PageNotFound {...general} />;

  return <Page {...general} {...project} {...props} />;
};

export async function getStaticPaths() {
  const { projects } = await fetchAllProjects(false);

  const paths = projects.map((project) => ({
    params: {
      slug: project.fields.slug,
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

export default ProjectPage;
