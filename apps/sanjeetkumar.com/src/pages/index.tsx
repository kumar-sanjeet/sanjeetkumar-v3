import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sanjeet Kumar',
    url: 'https://www.sanjeetkumar.com',
    jobTitle: 'Enterprise Architecture Director',
    worksFor: {
      '@type': 'Organization',
      name: 'LandSure Systems Ltd.',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of California, Berkeley',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Indian Institute of Technology Kharagpur',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Harvard University',
      },
    ],
    knowsAbout: [
      'Enterprise Architecture',
      'AI Architecture',
      'Business Process Automation',
      'Digital Transformation',
      'IT Governance',
      'Agentic AI',
      'TOGAF',
      'RPA',
    ],
    sameAs: [
      'https://www.linkedin.com/in/sanjeetkumar',
      'https://twitter.com/sanjeet_kumar',
    ],
  });

  return (
    <>
      <Head
        title="Sanjeet Kumar · Enterprise Architecture Director · AI Architect · Business Automation Expert"
        description="Sanjeet Kumar - Enterprise Architecture Director & AI Architect. Specializing in Business Process Automation, Digital Transformation, and IT Governance. Available for roles in Canada, UAE, and USA. Expertise in TOGAF, Agentic AI, RPA, and Strategic Technology Leadership."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
        structuredData={structuredData}
      />
      <IndexContents />
    </>
  );
}

export default Index;
