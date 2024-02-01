import { useState, useEffect } from 'react';

export const useIsLargeScreen = () => {
  const [win] = useState<Window | undefined>(typeof window !== 'undefined' ? window : undefined);
  const [isLargeScreen, setIsLargeScreen] = useState(win ? win.innerWidth >= 1024 : false);
  
  useEffect(() => {
    if (win) {
      const handleResize = () => {
        setIsLargeScreen(win.innerWidth >= 1024);
      };
  
      win.addEventListener('resize', handleResize);
  
      return () => {
        win.removeEventListener('resize', handleResize);
      };
    }
  }, [win]);

  return isLargeScreen;
};




export const useIsSmallScreen = () => {
  const [win] = useState<Window | undefined>(typeof window !== 'undefined' ? window : undefined);
  const [isSmallScreen, setIsSmallScreen] = useState(win ? win.innerWidth <= 640 : false);
  
  useEffect(() => {
    if (win) {
      const handleResize = () => {
        setIsSmallScreen(win.innerWidth <= 640);
      };
  
      win.addEventListener('resize', handleResize);
  
      return () => {
        win.removeEventListener('resize', handleResize);
      };
    }
  }, [win]);

  return isSmallScreen;
};