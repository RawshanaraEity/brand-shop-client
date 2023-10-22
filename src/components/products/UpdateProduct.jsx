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

        fetch(`https://brand-shop-server-p7v34gajg-rawshanaras-projects.vercel.app/products/${_id}`, {
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
        <div className="">
        <form onSubmit={handleUpdateProduct} className="md:space-y-5 px-5 md:px-0 md:w-3/4 lg:w-2/3 mx-auto py-10">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              className="input w-full input-bordered"
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Image"
            />
            <input
              className="input w-full input-bordered"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Name"
            />
          </div>
          <br />
          <div className="flex flex-col md:flex-row gap-5">
            <input
              className="input w-full input-bordered"
              type="text"
              name="type"
              defaultValue={type}
              placeholder="Category Type"
            />
            <input
              className="input w-full input-bordered"
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
            />
          </div>
          <br />
          <div className="flex flex-col md:flex-row gap-5">
            <input
              className="input w-full input-bordered"
              type="text"
              name="brandName"
              defaultValue={brandName}
              placeholder="Brand Name"
            />
            <input
              className="input w-full input-bordered"
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
            />
          </div>
          <br />
          <div className="text-center">
          <input className="btn bg-red-600 text-white" type="submit" value="Submit" />
          </div>
        </form>
        </div>
      </div>
    );
};

export default UpdateProduct;