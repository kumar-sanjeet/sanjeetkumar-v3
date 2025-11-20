import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {

  return (
    <div>

      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx(
            'mb-4 block text-[2.5rem] font-[1000] leading-none',
            'md:mb-6 md:text-7xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            Sanjeet
          </strong>{' '}
          Kumar,{' '}
        </m.span>
        <m.h1
          className={clsx(
            'block text-base text-slate-600',
            'md:text-xl',
            'dark:text-slate-400'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <strong
            className={clsx(
              'font-bold text-slate-700',
              'dark:text-slate-300'
            )}
          >
            Enterprise Architecture Director
          </strong>{' '}
          specializing in M&A, Agentic AI & Strategy.
        </m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;
