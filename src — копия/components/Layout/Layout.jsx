import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dogs">Collection</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
