export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anshul Pandey",
    "jobTitle": "Senior Platform Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Volkswagen Group Technology Solutions India"
    },
    "url": "https://www.anshulpandey.in",
    "sameAs": [
      "https://www.linkedin.com/in/yosoyanshul",
      "https://github.com/yosoyanshul",
      "https://www.youtube.com/@freecloudcamp"
    ],
    "knowsAbout": [
      "Kubernetes",
      "AWS",
      "Platform Engineering",
      "DevOps",
      "GitOps",
      "Terraform",
      "ArgoCD",
      "Cloud Architecture"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Acropolis Institute of Technology and Research"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "award": [
      "Employee of the Year 2024 - Blazeclan Technologies",
      "Employee of the Year 2021 - Fealty Technologies",
      "Debutant of the Year 2025 - Volkswagen Group"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Anshul Pandey Portfolio",
    "url": "https://www.anshulpandey.in",
    "description": "Platform Engineer specializing in Kubernetes, AWS, and cloud infrastructure",
    "author": {
      "@type": "Person",
      "name": "Anshul Pandey"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Anshul Pandey - Platform Engineering",
    "description": "Platform Engineering, Cloud Architecture, Kubernetes and AWS consulting",
    "provider": {
      "@type": "Person",
      "name": "Anshul Pandey"
    },
    "areaServed": "IN",
    "serviceType": ["Platform Engineering", "Cloud Architecture", "DevOps Consulting"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
