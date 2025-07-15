import React from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps): React.ReactElement {
  return (
    <div className={cn('min-h-screen bg-background', inter.className, className)}>
      {children}
    </div>
  );
}
