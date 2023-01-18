import Layout from "@components/Layout";

const Page = ({ ...props }) => {
  return <Layout {...props}>{JSON.stringify(props)}</Layout>;
};

export default Page;
