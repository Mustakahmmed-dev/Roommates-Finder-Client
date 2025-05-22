
import FeaturedPostCard from "./featuredPostCard";

const FeaturedPosts = ({loadedPostsData}) => {
    console.log(loadedPostsData)
    return (
        <div className="w-10/12 mx-auto my-10">
            <h1 className="text-3xl font-bold text-center">Featured Posts</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    loadedPostsData.map(post => <FeaturedPostCard key={post._id} post={post}></FeaturedPostCard> )
                }
            </div>
        </div>
    )
}

export default FeaturedPosts;