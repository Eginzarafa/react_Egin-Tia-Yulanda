import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  deleteProduct,
  setEditIndexs,
} from "../redux/productSlice";

function CreateProduct() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  const [isIndonesian, setIsIndonesian] = useState(false);
  const toggleLanguage = () => {
    setIsIndonesian(!isIndonesian);
  };

  const [formData, setFormData] = useState({
    Productname: "",
    Productcategory: "Choose...",
    formFile: "Tailwind.svg",
    Additional: "",
    ProductFreshness: "",
    ProductPrice: "",
  });

  const handleTest = () => {
    console.log(formData.Productname);
    console.log(formData.Productcategory);
    console.log(formData.ProductFreshness);
    console.log(formData.formFile);
    console.log(formData.Additional);
    console.log(formData.ProductPrice);
  };

  const [editMode, setEditMode] = useState(false);

  const list = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [formErrors, setFormErrors] = useState({
    Productname: false,
    Productcategory: false,
    formFile: false,
    Additional: false,
    ProductFreshness: false,
    ProductPrice: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      formFile: file,
    });
  };

  const generateRandomPrice = () => {
    const randomPrice = (Math.random() * (100 - 10) + 10).toFixed(2);
    setFormData({ ...formData, ProductPrice: randomPrice });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      const updatedProduct = {
        id: formData.id,
        Productname: formData.Productname,
        Productcategory: formData.Productcategory,
        formFile: formData.formFile,
        Additional: formData.Additional,
        ProductFreshness: formData.ProductFreshness,
        ProductPrice: formData.ProductPrice,
        imageSrc: formData.imageSrc,
      };

      dispatch(setEditIndexs(updatedProduct));

      setEditMode(false);

      setFormData({
        Productname: "",
        Productcategory: "Choose...",
        formFile: null,
        Additional: "",
        ProductFreshness: "",
        ProductPrice: 0,
      });
    } else {
      const {
        Productname,
        ProductPrice,
        Productcategory,
        formFile,
        Additional,
        ProductFreshness,
      } = formData;

      const nameRegex = /^[A-Za-z]+$/;
      const categoryRegex = /^(one|two|three)$/;
      const freshnessRegex = /^(Brand New|Second Hand|Refurbished)$/;
      const priceRegex = /^\d+(\.\d{1,2})?$/;

      const newFormErrors = {
        Productname: !nameRegex.test(Productname),
        Productcategory: !categoryRegex.test(Productcategory),
        formFile: !formFile,
        Additional: Additional === "",
        ProductFreshness: !freshnessRegex.test(ProductFreshness),
        ProductPrice: !priceRegex.test(ProductPrice),
      };

      setFormErrors(newFormErrors);
      if (
        !newFormErrors.Productname &&
        !newFormErrors.Productcategory &&
        !newFormErrors.formFile &&
        !newFormErrors.Additional &&
        !newFormErrors.ProductFreshness &&
        !newFormErrors.ProductPrice
      ) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageSrc = event.target.result;
          const newProduct = {
            id: Date.now(), // Generate a unique ID
            Productname,
            Productcategory,
            formFile: formFile.name,
            Additional,
            ProductFreshness,
            ProductPrice,
            imageSrc,
          };

          dispatch(addProducts([...list, newProduct]));

          setFormData({
            Productname: "",
            Productcategory: "Choose...",
            formFile: null,
            Additional: "",
            ProductFreshness: "",
            ProductPrice: "",
          });
        };

        reader.readAsDataURL(formFile);
      }
    }
  };

  const editProduct = (id) => {
    const edit = list.filter((item) => item.id === id);
    setFormData(...edit);
    setEditMode(true);
  };

  const handleEdit = (id) => {
    const editItem = products.find((data) => data.id === id);
    if (editItem) {
      setFormData(editItem);
      setEdit(true);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mx-auto p-5">
      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          {isIndonesian ? "Buat Produk" : "Create Product"}
        </h3>
        <form>
          <div className="mt-4">
            <label htmlFor="Productname">
              {isIndonesian ? "Nama Produk" : "Product Name"}:
            </label>
            <input
              title="productName"
              type="text"
              id="Productname"
              name="Productname"
              minLength="6"
              maxLength="50"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.Productname ? "border-red-500" : ""
              }`}
              value={formData.Productname}
              onChange={handleInputChange}
            />
            {formErrors.Productname && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap isi nama produk dan mengandung huruf besar dan huruf kecil"
                  : "Please fill in the product name and contain uppercase and lowercase letters"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="Productcategory">
              {isIndonesian ? "Kategori Produk" : "Product Category"}:
            </label>
            <br />
            <select
              title="productCategory"
              id="Productcategory"
              name="Productcategory"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.Productcategory ? "border-red-500" : ""
              }`}
              value={formData.Productcategory}
              onChange={handleInputChange}
            >
              <option value="Choose...">
                {isIndonesian ? "Pilih..." : "Choose..."}
              </option>
              <option value="one">one</option>
              <option title="optionB" value="two">
                two
              </option>
              <option value="three">three</option>
            </select>{" "}
            <br />
            {formErrors.Productcategory && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap pilih kategori produk"
                  : "Please select product category"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="formFile">
              {isIndonesian ? "Gambar Produk" : "Image Of Product"}:
            </label>
            <input
              title="imageOfProduct"
              type="file"
              id="formFile"
              name="formFile"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.formFile ? "border-red-500" : ""
              }`}
              accept="image/*"
              onChange={handleFileChange}
            />
            {formErrors.formFile && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap pilih gambar produk"
                  : "Please select product image"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="ProductFreshness" className="font-semibold">
              {isIndonesian ? "Kegiatan Produk" : "Product Freshness"}:
            </label>
          </div>
          <div className="mt-2">
            <input
              title="radio0"
              type="radio"
              name="ProductFreshness"
              value="Brand New"
              className="mr-2"
              onChange={handleInputChange}
            />
            <label htmlFor="BrandNew">
              {isIndonesian ? "Baru" : "Brand New"}
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              name="ProductFreshness"
              value="Second Hand"
              className="mr-2"
              onChange={handleInputChange}
            />
            <label htmlFor="SecondHand">
              {isIndonesian ? "Bekas" : "Second Hand"}
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              name="ProductFreshness"
              value="Refurbished"
              className="mr-2"
              onChange={handleInputChange}
            />
            <label htmlFor="Refurbished">
              {isIndonesian ? "Renovasi" : "Refurbished"}
            </label>
          </div>
          {formErrors.ProductFreshness && (
            <p className="mt-2 text-red-500">
              {isIndonesian
                ? "Harap pilih kegiatan produk"
                : "Please select product freshness"}
            </p>
          )}
          <div className="mt-4">
            <label htmlFor="Additional">
              {isIndonesian ? "Deskripsi Tambahan" : "Additional Description"}:
            </label>
            <textarea
              title="additionalDesc"
              id="Additional"
              name="Additional"
              rows="3"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.Additional ? "border-red-500" : ""
              }`}
              value={formData.Additional}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.Additional && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap isi deskripsi tambahan"
                  : "Please enter additional description"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="ProductPrice">
              {isIndonesian ? "Harga Produk" : "Product Price"}:
            </label>
            <br />
            <input
              type="number"
              name="ProductPrice"
              id="ProductPrice"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.ProductPrice ? "border-red-500" : ""
              }`}
              value={formData.ProductPrice}
              onChange={handleInputChange}
            />
            {formErrors.ProductPrice && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap isi harga produk"
                  : "Please enter product price"}
              </p>
            )}
            <br />
          </div>
          <div
            className={`space-x-3 ${
              formErrors.ProductPrice === false ? "mt-5" : "-mt-1"
            }`}
          >
            <button
              title="randomNumber"
              type="button"
              className="rounded-full bg-green-500 px-4 py-2 text-center font-bold text-white hover:bg-green-700"
              onClick={generateRandomPrice}
            >
              {isIndonesian ? "Hasilkan Harga Acak" : "Generate Random Price"}
            </button>
            <button
              title="submit"
              type="submit"
              onClick={handleTest}
              className="bg-blue-600 w-full mt-12 p-3 rounded-xl text-white"
            >
              {isIndonesian ? "Kirim" : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          {isIndonesian ? "Daftar Produk" : "List of Products"}
        </h3>
        <table className="min-w-full text-center text-sm font-light">
          <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className="px-6 py-4">
                No
              </th>
              <th scope="col" className="px-6 py-4">
                Product Name
              </th>
              <th scope="col" className="px-6 py-4">
                Product Category
              </th>
              <th scope="col" className="px-6 py-4">
                Image
              </th>
              <th scope="col" className="px-6 py-4">
                Product Freshness
              </th>
              <th scope="col" className="px-6 py-4">
                Product Price
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.category}</td>
                  <td>
                    {data.image && typeof data.image === "object" && (
                      <img
                        src={URL.createObjectURL(data.image)}
                        alt={`Product Image for ${data.name}`}
                        width="100"
                      />
                    )}
                  </td>
                  <td>{data.freshness}</td>
                  <td>{data.price}</td>
                  <td>
                    <button
                      className="bg-red-600 w-30 mr-5 p-3 rounded-xl text-white"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-600 w-30 mt-5 p-3 rounded-xl text-white"
                      onClick={() => handleEdit(data.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-blue-600 w-30 mr-5 p-3 m-5 rounded-xl text-white"
                      onClick={() => {
                        navigate(`/product/${data.id}`, {
                          state: { selectedProduct: data },
                        });
                      }}
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreateProduct;
