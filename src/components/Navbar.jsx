import { Link, useSearchParams } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 container-fluid d-flex align-items-center justify-content-between">
      <h1 className="navbar-brand mb-0">
        <Link to="/" className="text-decoration-none text-light">Shopping </Link>
      </h1>
     
      <div>
        <Link className="btn btn-outline-primary me-2" to="/signin">Sign In</Link>
        <Link className="btn btn-outline-success" to="/signup">Sign Up</Link>
        <Link className="btn btn-outline-success" to="/logout">Log out</Link>
      </div>
    </nav>
  );
};

export default Navbar;
