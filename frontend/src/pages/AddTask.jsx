import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../services/taskService";

function AddTask() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addTask({
                title: title,
                description: description,
                status: "Pending"
            });

            alert("Task Added Successfully!");

            navigate("/dashboard");

        } catch (error) {

            alert("Error adding task");

            console.log(error);

        }

    };

    return (

        <div className="container mt-5" style={{maxWidth:"600px"}}>

            <div className="card shadow p-4">

                <h2 className="mb-4">Add New Task</h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Task Title
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Description
                        </label>

                        <textarea
                            className="form-control"
                            rows="4"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            required
                        ></textarea>

                    </div>

                    <button className="btn btn-primary w-100">
                        Add Task
                    </button>

                </form>

            </div>

        </div>

    );

}

export default AddTask;