import { Link,  } from "react-router-dom";

const BrandsCategory = ({ brands }) => {
 
  

  // console.log(brands);

  return (
    <div>
      <h2 className="text-5xl font-semibold text-center mt-24 mb-14">Our Most Popular Brands</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5">
     {brands.map((brand) => (
        <div key={brand.id} className="rounded-xl">
          <div className="card card-compact shadow-xl">
            <figure>
              <img
              className="h-64 w-full"
                src={brand.brandImg}
                alt="brand"
              />
            </figure>
            <div className="card-body bg-red-100">
             <Link to={`/products/${brand.brandName}`}>
             <h2 className="btn btn-ghost card-title font-bold">{brand.brandName}</h2>
             </Link>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default BrandsCategory;
