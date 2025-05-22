import { use, useEffect, useState } from "react";
import FeaturedPosts from "../components/FeaturedPosts";
import FrequentlyAskQuest from "../components/FrequentlyAskQuest";
import Hero from "../components/Hero";
import IntegritySec from "../components/IntegritySec";
import Testimonials from "../components/Testimonials";
import { AuthContext } from "../contexts/AuthContext";



const Home = () => {
    const {setLoading} = use(AuthContext);

    const [featuredPosts, setFeaturedPosts] = useState([]);

    const filteredData = featuredPosts.filter(post => post.availability.toLowerCase() == 'available');
    const filteredPosts = filteredData && filteredData.slice(0, 6);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => setFeaturedPosts(data))
            setLoading(false);
    }, [])

    return (
        <div>
            <Hero></Hero>
            <IntegritySec></IntegritySec>
            <div className="space-y-14 my-10">
                <FeaturedPosts filteredPosts={filteredPosts}></FeaturedPosts>
                <Testimonials></Testimonials>
                <FrequentlyAskQuest></FrequentlyAskQuest>
            </div>
        </div>
    )
}

export default Home;