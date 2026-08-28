import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-screen-2xl',
};

export const Container = ({
  children,
  className,
  maxWidth = 'lg',
}: ContainerProps) => {
  return (
    <div className={clsx('mx-auto px-4 md:px-6', maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  );
};
