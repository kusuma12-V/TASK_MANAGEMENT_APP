import { deleteTask } from "../services/taskService";

function TaskCard({ task, refreshTasks }) {

    const handleDelete = async () => {

        if(window.confirm("Delete this task?")){

            await deleteTask(task.id);

            alert("Task Deleted Successfully");

            refreshTasks();

        }

    };

    return (

        <div className="card shadow mb-3">

            <div className="card-body">

                <h4>{task.title}</h4>

                <p>{task.description}</p>

                <span className="badge bg-primary">
                    {task.status}
                </span>

                <div className="mt-3">

                    <button className="btn btn-danger btn-sm"
                        onClick={handleDelete}>
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}

export default TaskCard;