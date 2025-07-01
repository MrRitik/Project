import { type ReactNode } from 'react';

interface SimpleLayoutProps {
  children: ReactNode;
}

export const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  return <main>{children}</main>;
};
