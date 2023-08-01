import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import PageNav from '../PageNav/nav';

function AppLayout() {
  const [isShowMask, setShowMask] = useState(false);

  return (
    <div>
      <NavBar />
      {isShowMask && <PageNav />}
      <Outlet />
    </div>
  );
}
export default AppLayout;
