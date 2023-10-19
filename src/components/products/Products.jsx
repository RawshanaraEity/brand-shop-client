import { useLoaderData, useParams } from "react-router-dom";


const Products = () => {

  const brandsProducts = useLoaderData()
//   console.log(brandsProducts);
  const {brandName} = useParams()
//   console.log(brandName)

  const filterBrand = brandsProducts.filter(brand => brand.brandName === brandName)
//   const filterBrand = brandsProducts.filter(brand => console.log(brand.brandName))

  console.log(filterBrand);

    return (
        <div className="my-10">
            <h2 className="w-2/3 mx-auto text-center text-5xl font-bold"><p className="text-red-500">{brandName}</p> Brands Available Products Are Here</h2>
            <div>
               {
                filterBrand.map(brandProducts => (
                    <div key={brandProducts._id}>
                        
                    </div>
                ))
               }
            </div>
            
        </div>
    );
};

export default Products;