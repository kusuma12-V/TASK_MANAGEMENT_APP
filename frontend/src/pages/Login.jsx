import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            const response=await loginUser({
                email,
                password
            });

            alert(response.data.message);

        }

        catch{

            alert("Invalid Email or Password");

        }

    }

    return(

        <div className="container mt-5">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

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

                <button className="btn btn-primary">
                    Login
                </button>

            </form>

        </div>

    )

}

export default Login;