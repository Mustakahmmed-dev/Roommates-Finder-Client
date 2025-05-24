import { useLoaderData } from "react-router";

const UpdateDetails = () => {
    const { title, location, rent, roomType, preferences, description, contact, availability, email, name } = useLoaderData();
    // console.log(loadedData)

    const handleUpdatePostDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Send updated docs to the database.

    }
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 py-6">
            <div>
                <h2 className="text-2xl text-cyan-500 font-semibold mb-6 text-center">Update Your Post Details</h2>
            </div>
            <form onSubmit={handleUpdatePostDetails} className="space-y-4">
                <input type="text" name="title" defaultValue={title} placeholder="Title (e.g., Looking for a roommate in NYC)" className="input input-bordered w-full" required />

                <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" required />

                <input type="number" name="rent" defaultValue={rent} placeholder="Rent Amount" className="input input-bordered w-full" required />

                <select name="roomType" defaultValue={roomType} className="select select-bordered w-full" required>
                    <option value="">Select Room Type</option>
                    <option value="single">Single</option>
                    <option value="shared">Shared</option>
                    <option value="private">Private</option>
                </select>

                <input type="text" name="preferences" defaultValue={preferences} placeholder="Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)" className="input input-bordered w-full" />

                <textarea name="description" defaultValue={description} placeholder="Description" className="textarea textarea-bordered w-full" rows="4" required></textarea>

                <input type="text" name="contact" defaultValue={contact} placeholder="Contact Info" className="input input-bordered w-full" required />

                <select name="availability" defaultValue={availability} className="select select-bordered w-full" required>
                    <option value="available">Available</option>
                    <option value="not available">Not Available</option>
                </select>

                <input type="email" name="email" value={email} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />

                <input type="text" name="name" value={name} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />

                <button type="submit" className="btn bg-info w-full text-white">Update Post</button>
            </form>
        </div>
    )
}

export default UpdateDetails;