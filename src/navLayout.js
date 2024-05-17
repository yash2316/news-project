import { Outlet, NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
      
      <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center nav-bar  p-2">
          <NavLink to="/" activeclassname="active" className="nav-link-">HOME</NavLink>
          <NavLink to="/NATIONAL" activeclassname="active" className="nav-link-">NATIONAL</NavLink>
          <NavLink to="/BUSINESS" activeclassname="active" className="nav-link-">BUSINESS</NavLink>
          <NavLink to="/WORLD" activeclassname="active" className="nav-link-">WORLD</NavLink>
          <NavLink to="/TECHNOLOGY" activeclassname="active"  className="nav-link-">TECHNOLOGY</NavLink>
          <NavLink to="/SPORTS" activeclassname="active" className="nav-link-">SPORTS</NavLink>
          <NavLink to="/SCIENCE" activeclassname="active" className="nav-link-">SCIENCE</NavLink>
          <NavLink to="/ENTERTAINMENT" activeclassname="active" className="nav-link-">ENTERTAINMENT</NavLink>
        </div>

      <Outlet />
    </>
  )
};

export default Layout;