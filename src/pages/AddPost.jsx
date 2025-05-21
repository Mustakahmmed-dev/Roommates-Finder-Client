
const AddPost = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 py-6">
            <div>
            <h2 className="text-2xl text-cyan-500 font-semibold mb-6 text-center">Add Your Roommate Need Listing</h2>
            <p className="mb-6 text-gray-700">If you are looking for roommates to share your room space with like minded mates that you are looking then share your maximum details to impress the audiences.
            </p>
            </div>
            <form className="space-y-4">
                <input type="text" name="title" placeholder="Title (e.g., Looking for a roommate in NYC)" className="input input-bordered w-full" required />

                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />

                <input type="number" name="rent" placeholder="Rent Amount" className="input input-bordered w-full" required />

                <select name="roomType" className="select select-bordered w-full" required>
                    <option value="">Select Room Type</option>
                    <option value="Single">Single</option>
                    <option value="Shared">Shared</option>
                    <option value="Private">Private</option>
                </select>

                <input type="text" name="preferences" placeholder="Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)" className="input input-bordered w-full" />

                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" rows="4" required></textarea>

                <input type="text" name="contact" placeholder="Contact Info" className="input input-bordered w-full" required />

                <select name="availability" className="select select-bordered w-full" required>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>

                <input type="email" name="email" value="user@example.com" readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />

                <input type="text" name="name" value="John Doe" readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />

                <button type="submit" className="btn bg-info w-full">Add Listing</button>
            </form>
        </div>

    )
}

export default AddPost;