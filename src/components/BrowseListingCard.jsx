import { Link } from "react-router";

const BrowseListingCard = ({ post }) => {
    const {_id, title, location, rent, roomType, availability, name } = post;
    // console.log(_id)

    return (
        <tr>
            <td> {title} </td>
            <td> {location} </td>
            <td> {rent} BDT </td>
            <td> {roomType} </td>
            <td> {availability} </td>
            <td> {name} </td>
            <td> <Link to={`/browse-listings/details/${_id}`} className="btn btn-sm btn-neutral ">See More</Link> </td>
        </tr>
    )
}

export default BrowseListingCard;