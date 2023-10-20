
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandsCategory from "./Brands/BrandsCategory";




const Home = () => {
    
    const brands = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <BrandsCategory brands={brands}></BrandsCategory>
        </div>
    );
};

export default Home;