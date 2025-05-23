

// Name, email, photo, emailVerified,

import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { MdVerified } from "react-icons/md";

const MyListings = () => {
    const { user } = use(AuthContext);

    return (
        <div className="grid grid-cols-5 gap-4 max-w-10/12 mx-auto my-12">
            {/* Profile details */}
            <section className="col-span-5 md:col-span-2 border-1 border-gray-200 p-4 rounded-lg shadow-sm">
                <div>
                    <div className="relative">
                        <img className="w-[100px] rounded-full" src={`${user?.photoURL}`} alt={`User profile photo of ${user?.displayName}`} />
                        <span className="absolute top-14 left-21 z-50"> {user?.emailVerified && <MdVerified className="text-blue-600" size={30}/>} </span>
                    </div>
                    <div>
                        <h2 className="text-xl text-gray-500 font-bold mt-4">Personal Info:</h2>
                        <h3 className=" font-semibold text-gray-800">{user?.displayName} </h3>
                        <p>{user?.email} </p>
                    </div>
                </div>
            </section>

            {/* Listing details */}
            <section className="col-span-5 md:col-span-3 border"></section>
        </div>
    )
}

export default MyListings;