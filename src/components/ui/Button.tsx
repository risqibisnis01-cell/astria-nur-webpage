import { Link, type LinkProps } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

type ButtonLinkProps = LinkProps & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({ className = '', variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button className={`btn btn--${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ className = '', variant = 'primary', children, ...props }: ButtonLinkProps) {
  return (
    <Link className={`btn btn--${variant} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
