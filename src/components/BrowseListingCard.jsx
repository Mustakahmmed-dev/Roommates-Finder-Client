import { Link } from "react-router";

const BrowseListingCard = ({ post }) => {
    const { title, location, rent, roomType, availability, name } = post;

    return (
        <tr>
            <td> {title} </td>
            <td> {location} </td>
            <td> {rent} BDT </td>
            <td> {roomType} </td>
            <td> {availability} </td>
            <td> {name} </td>
            <td> <Link className="btn btn-sm btn-neutral ">See More</Link> </td>
        </tr>
    )
}

export default BrowseListingCard;