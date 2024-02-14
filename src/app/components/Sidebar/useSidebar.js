// src/app/components/Sidebar/useSidebar.js

import { useState, useCallback } from 'react';

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  return { isSidebarOpen, toggleSidebar };
};
