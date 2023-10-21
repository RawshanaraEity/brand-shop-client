import { Link  } from "react-router-dom";

const BrandsCategory = ({brands}) => {

  
  // console.log(brands);

  return (
    <div>
      <div className="bg-red-100 py-10">
      <h2 className="text-5xl text-black font-bold text-center">Our Brand Collections</h2>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5 lg:px-0">
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
             <Link to={`/product/${brand.brandName}`}>
             <h2 className="text-2xl text-center text-black font-bold">{brand.brandName}</h2>
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
