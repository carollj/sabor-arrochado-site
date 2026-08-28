import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

const backgroundClasses = {
  light: 'bg-off-white',
  dark: 'bg-green-dark text-white',
};

const paddingClasses = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
};

export const Section = ({
  children,
  className,
  id,
  background = 'light',
  padding = 'lg',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={clsx(
        backgroundClasses[background],
        paddingClasses[padding],
        'transition-colors duration-300',
        className
      )}
    >
      {children}
    </section>
  );
};
