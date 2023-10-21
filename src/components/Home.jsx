
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandsCategory from "./Brands/BrandsCategory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";




const Home = () => {
    
    const brands = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <BrandsCategory brands={brands}></BrandsCategory>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;