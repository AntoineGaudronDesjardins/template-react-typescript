import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Layout: React.FC = () => {
  const { pathParameter } = useParams();
  return (
    <>
      <h1>The first path parameter is {pathParameter}</h1>
      <Outlet />
    </>
  );
};

export const Component = Layout;
export default Layout;
