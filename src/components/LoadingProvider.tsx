'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Loading from './Loading';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查是否已经加载过（避免每次刷新都显示 loading）
    const hasLoadedBefore = sessionStorage.getItem('hasLoaded');
    
    if (hasLoadedBefore) {
      setIsLoading(false);
      return;
    }

    // 监听所有资源加载完成
    const handleLoad = () => {
      // 添加一个最小加载时间，确保用户能看到 loading 效果
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2000);
    };

    // 如果页面已经加载完成
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <Loading isLoading={isLoading} onComplete={handleLoadingComplete} />
      {children}
    </LoadingContext.Provider>
  );
}
