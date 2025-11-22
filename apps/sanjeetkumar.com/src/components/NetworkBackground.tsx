/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.05, duration: 1.5, ease: 'easeInOut' },
      opacity: { delay: i * 0.05, duration: 0.5 },
    },
  }),
};

function NetworkBackground() {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      fill="none"
      initial="hide"
      animate="show"
      className={clsx(
        'stroke-accent-500 -mt-20 h-full w-full opacity-30',
        'dark:opacity-20'
      )}
    >
      {/* Diagonal Lines (Denser) */}
      {[...Array(21)].map((_, i) => (
        <m.path
          key={`diag-${i}`}
          d={`M${i * 50} 600 L${400 + i * 50} 0`}
          strokeWidth="1"
          variants={animation}
          custom={i}
        />
      ))}
      
      {/* Cross Lines (Denser) */}
      {[...Array(6)].map((_, i) => (
        <m.path
          key={`cross-${i}`}
          d={`M0 ${100 + i * 100} L1000 ${300 + i * 100}`}
          strokeWidth="1"
          variants={animation}
          custom={i + 21}
        />
      ))}
       {[...Array(6)].map((_, i) => (
        <m.path
          key={`cross-rev-${i}`}
          d={`M0 ${500 - i * 100} L1000 ${100 - i * 100}`}
          strokeWidth="1"
          variants={animation}
          custom={i + 27}
        />
      ))}
    </m.svg>
  );
}

export default NetworkBackground;
