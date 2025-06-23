import type { ReactNode } from 'react';

export interface IRoute {
  path: string;
  element: ReactNode;
  loader?: () => void;
  layout?: React.ComponentType<{ children: ReactNode }>;
}
