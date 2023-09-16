export default function Main() {
  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32">
      <div className="container mx-auto text-center mt-5 pt-5">
        <h1 className=" text-4xl font-bold">Create Product</h1>
        <p className="mx-auto text-center col-sm-6 col-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod
          unde voluptatum quasi pariatur, doloribus voluptatem eos nobis
          <br /> <br /> <br />
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Detail Product</h2>

      <form action="#" method="post" className="space-y-4">
        <div className="form-group">
          <label htmlFor="productname">Product Name :</label>
          <input
            type="text"
            name="productname"
            id="productname"
            minLength="6"
            maxLength="50"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="productcategory">Product Category :</label>
          <select
            name="productcategory"
            id="productcategory"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Select">Select</option>
            <option value="A">One</option>
            <option value="B">Two</option>
            <option value="C">Three</option>
          </select>
        </div>

        <fieldset className="field-set form-group">
          <legend className="font-semibold">Product Freshness :</legend>
          <input
            type="radio"
            name="options"
            id="option1"
            value="Brand New"
            required
            className="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="option1">Brand New</label>
          <br />
          <input
            type="radio"
            name="options"
            id="option2"
            value="Second Hank"
            required
            className="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="option2">Second Hank</label>
          <br />
          <input
            type="radio"
            name="options"
            id="option3"
            value="Refurbished"
            required
            className="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="option3">Refurbished</label>
        </fieldset>

        <div className="form-group">
          <label htmlFor="image">Image of Product</label>
          <input
            type="file"
            name="image"
            id="image"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionaldesc">Additional Description :</label>
          <textarea
            name="additionaldesc"
            id="additionaldesc"
            cols="50"
            rows="10"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Product Price :</label>
          <input
            type="number"
            name="price"
            id="price"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
