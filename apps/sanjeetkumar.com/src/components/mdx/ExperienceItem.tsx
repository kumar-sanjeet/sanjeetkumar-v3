import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

function ExperienceItem({ children }: PropsWithChildren) {
  return (
    <div className={clsx('group flex flex-col gap-2')}>
      {children}
    </div>
  );
}

export default ExperienceItem;
