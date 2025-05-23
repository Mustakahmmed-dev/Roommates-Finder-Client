import { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { AiOutlineLike } from "react-icons/ai";

const DetailsPage = () => {
    const { user } = use(AuthContext);

    const { id } = useParams();
    const loadedData = useLoaderData();
    const singleData = loadedData.find(data => data._id == id);

    const { title, rent, location, description, preferences, availability, roomType, name, contact, email } = singleData;

    return (
        <div className="w-11/12 md:w-6/12 mx-auto my-14 rounded-lg p-5 bg-cyan-50 space-y-6">
            {/* Poster profile details */}
            <div className="flex gap-2 justify-center">
                <div className="">
                    {/* <img className="rounded-full w-[80px] outline-3 outline-green-500" src={user?.photoURL} alt="" /> */}
                    <h2 className="text-gray-600 font-semibold"> <i>Posted by </i> {name} </h2>
                </div>
            </div>

            {/* Post details */}
            <div className="space-y-4">
                <div className="space-y-3">
                    <h1 className="text-3xl text-center font-bold text-gray-700"> {title} </h1>
                    <p> {description} </p>
                </div>
                <div className="border border-gray-300"></div>
                <div className="leading-10">
                    <p>Preferences: <span className="font-semibold text-gray-800">{preferences}</span> </p>
                    <p>Location: <span className="font-semibold text-gray-800">{location}</span> </p>
                    <p>Room Type: <span className="font-semibold text-gray-800">{roomType}</span> </p>
                    <p>Rent: <span className="font-semibold text-gray-800">{rent} BDT</span> </p>
                    <p>Availability: <span className={`font-semibold ${availability.toLowerCase() === 'available' ? 'text-green-500' : 'text-gray-700'} `}>{availability}</span> </p>
                </div>
                <div className="leading-10">
                    <p>Contact Details: <span className="font-semibold text-gray-800">{contact}</span> </p>

                    <a className="btn bg-cyan-500 text-white" href={`mailto: ${email}`}>Send mail</a>
                    <button className="btn ml-5 bg-cyan-500 text-white">Like<AiOutlineLike size={20}/> </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;