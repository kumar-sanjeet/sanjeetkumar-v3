import clsx from 'clsx';

function AboutSection() {
  return (
    <section className={clsx('py-16 lg:py-24', 'bg-slate-50 dark:bg-slate-900/50')}>
      <div className={clsx('content-wrapper')}>
        <div className={clsx('mx-auto max-w-3xl text-center')}>
          <h2
            className={clsx(
              'mb-6 text-3xl font-bold text-slate-700',
              'dark:text-slate-200',
              'md:text-4xl'
            )}
          >
            Architecting the Future of Enterprise
          </h2>
          <p
            className={clsx(
              'text-lg leading-relaxed text-slate-600',
              'dark:text-slate-400',
              'md:text-xl'
            )}
          >
            Enterprise Architecture Director & Digital Strategist. I specialize in
            de-risking M&A integrations and orchestrating large-scale cloud
            transformations. By combining TOGAF governance with cutting-edge
            Agentic AI, I build technology landscapes that are secure, scalable,
            and future-proof.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
