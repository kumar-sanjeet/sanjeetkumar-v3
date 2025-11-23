
import clsx from 'clsx';
import { m } from 'framer-motion';

import {
  FigmaIcon,
  FramerMotionIcon,
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from '@/components/Icons';
import SmartLogo from '@/components/shared/SmartLogo';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div className={clsx('grid grid-cols-1 gap-6', 'lg:grid-cols-3 lg:gap-8')}>
      {/* First Column (New Logos - Swapped) */}
      <div>
        <m.p
          className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.8 }}
        >
          my favourite technologies/frameworks:
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
          {/* OpenAI */}
          <m.li variants={animation}>
            <a
              href="https://platform.openai.com/docs/overview"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-70')}
            >
              <SmartLogo
                name="openai"
                className="h-6 w-6 dark:invert"
              />
            </a>
          </m.li>

          {/* TOGAF */}
          <m.li variants={animation}>
            <a
              href="https://www.opengroup.org/togaf"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}
            >
              <SmartLogo
                name="togaf"
                className="h-6 w-auto object-contain"
              />
            </a>
          </m.li>

          {/* PMP */}
          <m.li variants={animation}>
            <a
              href="https://www.pmi.org/certifications/project-management-pmp"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}
            >
              <SmartLogo
                name="pmp"
                className="h-6 w-auto object-contain"
              />
            </a>
          </m.li>

          {/* CGEIT */}
          <m.li variants={animation}>
            <a
              href="https://www.isaca.org/credentialing/cgeit"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}
            >
              <SmartLogo
                name="cgeit"
                className="h-6 w-auto object-contain"
              />
            </a>
          </m.li>

          {/* AWS */}
          <m.li variants={animation}>
            <a
              href="https://aws.amazon.com/ai/"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}
            >
              <SmartLogo
                name="aws"
                className="h-6 w-auto object-contain"
              />
            </a>
          </m.li>

          {/* COBIT */}
          <m.li variants={animation}>
            <a
              href="https://www.isaca.org/credentialing/cobit-foundation"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-70 grayscale opacity-60 hover:grayscale-0 hover:opacity-100')}
            >
              <SmartLogo
                name="cobit"
                className="h-6 w-auto object-contain"
              />
            </a>
          </m.li>

           {/* Antigravity */}
           <m.li variants={animation}>
            <a
              href="https://antigravity.google/"
              target="_blank"
              rel="noreferrer"
              className={clsx('transition duration-200 hover:opacity-80')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/google-antigravity.png"
                alt="Google Antigravity"
                className={clsx('h-6 w-6')}
              />
            </a>
          </m.li>
        </m.ul>
      </div>

      {/* Second Column (Existing Tech Stack - Swapped) */}
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
            <div className={clsx('transition duration-200 hover:text-[#F24E1E]')}>
              <FigmaIcon className={clsx('h-6 w-6')} />
            </div>
          </m.li>
        </m.ul>
      </div>

      {/* Empty Third Column for Grid Alignment */}
      <div className="hidden lg:block" />

    </div>
  );
}

export default HeaderTechStack;
