import { Suspense, use, useEffect, useState } from "react";
import BrowseListingCard from "../components/BrowseListingCard";
import Loader from "../components/Loader";
import { AuthContext } from "../contexts/AuthContext";

const BrowseListings = () => {
    const {setLoading} = use(AuthContext);

    const [allPosts, setAllPosts] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => setAllPosts(data))
            setLoading(false)

    }, [])

    return (
        <div>
            <div className="w-11/12 md:w-9/12 mx-auto my-14">
                <div className="my-7 space-y-3 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">All Roommate Listings</h1>
                    <p className="text-gray-700">Browse through the complete list of roommate posts shared by users. This table includes both currently available and already occupied listings, giving you a full overview of the latest postings. View important details like title, location, rent, room type, availability status, and the poster's name. Click on "See More" to explore each post in greater detail and find the best match for your living preferences.</p>
                </div>

                <div>
                    <div className="flex justify-between my-3">
                        <h2 className="font-semibold text-gray-800">Total Listings: {allPosts.length} </h2>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Search here" className="input" />
                            <button className="btn btn-info" type="submit">Search</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">

                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Location</th>
                                    <th>Rent</th>
                                    <th>Room type</th>
                                    <th>Availability</th>
                                    <th>Posted by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Suspense fallback={<Loader></Loader>}>
                                    {
                                        allPosts.map(post => <BrowseListingCard key={post._id} post={post}></BrowseListingCard>)
                                    }
                                </Suspense>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseListings;