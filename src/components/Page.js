import Layout from "@components/Layout";
import ProjectList from "@components/ProjectList";
import ImageList from "@components/ImageList";
import RichText from "@components/RichText";

const Page = ({
  projects,
  images,
  contentColumn1,
  contentColumn2,
  contentColumn3,
  ...props
}) => {
  return (
    <Layout {...props}>
      {!!contentColumn1 && <RichText content={contentColumn1} />}
      {!!projects && <ProjectList projects={projects} />}
      {!!contentColumn2 && <RichText content={contentColumn2} />}
      {!!contentColumn3 && <RichText content={contentColumn3} />}
      {!!images && <ImageList images={images} />}
    </Layout>
  );
};

export default Page;
