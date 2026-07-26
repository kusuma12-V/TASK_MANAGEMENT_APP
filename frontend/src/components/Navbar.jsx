import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Task Manager
        </Link>

        <div>

          <Link className="btn btn-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-light me-2" to="/dashboard">
            Dashboard
          </Link>

          <Link className="btn btn-warning me-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-success" to="/register">
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;