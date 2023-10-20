import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {

    const products = useLoaderData()
    // console.log(products);
    const {id} = useParams()
    // console.log(id);

    const singleProduct = products.find(
        (product) => product._id !== id
      );

    //   console.log(singleProduct);

      const handleAddToCart = () =>{
        console.log('add');
      }


    return (
        <div>
            {
                <div className="card w-2/4 mx-auto  bg-base-100 shadow-xl">
                <figure>
                  <img
                  className="h-72 w-full"
                    src={singleProduct.photo}
                    alt="photo"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {singleProduct.name}
                    <div className="badge bg-red-600 text-white">{singleProduct.brandName}</div>
                  </h2>
                  <p className="text-lg font-semibold">Type: {singleProduct.type} </p>
                  <p className="text-lg">{singleProduct.description}</p>
                  <div className="flex w-56">
                      <p className="font-bold">Price: ${singleProduct.price} </p>
                      <p className="font-bold">Rating: {singleProduct.rating} </p>
                  </div>
                  <div className="card-actions justify-end">
                    <Link>
                    <div onClick={handleAddToCart} className="btn bg-red-600 text-white font-bold">Add too cart</div>
                    </Link>
                  </div>
                </div>
              </div>
            }
        </div>
    );
};

export default ProductDetails;