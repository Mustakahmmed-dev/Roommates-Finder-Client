
import { Link } from "react-router";
import FeaturedPostCard from "./featuredPostCard";
import { Suspense } from "react";
import Loader from "./Loader";

const FeaturedPosts = ({ filteredPosts }) => {

    return (
        <div className="w-10/12 mx-auto my-10 space-y-8">
            <div className="text-center max-w-[600px] mx-auto my-10">
                <h1 className="text-4xl font-bold text-cyan-500 my-5">Featured Posts</h1>
                <p className="text-gray-700 font-normal">Discover available roommate listings tailored to your preferences. Browse through featured posts to find your ideal living companion today. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Suspense fallback={<Loader></Loader>}>
                    {
                        filteredPosts.map(post => <FeaturedPostCard key={post._id} post={post}></FeaturedPostCard>)
                    }
                </Suspense>
            </div>
            <div className="text-center">
                <Link to="/browse-listings" className="btn btn-neutral">See All Posts</Link>
            </div>
        </div>
    )
}

export default FeaturedPosts;