
const FeaturedPostCard = ({post}) => {
    const {title, rent, location, roomType, availability, name} = post;
    return(
        <div>
            <h1> {title} </h1>
            <p>Rent: {rent} </p>
            <p>Location: {location}</p>
            <p>Room Type: {roomType} </p>
            <p>Availability: {availability} </p>
            <p>by {name} </p>

        </div>
    )
}

export default FeaturedPostCard;