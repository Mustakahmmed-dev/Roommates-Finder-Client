
import { Suspense, use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { MdVerified } from "react-icons/md";
import MyProfileCard from "../components/MyProfileCard";
import MyListingsCard from "../components/MyListingsCard";
import Loader from "../components/Loader";

const MyListings = () => {
    const { user, setLoading } = use(AuthContext);
    const [listedPosts, setListedPosts] = useState([]);
    const userEmail = user && user.email;
    
    const filteredPosts = listedPosts.filter(post => post.email == userEmail);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => setListedPosts(data))
            setLoading(false);
    }, [])

    return (
        <div className="grid grid-cols-6 gap-4 max-w-10/12 mx-auto my-12">
            {/* Profile details */}
            <section className="md:sticky md:top-0 h-fit col-span-6 md:col-span-2 border-1 border-gray-200 p-5 pb-12 rounded-lg shadow-sm">
                <MyProfileCard></MyProfileCard>
            </section>

            {/* Listing details */}
            <section className="col-span-6 md:col-span-4 ">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Your Listings</h1>
                <div className="flex justify-between my-3">
                    <h2 className="font-semibold text-gray-800">Total: {listedPosts.length} </h2>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Search here" className="input" />
                        <button className="btn btn-info" type="submit">Search</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Room type</th>
                                <th>Rent</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Suspense fallback={<Loader></Loader>}>
                                {
                                    filteredPosts.map(post => <MyListingsCard key={post._id} post={post}></MyListingsCard>)
                                }
                            </Suspense>
                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    )
}

export default MyListings;