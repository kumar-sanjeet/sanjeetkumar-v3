import HexGridBackground from '@/components/HexGridBackground';

import EducationContents from '@/contents/Education';
import Page from '@/contents-layouts/Page';

function Education() {
  return (
    <Page
      frontMatter={{
        title: 'Education & Certifications',
        description: `Academic background and professional certifications.`,
      }}
      headerImage={<HexGridBackground />}
    >
      <EducationContents />
    </Page>
  );
}

export default Education;
