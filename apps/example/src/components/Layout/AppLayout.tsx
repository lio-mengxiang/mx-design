import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
export default AppLayout;
