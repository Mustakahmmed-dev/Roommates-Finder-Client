import { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const baseURL = import.meta.env.VITE_serverLink;
console.log(baseURL);

const AddPost = () => {
    const {user } = use(AuthContext);

    const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formInputData = new FormData(form);
        const postingData = Object.fromEntries(formInputData.entries());
        // console.log(postingData);

        // Send data to server/DB
        fetch(`${baseURL}/posts`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postingData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Post successful');
                // console.log("after adding to db", data)
                form.reset();
            }
        })

    }
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 py-6">
            <div>
            <h2 className="text-2xl text-cyan-500 font-semibold mb-6 text-center">Add Your Roommate Need Listing</h2>
            <p className="mb-6 text-gray-700">If you are looking for roommates to share your room space with like minded mates that you are looking then share your maximum details to impress the audiences.
            </p>
            </div>
            <form onSubmit={handleAddPost} className="space-y-4">
                <input type="text" name="title" placeholder="Title (e.g., Looking for a roommate in NYC)" className="input input-bordered w-full" required />

                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />

                <input type="number" name="rent" placeholder="Rent Amount" className="input input-bordered w-full" required />

                <select name="roomType" className="select select-bordered w-full" required>
                    <option value="">Select Room Type</option>
                    <option value="single">Single</option>
                    <option value="shared">Shared</option>
                    <option value="private">Private</option>
                </select>

                <input type="text" name="preferences" placeholder="Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)" className="input input-bordered w-full" />

                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" rows="4" required></textarea>

                <input type="text" name="contact" placeholder="Contact Info" className="input input-bordered w-full" required />

                <select name="availability" className="select select-bordered w-full" required>
                    <option value="available">Available</option>
                    <option value="not available">Not Available</option>
                </select>

                <input type="email" name="email" value={`${user.email && user.email}`} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />

                <input type="text" name="name" value={`${user.displayName && user.displayName}`} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />

                <button type="submit" className="btn text-white bg-info w-full">Publish Post</button>
            </form>
        </div>

    )
}

export default AddPost;