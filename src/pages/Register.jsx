import { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
    const { createUser, setUser, updateUser, handleGoogleLogin } = use(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
        if (!isValid) {
            setError("Password must have at least six characters, one Uppercase and one lowercase at least.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    toast.success("Congrats ", name, "! Your account has been created successfully.")
                    setUser(createdUser)
                })
                console.log(result)


            }).catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="min-h-[60vh] flex justify-center items-center my-3">
            <div className="card bg-base-100 w-full max-w-sm not-first:shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-gray-800 capitalize">Register your account</h2>
                    <form onSubmit={handleRegister} action="">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="name" required className="input" placeholder="Full name" />
                            <label className="label">Email</label>
                            <input type="email" name="email" required className="input" placeholder="Email" />
                            <label className="label">Photo URL</label>
                            <input type="text" name="photo" required className="input" placeholder="Photo url" />
                            <label className="label">Password</label>
                            <input type="password" name="password" required className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="text-red-500 font-semibold"> {error && error} </p>
                    <p className="text-center">Or</p>
                    <button onClick={handleGoogleLogin} className="flex items-center btn bg-white text-[20px]"> <span className="text-cyan-500">Continue With</span> <FaGoogle size={30} />oogle </button>
                    <div className="text-gray-600 font-normal my-4">
                        <p>Already have an account? <Link to="/Login" className="text-blue-500 font-bold underline">Login</Link> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;