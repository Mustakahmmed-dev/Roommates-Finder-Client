import FeaturedPosts from "../components/FeaturedPosts";
import FrequentlyAskQuest from "../components/FrequentlyAskQuest";
import Hero from "../components/Hero";
import IntegritySec from "../components/IntegritySec";
import Testimonials from "../components/Testimonials";



const Home = () => {
    return(
        <div>
            <Hero></Hero>
            <IntegritySec></IntegritySec>
            <FeaturedPosts></FeaturedPosts>
            <Testimonials></Testimonials>
            <FrequentlyAskQuest></FrequentlyAskQuest>
        </div>
    )
}

export default Home;