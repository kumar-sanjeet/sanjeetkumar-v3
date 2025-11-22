import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';
import HeaderImage from '@/contents/projects/HeaderImage';
import NetworkBackground from '@/components/NetworkBackground';
import HexGridBackground from '@/components/HexGridBackground';

import { getPageOgImageUrl } from '@/helpers/page';

import type { TPageFrontMatter, TTableOfContents } from '@/types';
import type { PropsWithChildren } from 'react';

interface PageWithMDXProps {
  frontMatter: TPageFrontMatter;
  tableOfContents: TTableOfContents;
}

function PageWithMDX({
  frontMatter: { title, description, caption, showPattern, animationType },
  tableOfContents,
  children = null,
}: PropsWithChildren<PageWithMDXProps>) {
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  const getHeaderImage = () => {
    if (!showPattern) return null;
    if (animationType === 'network') return <NetworkBackground />;
    if (animationType === 'hex') return <HexGridBackground />;
    return <HeaderImage />;
  };

  return (
    <>
      <SkipNavigation />
      <Head title={title} description={description} ogImage={image.default} />
      <PageHeader
        title={title}
        description={description}
        caption={caption}
        headerImage={getHeaderImage()}
      />
      <WithTableOfContents tableOfContents={tableOfContents}>
        {children}
      </WithTableOfContents>
    </>
  );
}

export default PageWithMDX;
