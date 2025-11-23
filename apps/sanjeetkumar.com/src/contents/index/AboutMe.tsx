import clsx from 'clsx';

function AboutMe() {
  return (
    <div className={clsx('content-wrapper mb-8')}>
      <div className={clsx('flex flex-col gap-4')}>
        <h2 className={clsx('text-2xl font-bold text-slate-700', 'dark:text-slate-200')}>
          About Me
        </h2>
        <p
          className={clsx(
            'text-lg leading-relaxed text-slate-600',
            'dark:text-slate-400',
            'max-w-4xl' 
          )}
        >
          Enterprise Architecture Lead focused on driving value through technology. Oversees the convergence of AI, Automation, and M&A, ensuring technical ecosystems are optimized, scalable, and future-proof.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
