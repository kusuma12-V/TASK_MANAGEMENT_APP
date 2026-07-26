import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">

      <h1 className="display-3 fw-bold text-primary">
        Task Management Application
      </h1>

      <p className="lead mt-4">
        Organize your daily tasks, track your progress,
        and improve your productivity.
      </p>

      <div className="mt-5">

        <Link
          to="/register"
          className="btn btn-primary btn-lg me-3"
        >
          Get Started
        </Link>

        <Link
          to="/login"
          className="btn btn-outline-primary btn-lg"
        >
          Login
        </Link>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h3>📋</h3>
            <h5>Create Tasks</h5>
            <p>Create unlimited personal tasks.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h3>✅</h3>
            <h5>Track Progress</h5>
            <p>Monitor completed and pending tasks.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h3>🚀</h3>
            <h5>Boost Productivity</h5>
            <p>Stay organized every day.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;