const generateEntryUrl = ({ sys, fields }) => {
  const contentType = sys?.contentType?.sys?.id;

  if (contentType === "homepage") {
    return "/";
  }

  if (contentType === "project") {
    return `/projects/${fields.slug}`;
  }

  return `/${fields.slug}`;
};

export default generateEntryUrl;
