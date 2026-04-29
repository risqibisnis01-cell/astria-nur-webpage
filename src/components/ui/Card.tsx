import type { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div';
  children: ReactNode;
};

export function Card({ as: Component = 'article', className = '', children, ...props }: CardProps) {
  return (
    <Component className={`card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
