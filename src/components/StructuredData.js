const StructuredData = ({ type = "organization", data = {} }) => {
  const generateSchemaMarkup = () => {
    const baseSchema = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case "organization":
        return {
          ...baseSchema,
          "@type": "ProfessionalService",
          "@id": "https://bellakeery.com/#organization",
          name: "Bella Keery Photography",
          description: "London based live music photographer specializing in concert and festival photography",
          url: "https://bellakeery.com",
          telephone: data.telephone || "",
          email: data.email || "",
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB"
          },
          sameAs: [
            "https://instagram.com/bellakeery",
            "https://twitter.com/bellakeery"
          ],
          serviceType: "Photography",
          areaServed: {
            "@type": "City",
            name: "London"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Photography Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Live Music Photography",
                  description: "Professional concert and live music event photography"
                }
              },
              {
                "@type": "Offer", 
                itemOffered: {
                  "@type": "Service",
                  name: "Festival Photography",
                  description: "Music festival photography coverage"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service", 
                  name: "Band Photography",
                  description: "Professional band and artist photography"
                }
              }
            ]
          }
        };

      case "website":
        return {
          ...baseSchema,
          "@type": "WebSite",
          "@id": "https://bellakeery.com/#website",
          url: "https://bellakeery.com",
          name: "Bella Keery Photography",
          description: "London based live music photographer",
          publisher: {
            "@id": "https://bellakeery.com/#organization"
          },
          potentialAction: [
            {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://bellakeery.com/projects?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ]
        };

      case "person":
        return {
          ...baseSchema,
          "@type": "Person",
          "@id": "https://bellakeery.com/#person",
          name: "Bella Keery",
          jobTitle: "Live Music Photographer",
          description: "Professional live music and concert photographer based in London",
          url: "https://bellakeery.com",
          image: "https://bellakeery.com/bella-keery-profile.jpg",
          sameAs: [
            "https://instagram.com/bellakeery",
            "https://twitter.com/bellakeery"
          ],
          worksFor: {
            "@id": "https://bellakeery.com/#organization"
          },
          knowsAbout: [
            "Photography",
            "Live Music Photography", 
            "Concert Photography",
            "Festival Photography"
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Photographer",
            occupationLocation: {
              "@type": "City",
              name: "London"
            }
          }
        };

      case "imageGallery":
        return {
          ...baseSchema,
          "@type": "ImageGallery",
          name: data.name || "Photography Portfolio",
          description: data.description || "Professional live music photography portfolio",
          url: data.url || "https://bellakeery.com",
          image: data.images?.map(img => ({
            "@type": "ImageObject",
            url: img.url,
            description: img.description || img.title,
            name: img.title,
            contentLocation: img.location
          })) || []
        };

      default:
        return baseSchema;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchemaMarkup(), null, 2)
      }}
    />
  );
};

export default StructuredData;