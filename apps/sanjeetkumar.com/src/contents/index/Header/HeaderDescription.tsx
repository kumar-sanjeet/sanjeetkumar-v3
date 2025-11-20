import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderDescription() {
  return (
    <div className={clsx('max-w-2xl')}>
      <m.h2
        className={clsx(
          'mb-6 text-3xl font-bold text-slate-700',
          'dark:text-slate-200',
          'md:text-4xl'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.4 }}
      >
        Architecting the Future of Enterprise
      </m.h2>
      <m.p
        className={clsx(
          'text-lg leading-relaxed text-slate-600',
          'dark:text-slate-400',
          'md:text-xl'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
      >
        Enterprise Architecture Director & Digital Strategist. I specialize in
        de-risking M&A integrations and orchestrating large-scale cloud
        transformations. By combining TOGAF governance with cutting-edge
        Agentic AI, I build technology landscapes that are secure, scalable,
        and future-proof.
      </m.p>
    </div>
  );
}

export default HeaderDescription;
