import { useState } from "react";

function EditTask() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Edit Task functionality will be connected to backend.");
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px" }}>

            <div className="card shadow p-4">

                <h2>Edit Task</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className="form-control mb-3"
                        rows="4"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <select
                        className="form-select mb-3"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>Pending</option>
                        <option>Completed</option>
                    </select>

                    <button className="btn btn-success w-100">
                        Update Task
                    </button>

                </form>

            </div>

        </div>
    );
}

export default EditTask;