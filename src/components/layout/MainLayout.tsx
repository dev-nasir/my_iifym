
import React from 'react';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className={cn("flex-1", isMobile && "pt-16")}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
