import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const HomePage = () => {
    return (
        <div className='text-2xl'>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </div>
    );
};

export default HomePage;
