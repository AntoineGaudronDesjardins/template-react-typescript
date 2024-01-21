import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>My app header</header>
      <Outlet />
    </div>
  );
};

export default Layout;
