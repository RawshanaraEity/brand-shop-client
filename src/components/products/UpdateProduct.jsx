import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

    const product = useLoaderData()
    const {_id,name, photo, brandName, type, price, rating} = product;

    console.log(product)
    const handleUpdateProduct = e =>{
        e.preventDefault()
        const form = e.target;
        
        const name = form.name.value;
        const brandName = form.brandName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        // console.log(photo, brandName, type, price, description, rating)

        const myData = {
            photo,name,brandName,type,price,rating
        }
        console.log(myData)

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
              headers: {
                  'content-type': 'application/json'
              },
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }


    return (
        <div className=" ">
        <div className="bg-red-600 py-10">
        <h2 className="text-center text-5xl text-white font-semibold">Update Products</h2>
        </div>
        <div className="bg-red-100">
        <form onSubmit={handleUpdateProduct} className="space-y-5  md:w-3/4 lg:w-2/3 mx-auto py-10">
          <div className="flex gap-5">
            <input
              className="input w-full"
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Image"
            />
            <input
              className="input w-full"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Name"
            />
          </div>
          <br />
          <div className="flex gap-5">
            <input
              className="input w-full"
              type="text"
              name="type"
              defaultValue={type}
              placeholder="Category Type"
            />
            <input
              className="input w-full"
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
            />
          </div>
          <br />
          <div className="flex gap-5">
            <input
              className="input w-full"
              type="text"
              name="brandName"
              defaultValue={brandName}
              placeholder="Brand Name"
            />
            <input
              className="input w-full"
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
            />
          </div>
          <br />
          <div className="text-center">
          <input className="btn bg-red-500 text-white" type="submit" value="Submit" />
          </div>
        </form>
        </div>
      </div>
    );
};

export default UpdateProduct;