import { Link, useLoaderData, useParams } from "react-router-dom";
import Slider from "../Slider";

const Products = () => {
  const brandsProducts = useLoaderData();
    console.log(brandsProducts);
  const { brandName } = useParams();
    console.log(brandName)

  const filterBrand = brandsProducts.filter(
    (brand) => brand.brandName === brandName
  );

  console.log(filterBrand);

  return (
    
    <div>
            <Slider></Slider>
        <div className="py-10">
     <div className="bg-red-600 py-5">
     <h2 className="w-2/3 mx-auto py-5 text-center text-5xl text-black font-bold">
        <p className="text-white">{brandName}</p> Brands Available Products
        Are Here
      </h2>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0 my-10">
        {
            filterBrand.length > 0? (
                filterBrand.map((brandProducts) => (
                    <div key={brandProducts._id}>
                      <div className="card  bg-base-100 shadow-xl">
                        <figure>
                          <img
                          className="h-72 w-full"
                            src={brandProducts.photo}
                            alt="photo"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title text-2xl font-bold">
                            {brandProducts.name}
                            <div className="badge bg-red-600 text-white">{brandProducts.brandName}</div>
                          </h2>
                          <p className="text-lg font-semibold">Type: {brandProducts.type} </p>
                          <div className="flex w-56">
                              <p className="font-bold">Price: ${brandProducts.price} </p>
                              <p className="font-bold">Rating: {brandProducts.rating} </p>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/products/${brandProducts._id}`}>
                            <div className="btn bg-red-600 text-white font-bold">Details</div>
                            </Link>
                            <Link to={`/update/${brandProducts._id}`}>
                            <div className="btn border-2 border-red-600 font-bold">Update</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  
            ) : (
                <div>
                    <h2 className=" w-full mx-auto text-3xl font-semibold text-center">Sorry!!Products Are Not Available Right Now</h2>
                </div>
            )
                }
        </div>
    </div>
    </div>
  );
};

export default Products;
