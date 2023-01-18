import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export const fetchGeneralContent = async () => {
  try {
    const response = await client.getEntries({
      content_type: "generalSettings",
      include: 2,
    });

    if (!response?.items?.length) {
      return { error: true };
    }

    return { error: false, general: response.items[0].fields };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchHomepageContent = async () => {
  try {
    const response = await client.getEntries({
      content_type: "homepage",
      include: 2,
    });

    if (!response?.items?.length) {
      return { error: true };
    }

    return { error: false, homepage: response.items[0].fields };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchPageContentBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "page",
      "fields.slug[in]": slug,
      include: 2,
    });

    if (!response?.items?.length) {
      return { error: true };
    }

    return { error: false, page: response.items[0].fields };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProjectContentBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "project",
      "fields.slug[in]": slug,
      include: 2,
    });

    if (!response?.items?.length) {
      return { error: true };
    }

    return { error: false, project: response.items[0].fields };
  } catch (error) {
    throw new Error(error);
  }
};
