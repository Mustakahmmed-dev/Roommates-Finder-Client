import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
    return (
        <div className="min-h-[60vh] flex justify-center items-center my-3">
            <div className="card bg-base-100 w-full max-w-sm not-first:shrink-0 shadow-2xl">
                <form action="">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-gray-800 capitalize">Register your account</h2>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Full name" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo url" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                        <p className="text-center">Or</p>
                        <button className="flex items-center btn bg-white text-[20px]"> <span className="text-cyan-500">Continue With</span> <FaGoogle size={30} />oogle </button>
                        <div className="text-gray-600 font-normal my-4">
                            <p>Already have an account? <Link to="/Login" className="text-blue-500 font-bold underline">Login</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;