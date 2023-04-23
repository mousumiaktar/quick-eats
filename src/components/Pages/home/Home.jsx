import About from "./OthersDesign/About";
import HowItWorks from "./OthersDesign/HowItWorks";
import MobileApp from "./OthersDesign/MobileApp";
import SearchHero from "./OthersDesign/SearchHero";
import TwoCart from "./OthersDesign/TwoCart";

const Home = () => {
    return (
        <div>
            <SearchHero />
            <HowItWorks />
            <TwoCart />
            <About />
            <MobileApp />
        </div>
    );
};

export default Home;