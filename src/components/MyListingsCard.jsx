import { Link } from "react-router";

const MyListingsCard = ({ post }) => {
    const { title, location, rent, roomType } = post;

    return (
        <tr>
            <td> {title} </td>
            <td> {location} </td>
            <td> {roomType} </td>
            <td> {rent} </td>
            <td> <Link className="btn btn-sm btn-neutral ">Update</Link> </td>
            <td> <Link className="btn btn-sm btn-neutral ">Delete</Link> </td>
        </tr>
    )
}

export default MyListingsCard;