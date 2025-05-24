import { Link } from "react-router";
import Lottie from 'lottie-react';
import errorAnimation from '../assets/error_animation.json';

const ErrorPage = () => {
    return(
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            <Lottie animationData={errorAnimation} loop={true} className="w-80 h-80" />
            <h1 className="text-3xl font-bold">Oops! Page Not Found</h1>
            <h2 className="text-xl font-semibold">We couldn’t find the page you were looking for.</h2>
            <p> It might have been removed, renamed, or doesn't exist in the website. </p>
            <Link to="/" className="btn btn-neutral">Go back </Link>
        </div>
    )
}

export default ErrorPage;