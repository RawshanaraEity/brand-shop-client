const AddProduct = () => {

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        // console.log(photo, brandName, type, price, description, rating)

        const myData = {
            photo,brandName,type,price,description,rating
        }
        console.log(myData)

        fetch('http://localhost:5000/products', {
            method: 'POST',
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
      <h2 className="text-center text-5xl text-white font-semibold">Add More Products</h2>
      </div>
      <div className="bg-red-100">
      <form onSubmit={handleAddProduct} className="space-y-5  md:w-3/4 lg:w-2/3 mx-auto py-10">
        <div className="flex gap-5">
          <input
            className="input w-full"
            type="text"
            name="photo"
            placeholder="Image"
          />
          <input
            className="input w-full"
            type="text"
            name="brandName"
            placeholder="Brand Name"
          />
        </div>
        <br />
        <div className="flex gap-5">
          <input
            className="input w-full"
            type="text"
            name="type"
            placeholder="Category Type"
          />
          <input
            className="input w-full"
            type="text"
            name="price"
            placeholder="Price"
          />
        </div>
        <br />
        <div className="flex gap-5">
          <input
            className="input w-full"
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            className="input w-full"
            type="text"
            name="rating"
            placeholder="Rating"
          />
        </div>
        <br />
        <div className="text-center">
        <input className="btn bg-red-500 text-white" type="submit" value="Add Product" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;
