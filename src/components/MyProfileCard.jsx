import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { MdVerified } from "react-icons/md";

const MyProfileCard = () => {
    const {user } = use(AuthContext);

    return (
        <div>
            <div className="relative">
                <img className="w-[100px] rounded-full" src={`${user?.photoURL}`} alt={`User profile photo of ${user?.displayName}`} />
                <span className="absolute top-14 left-21 z-50"> {user?.emailVerified && <MdVerified className="text-blue-600" size={30} title={`${user.displayName} has been verified`} /> } </span>
            </div>
            <div>
                <h2 className="text-xl text-gray-500 font-bold mt-4">Personal Info:</h2>
                <h3 className=" font-semibold text-gray-800">{user?.displayName} </h3>
                <p>{user?.email} </p>
            </div>
        </div>
    )
}

export default MyProfileCard;