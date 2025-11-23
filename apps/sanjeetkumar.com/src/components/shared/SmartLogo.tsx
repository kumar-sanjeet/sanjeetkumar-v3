import React from 'react';
import { FaAws as FaAwsOriginal } from 'react-icons/fa';
import { FcGoogle as FcGoogleOriginal } from 'react-icons/fc';
import {
  SiHsbc as SiHsbcOriginal,
  SiOpenai as SiOpenaiOriginal,
  SiSiemens as SiSiemensOriginal,
} from 'react-icons/si';

// Cast icons to any to avoid "cannot be used as a JSX component" errors with React 19 types
/* eslint-disable @typescript-eslint/no-explicit-any */
const FcGoogle = FcGoogleOriginal as any;
const FaAws = FaAwsOriginal as any;
const SiHsbc = SiHsbcOriginal as any;
const SiSiemens = SiSiemensOriginal as any;
const SiOpenai = SiOpenaiOriginal as any;
/* eslint-enable @typescript-eslint/no-explicit-any */


interface SmartLogoProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

function SmartLogo({ name, className = '', style = {} }: SmartLogoProps) {
  const normalizedName = name.toLowerCase();

  // GROUP A: React Icons
  if (normalizedName === 'google') {
    return <FcGoogle className={className} style={style} />;
  }
  if (normalizedName === 'aws') {
    return <FaAws className={className} style={{ ...style, color: '#FF9900' }} />;
  }
  // Harvard and Berkeley icons are missing in react-icons/si, falling back to images
  // if (normalizedName === 'harvard') return <SiHarvarduniversity color="#A51C30" />;
  // if (normalizedName === 'berkeley') return <SiUcberkeley color="#003262" />;

  // GROUP B: Local Assets
  let src = '';
  switch (normalizedName) {
    case 'pmp':
      src = '/assets/images/logos/pmp.svg';
      break;
    case 'togaf':
      src = '/assets/images/logos/togaf.webp';
      break;
    case 'cgeit':
      src = '/assets/images/logos/cgeit.webp';
      break;
    case 'cobit':
      src = '/assets/images/logos/cobit.webp';
      break;
    case 'ltsa':
      src = '/assets/images/logos/ltsa.svg';
      break;
    case 'robotiqa':
      src = '/assets/images/logos/robotiqa.svg';
      break;
    case 'al-futtaim':
      src = '/assets/images/logos/al-futtaim.svg';
      break;
    case 'rakbank':
      src = '/assets/images/logos/rakbank.svg';
      break;
    case 'iit':
      src = '/assets/images/logos/iit.webp';
      break;
    case 'harvard':
      src = '/assets/images/logos/harvard.png';
      break;
    case 'berkeley':
      src = '/assets/images/logos/berkeley.png';
      break;
    // Keep existing mappings if any
    case 'hsbc':
      return <SiHsbc className={className} style={{ ...style, color: '#DB0011' }} />;
    case 'siemens':
      return <SiSiemens className={className} style={{ ...style, color: '#009999' }} />;
    case 'openai':
      return <SiOpenai className={className} style={style} />;
    default:
      // Fallback for unknown logos
      return <span className={className} style={style}>{name}</span>;
  }

  if (src) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={src}
        alt={name}
        className={className}
        style={style}
      />
    );
  }

  return null;
}

export default SmartLogo;
