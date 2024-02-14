// src/app/components/Sidebar/useSidebar.js

import React from "react";
export const useNavbar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };



  return {
    auth,
    handleMenu,
  };
};
