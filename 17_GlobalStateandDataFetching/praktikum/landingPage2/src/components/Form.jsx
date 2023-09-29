import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../redux/productSlice";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    category: "",
    freshness: "Brand New",
    price: "",
    image: null,
    description: "",
  });

  const [editing, setEdit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    if (editing) {
      const editItem = products.find((data) => data.id === formData.id);
      if (editItem) {
        setFormData(editItem);
      }
    } else {
      setFormData({
        id: null,
        name: "",
        category: "",
        freshness: "Brand New",
        price: "",
        image: null,
        description: "",
      });
    }
  }, [editing, products, formData.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi Nama Produk (hanya huruf dan spasi, maksimal 25 karakter)
    const productNameRegex = /^[A-Za-z\s]{1,25}$/;
    if (!productNameRegex.test(formData.name)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product name is not valid. It should only contain letters and spaces, up to 25 characters.",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validasi Kategori Produk (pilih dari daftar kategori yang sah)
    const validCategories = ["One", "Two", "Three", "Four"];
    if (!validCategories.includes(formData.category)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a valid product category.",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validasi Kesegaran Produk (hanya pilih dari daftar opsi yang sah)
    const validFreshnessOptions = ["Brand New", "Second Hand", "Refurbished"];
    if (!validFreshnessOptions.includes(formData.freshness)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a valid product freshness option.",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validasi Harga Produk (hanya angka positif)
    const productPriceRegex = /^[1-9]\d*$/;
    if (!productPriceRegex.test(formData.price)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product price is not valid. Please enter a positive number.",
        confirmButtonText: "OK",
      });
      return;
    }

    const randomId = formData.id || generateRandomId();
    const dataWithId = { ...formData, id: randomId };

    if (editing) {
      dispatch(updateProduct(dataWithId));
      setEdit(false);
    } else {
      dispatch(addProduct(dataWithId));
    }

    setFormData((prevData) => ({
      ...prevData,
      image: null,
    }));
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
    <div className="bg-gray-400 flex flex-col items-center mt-">
      {/* Form untuk menambahkan dan mengedit produk */}
      <form action="" className="w-full max-w-lg " onSubmit={handleSubmit}>
        {/* Input untuk nama produk */}
        <div className="w-full mt-10">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Product name
          </label>
          <input
            type="text"
            aria-describedby="helper-text-explanation"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        {/* Input untuk kategori produk */}
        <div className="w-full mt-10">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Product Category
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option>Choose</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
            <option>Four</option>
          </select>
        </div>

        {/* Input untuk mengunggah gambar produk */}
        <div className="w-full mt-10">
          <label
            className="block mb-2 text-sm font-medium dark:text-black"
            htmlFor="image"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-black focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
            value=""
          />
        </div>

        {/* Input untuk deskripsi produk */}
        <div className="w-full mt-10">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Description
          </label>
          <textarea
            id="description"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        {/* Input untuk harga produk */}
        <div className="w-full mt-10">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Product Price
          </label>
          <input
            type="number"
            aria-describedby="helper-text-explanation"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Tombol untuk mengirim data */}
        <button
          type="submit"
          className="bg-blue-600 w-full mt-12 p-3 rounded-xl text-white"
        >
          {editing ? "Update Product" : "Create Product"}
        </button>
      </form>

      {/* Tabel untuk menampilkan daftar produk */}
      <div className="w-full mt-10">
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
};

export default Form;
