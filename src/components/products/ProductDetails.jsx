import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {

    const products = useLoaderData()
    // console.log(products);
    const {id} = useParams()
    // console.log(id);

    const singleProduct = products.find(
        (product) => product._id === id
      );

    const { photo,name,brandName,type,price,rating} = singleProduct

    const myProduct = {photo, name, brandName, type, price, rating}
      // console.log(singleProduct);

      const handleAddToCart = () =>{
       

        fetch('https://brand-shop-server-p7v34gajg-rawshanaras-projects.vercel.app/myCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myProduct)
            
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
              Swal.fire({
                title: 'Success',
                text: 'Add To Cart Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
      }


    return (
        <div className="py-10">
            {
                <div className="card w-full md:w-2/4 mx-auto  bg-base-100 shadow-xl">
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
                    
                    <div onClick={handleAddToCart} className="btn bg-red-600 text-white font-bold">Add to cart</div>
                   
                  </div>
                </div>
              </div>
            }
        </div>
    );
};

export default ProductDetails;