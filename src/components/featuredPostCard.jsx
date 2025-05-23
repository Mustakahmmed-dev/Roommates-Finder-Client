import { Link } from "react-router";

const FeaturedPostCard = ({ post }) => {
    const {_id, title, rent, location, roomType, availability, name } = post;
    // console.log(post)
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 hover:shadow-lg transition-all duration-300">
            <div className="space-y-1">
                <h3 className="text-xl font-semibold text-cyan-600">{title}</h3>
                <p className="text-gray-600 text-sm">Posted by: <span className="font-medium">{name}</span></p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <p><span className="font-semibold">Rent:</span> BDT{rent}</p>
                <p><span className="font-semibold">Location:</span> {location}</p>
                <p><span className="font-semibold">Room Type:</span> {roomType}</p>
                <p>
                    <span className="font-semibold">Availability:</span>{' '}
                    <span className={`font-bold ${availability.toLowerCase() === 'available' ? 'text-green-600' : 'text-red-500'}`}>
                        {availability}
                    </span>
                </p>
            </div>

            <div className="pt-4">
                <Link to={`/browse-listings/details/${_id}`} className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition">
                    See More
                </Link>
            </div>
        </div>
    )
}

export default FeaturedPostCard;