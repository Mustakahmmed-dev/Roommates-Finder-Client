import { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
    const { user, setUser, signInUser, handleGoogleLogin } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                toast.success("Welcome back, login successful!")
                console.log(result)
                navigate(`${location.state ? location.state : '/'}`)
            }).catch(err => {
                toast.error(err.message)
            })
    }

    const handleGoogleLoginBtn = () => {
        handleGoogleLogin()
            .then(result => {
                navigate(`${location.state ? location.state : '/'}`)
                toast.success("Login successful!")

            }).catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <div className="min-h-[60vh] flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm not-first:shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-gray-800 capitalize">Log into your account</h2>
                    <form onSubmit={handleLogin} action="">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="text-center">Or</p>
                    <button onClick={handleGoogleLoginBtn} className="flex items-center btn bg-white text-[20px]"> <span className="text-cyan-500">Continue With</span> <FaGoogle size={30} />oogle </button>
                    <div className="text-gray-600 font-normal my-4">
                        <p>Don't have an account? <Link to="/register" className="text-blue-500 font-bold underline">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;