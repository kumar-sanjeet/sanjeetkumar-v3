import NextHead from 'next/head';

import useCurrentUrl from '@/hooks/useCurrentUrl';

interface HeadProps {
  title: string;
  description: string;
  ogImage: string;
  overrideTitle?: boolean;
  structuredData?: string;
  keywords?: Array<string>;
}

function Head({
  title,
  description,
  ogImage,
  overrideTitle = false,
  structuredData = '',
  keywords = [],
}: HeadProps) {
  const currentUrl = useCurrentUrl();

  const htmlTitle = overrideTitle
    ? title
    : `${title} — Sanjeet Kumar · Enterprise Architect`;

  return (
    <NextHead>
      <title>{htmlTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/icon.svg" />
      <link rel="apple-touch-icon" href="/icon.svg" />

      {/* seo */}
      <link rel="canonical" href={currentUrl} />

      {/* og image */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Sanjeet Kumar" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sanjeet_kumar" />
      <meta name="twitter:creator" content="@sanjeet_kumar" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`Image with "${title}" text.`} />

      {/* structured data */}
      {structuredData && (
        <script type="application/ld+json">{structuredData}</script>
      )}
    </NextHead>
  );
}

export default Head;
