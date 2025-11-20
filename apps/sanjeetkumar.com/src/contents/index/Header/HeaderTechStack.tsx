import clsx from 'clsx';
import { m } from 'framer-motion';
import Image from 'next/image';

import {
  FigmaIcon,
  FramerMotionIcon,
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from '@/components/Icons';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div className={clsx('flex flex-col gap-6', 'lg:flex-row lg:gap-24')}>
      {/* First Column (Existing) */}
      <div>
        <m.p
          className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.6 }}
        >
          current favorite tech stack/tools:
        </m.p>
        <m.ul
          className={clsx(
            'flex items-center gap-3.5 text-slate-500',
            'dark:text-slate-500'
          )}
          initial="hide"
          animate="show"
          transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        >
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:text-[#3178C6]')}>
              <TypeScriptIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:text-[#61DAFB]')}>
              <ReactIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:text-[#06B6D4]')}>
              <TailwindCssIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:text-[#0055FF]')}>
              <FramerMotionIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
          <m.li variants={animation}>
            <div
              className={clsx(
                'transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]'
              )}
            >
              <NextJsIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>

          <m.li variants={animation}>
            <a
              href="https://antigravity.google/"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-80')}
            >
              <Image
                src="/assets/images/google-antigravity.png"
                alt="Google Antigravity"
                width={24}
                height={24}
                className={clsx('h-6 w-6')}
              />
            </a>
          </m.li>
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:text-[#F24E1E]')}>
              <FigmaIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </m.ul>
      </div>

      {/* Second Column (New) */}
      <div>
        <m.p
          className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.8 }}
        >
          my favourite technologies:
        </m.p>
        <m.ul
          className={clsx(
            'flex items-center gap-3.5 text-slate-500',
            'dark:text-slate-500'
          )}
          initial="hide"
          animate="show"
          transition={{ delayChildren: 0.8, staggerChildren: 0.025 }}
        >
          {/* AWS */}
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:opacity-70')}>
               <img src="https://cdn.simpleicons.org/amazonwebservices/808080" alt="AWS" className="h-6 w-6 dark:invert" />
            </div>
          </m.li>
          {/* Google Cloud */}
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:opacity-70')}>
               <img src="https://cdn.simpleicons.org/googlecloud/808080" alt="Google Cloud" className="h-6 w-6 dark:invert" />
            </div>
          </m.li>
          {/* Azure */}
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:opacity-70')}>
               <img src="https://cdn.simpleicons.org/microsoftazure/808080" alt="Azure" className="h-6 w-6 dark:invert" />
            </div>
          </m.li>
          {/* OpenAI */}
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:opacity-70')}>
               <img src="https://cdn.simpleicons.org/openai/808080" alt="OpenAI" className="h-6 w-6 dark:invert" />
            </div>
          </m.li>
          {/* The Open Group */}
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}>
               <img src="https://logo.clearbit.com/opengroup.org" alt="The Open Group" className="h-6 w-6 bg-white rounded-full p-0.5" />
            </div>
          </m.li>
          {/* PMI */}
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}>
               <img src="https://logo.clearbit.com/pmi.org" alt="PMI" className="h-6 w-6 bg-white rounded-full p-0.5" />
            </div>
          </m.li>
          {/* ISACA */}
          <m.li variants={animation}>
            <div className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}>
               <img src="https://logo.clearbit.com/isaca.org" alt="ISACA" className="h-6 w-6 bg-white rounded-full p-0.5" />
            </div>
          </m.li>
        </m.ul>
      </div>
    </div>
  );
}

export default HeaderTechStack;
