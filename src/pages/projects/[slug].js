import PageNotFound from "@components/PageNotFound";
import Page from "@components/Page";
import StructuredData from "@components/StructuredData";

import {
  fetchProjectContentBySlug,
  fetchAllProjects,
} from "@services/contentful";

const CmsPage = ({ error, project, general, ...props }) => {
  if (error) return <PageNotFound {...general} />;

  // Generate image gallery schema for project
  const imageGalleryData = project?.images ? {
    name: project.name || 'Photography Project',
    description: project.description || 'Live music photography project by Bella Keery',
    url: `https://bellakeery.com/projects/${project.slug}`,
    images: project.images.map(img => ({
      url: `https:${img.fields.file.url}`,
      title: img.fields.title || project.name || 'Live music photography',
      description: img.fields.description || `Live music photography from ${project.name || 'project'} by Bella Keery`,
      location: project.location || 'London, UK'
    }))
  } : null;

  return (
    <>
      {imageGalleryData && (
        <StructuredData type="imageGallery" data={imageGalleryData} />
      )}
      <Page {...general} {...project} {...props} />
    </>
  );
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
