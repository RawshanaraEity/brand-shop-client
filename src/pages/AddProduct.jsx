const AddProduct = () => {
  return (
    <div className="py-5 bg-red-100">
      <h2 className="text-center text-5xl font-semibold">Add More Products</h2>
      <form className="space-y-5 md:w-3/4 lg:w-2/3 mx-auto py-10">
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
            name="name"
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
  );
};

export default AddProduct;
