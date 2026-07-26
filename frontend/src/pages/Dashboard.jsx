import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTasks } from "../services/taskService";
import TaskCard from "../components/TaskCard";

function Dashboard() {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    loadTasks();

  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");

    alert("Logged Out Successfully");

    navigate("/login");

  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>
          Welcome {localStorage.getItem("userName")}
        </h2>

        <div>

          <Link
            to="/add-task"
            className="btn btn-primary me-2"
          >
            + Add Task
          </Link>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card text-white bg-primary shadow">
            <div className="card-body text-center">
              <h5>Total Tasks</h5>
              <h2>{totalTasks}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success shadow">
            <div className="card-body text-center">
              <h5>Completed</h5>
              <h2>{completedTasks}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning shadow">
            <div className="card-body text-center">
              <h5>Pending</h5>
              <h2>{pendingTasks}</h2>
            </div>
          </div>
        </div>

      </div>

      {tasks.length === 0 ? (
        <div className="alert alert-info">
          No Tasks Found
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            refreshTasks={loadTasks}
          />
        ))
      )}

    </div>
  );
}

export default Dashboard;