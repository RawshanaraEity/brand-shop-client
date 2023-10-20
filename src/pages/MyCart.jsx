import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const cartProducts = useLoaderData();
//   console.log(cartProducts);
const [updatedProducts, setUpdatedProducts] = useState(cartProducts)


const handleRemove = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/myCart/${id}`, {

            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const filterData = updatedProducts.filter(item => item._id !== id)
            setUpdatedProducts(filterData)

        })
    }

  return (
    <div>
      <div className="bg-red-600 text-white py-10">
        <h2 className="text-5xl text-center font-semibold">
          Products In My Cart
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-5  my-10">
          {updatedProducts.map((product) => (
            <div key={product._id}>
              <div className="card grid grid-cols-2 lg:card-side bg-red-100 shadow-xl">
                <figure>
                  <img
                    className="h-72 w-full"
                    src={product.photo}
                    alt="Album"
                  />
                </figure>
                <div className="card-body flex justify-between">
                <div>
                <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                  <div className="badge bg-red-600 text-white">{product.brandName} </div>
                </div>
                  <div className="card-actions text-center items-center justify-center">
                  <p className="font-bold text-center">Price: ${product.price} </p>
                    <button onClick={() => handleRemove(product._id)} className="btn border-2 border-red-600 font-bold">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
