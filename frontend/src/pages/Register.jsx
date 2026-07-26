import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{

            await registerUser({
                name,
                email,
                password
            });

            alert("Registration Successful!");

            setName("");
            setEmail("");
            setPassword("");

        }
        catch(error){
            alert("Registration Failed");
        }

    };

    return (

        <div className="container mt-5">

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button className="btn btn-success">
                    Register
                </button>

            </form>

        </div>

    );

}

export default Register;