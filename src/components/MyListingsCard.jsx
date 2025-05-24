import { Link } from "react-router";
import Swal from "sweetalert2";

const baseURL = import.meta.env.VITE_serverLink;


const MyListingsCard = ({ post, listedPosts, setListedPosts }) => {
    const { _id, title, location, rent, roomType } = post;

    const handleDeletePost = (id) => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {
            //    Delete operation
                fetch(`${baseURL}/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("after deletion", data)
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your listing post has been deleted.", "success");

                            // Remove the deleted post and repush the remaining posts
                            const remainingPosts = listedPosts.filter(post => post._id !== id);
                            setListedPosts(remainingPosts);
                        }
                    })
            }
        });


    }


    return (
        <tr>
            <td> {title} </td>
            <td> {location} </td>
            <td> {roomType} </td>
            <td> {rent} </td>
            <td>
                {/* <Link className="btn btn-sm btn-neutral ">Update</Link>  */}
                <div className="join join-vertical gap-1">
                    <Link to={`/my-listings/updateDetails/${_id}`} className="btn btn-sm btn-neutral join-item">Update</Link>
                    <button onClick={() => handleDeletePost(_id)} className="btn btn-sm btn-neutral join-item">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default MyListingsCard;