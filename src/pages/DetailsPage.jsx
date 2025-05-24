import { use, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { AiOutlineLike } from "react-icons/ai";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const baseURL = import.meta.env.VITE_serverLink;

const DetailsPage = () => {
    const { user } = use(AuthContext);

    const { id } = useParams();
    const loadedData = useLoaderData();
    const singleData = loadedData.find(data => data._id == id);
    const { title, rent, location, description, preferences, availability, roomType, name, contact, email } = singleData;

    const [likes, setLikes] = useState(singleData.likeCount || 0);
    const [disableLike, setDisableLike] = useState(false);
    const [showContacts, setShowContacts] = useState(false);


    const handleLike = async () => {
        if (user?.email === email) {
            return Swal.fire({
                position: "center",
                icon: "error",
                title: "You can't like your own post",
                showConfirmButton: false,
                timer: 1500
            });
        }

        const res = await fetch(`${baseURL}/posts/like/${id}`, {
            method: "PATCH"
        });

        const data = await res.json();

        if (data.modifiedCount > 0) {
            toast("Like successful");
            setLikes(prev => prev + 1);
            setShowContacts(true);
            setDisableLike(true);
        }

    }
    return (
        <div className="w-11/12 md:w-6/12 mx-auto my-14 rounded-lg p-5 bg-cyan-50 space-y-6">
            {/* Poster profile details */}
            <div className="flex gap-2 justify-between">
                <div className="">
                    {/* <img className="rounded-full w-[80px] outline-3 outline-green-500" src={user?.photoURL} alt="" /> */}
                    <h2 className="text-gray-600 font-semibold"> <i>Posted by </i> {name} </h2>
                </div>
                <h4> {likes} People interested in </h4>
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

                    <p>Contact Details: {showContacts ? <span className="font-semibold text-gray-800">{contact}</span> : <span className="text-gray-400 italic">click on like to see contacts</span>} </p>
                    {showContacts && <a className="btn bg-cyan-500 text-white" href={`mailto: ${email}`}>Send mail</a>}

                    <button onClick={handleLike} className="btn ml-5 bg-cyan-500 text-white">Like<AiOutlineLike size={20} /> </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;