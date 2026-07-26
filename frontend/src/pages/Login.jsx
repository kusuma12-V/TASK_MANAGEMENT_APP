import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser({
                email,
                password
            });

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userName", response.data.name);

            alert("Login Successful");

            navigate("/dashboard");

        } catch {

            alert("Invalid Email or Password");

        }

    };

    return (
        <div className="container mt-5">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="btn btn-primary">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;