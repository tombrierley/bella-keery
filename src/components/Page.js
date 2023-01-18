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
      {!!(contentColumn1 || contentColumn2 || contentColumn3) && (
        <RichText
          contentColumn1={contentColumn1}
          contentColumn2={contentColumn2}
          contentColumn3={contentColumn3}
        />
      )}
      {!!projects && <ProjectList projects={projects} />}
      {!!images && <ImageList images={images} />}
    </Layout>
  );
};

export default Page;
