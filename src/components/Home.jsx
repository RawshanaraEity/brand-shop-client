import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandsCategory from "./Brands/BrandsCategory";
import Footer from "./Footer";



const Home = () => {
    const brands = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <BrandsCategory brands={brands}></BrandsCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;