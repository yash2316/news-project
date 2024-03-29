import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/NATIONAL">NATIONAL</Link>
          </li>
          <li>
            <Link to="/BUSINESS">BUSINESS</Link>
          </li>
          <li>
            <Link to="/WORLD">WORLD</Link>
          </li>
          <li>
            <Link to="/TECHNOLOGY">TECHNOLOGY</Link>
          </li>
          <li>
            <Link to="/SPORTS">SPORTS</Link>
          </li>
          <li>
            <Link to="/SCIENCE">SCIENCE</Link>
          </li>
          <li>
            <Link to="/HEALTH">HEALTH</Link>
          </li>
          <li>
            <Link to="/ENTERTAINMENT">ENTERTAINMENT</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
// WORLD
// NATIONAL
// BUSINESS
// TECHNOLOGY
// ENTERTAINMENT
// SPORTS
// SCIENCE

