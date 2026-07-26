function Profile() {
  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body text-center">

          <img
            src="https://via.placeholder.com/120"
            className="rounded-circle mb-3"
            alt="Profile"
          />

          <h3>User Profile</h3>

          <p>Email: user@example.com</p>

          <button className="btn btn-danger">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;