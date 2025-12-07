import { fetchAllProjects, fetchAllPages } from "@services/contentful";

const generateSiteMap = (projects = [], pages = []) => {
  const staticPages = [
    {
      url: 'https://bellakeery.com',
      lastModified: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: '1.0'
    },
    {
      url: 'https://bellakeery.com/about',
      lastModified: new Date().toISOString(),
      changeFreq: 'monthly', 
      priority: '0.8'
    },
    {
      url: 'https://bellakeery.com/contact',
      lastModified: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: '0.8'
    }
  ];

  const projectPages = projects.map((project) => ({
    url: `https://bellakeery.com/projects/${project.fields.slug}`,
    lastModified: project.sys.updatedAt,
    changeFreq: 'monthly',
    priority: '0.7'
  }));

  const dynamicPages = pages.map((page) => ({
    url: `https://bellakeery.com/${page.fields.slug}`,
    lastModified: page.sys.updatedAt,
    changeFreq: 'monthly',
    priority: '0.6'
  }));

  const allPages = [...staticPages, ...projectPages, ...dynamicPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(({ url, lastModified, changeFreq, priority }) => {
      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
    })
    .join("")}
</urlset>
 `;
};

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  try {
    const [projectsResponse, pagesResponse] = await Promise.all([
      fetchAllProjects?.() || Promise.resolve([]),
      fetchAllPages?.() || Promise.resolve([])
    ]);

    const projects = projectsResponse?.items || [];
    const pages = pagesResponse?.items || [];
    
    // Generate the XML sitemap
    const sitemap = generateSiteMap(projects, pages);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error("Error generating sitemap:", error);
    
    res.setHeader("Content-Type", "text/xml");
    res.write(generateSiteMap([], []));
    res.end();

    return {
      props: {},
    };
  }
}

export default SiteMap;