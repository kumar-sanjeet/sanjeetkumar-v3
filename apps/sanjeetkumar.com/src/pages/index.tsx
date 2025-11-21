import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sanjeet Kumar',
    url: 'https://www.sanjeetkumar.com',
    jobTitle: [
      'Enterprise Architecture Director',
      'Sovereign AI Strategist',
      'Technology Governance Lead',
    ],
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
      'Sovereign AI',
      'AI Ethics',
      'Enterprise Architecture',
      'Technology Governance',
      'Mergers & Acquisitions',
    ],
    sameAs: ['https://www.linkedin.com/in/sanjeetkumar'],
  });

  return (
    <>
      <Head
        title="Sanjeet Kumar - Director of Enterprise Architecture | Sovereign AI"
        description="Enterprise Architecture Director specializing in Sovereign AI, M&A Integration, and Technology Governance."
        keywords={[
          'Sovereign AI',
          'Enterprise Architecture',
          'AI Governance',
          'TOGAF',
          'Digital Strategy',
          'M&A Technology',
        ]}
        ogImage="https://sanjeetkumar.com/og-image.png"
        overrideTitle
        structuredData={structuredData}
      />
      <IndexContents />
    </>
  );
}

export default Index;
