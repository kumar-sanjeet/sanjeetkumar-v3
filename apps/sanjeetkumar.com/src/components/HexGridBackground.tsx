import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 0.5,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

function HexGridBackground() {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      fill="none"
      initial="hide"
      animate="show"
      variants={animation}
      className={clsx(
        'stroke-slate-300 dark:stroke-slate-700 -mt-20 h-full'
      )}
    >
      <defs>
        <pattern
          id="hex-grid"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2)"
        >
          <path
            d="M25 0 L50 12.5 L50 37.5 L25 50 L0 37.5 L0 12.5 Z"
            strokeWidth="1"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-grid)" />
      <m.circle
        cx="400"
        cy="300"
        r="150"
        fill="url(#hex-grid)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </m.svg>
  );
}

export default HexGridBackground;
