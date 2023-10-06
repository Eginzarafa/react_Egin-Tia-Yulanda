import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    category: "",
    freshness: "Brand New",
    price: "",
    description: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editing, setEdit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const updateData = tableData.map((item) =>
        item.id === randomId ? dataWithId : item
      );
      setTableData(updateData);
      setEdit(false);
    } else {
      try {
        const response = await axios.post(
          "https://651edfe744a3a8aa4769234a.mockapi.io/api/v1/CreateProduct", // Ganti dengan URL API yang sesuai
          dataWithId
        );
        setTableData([...tableData, response.data]);
      } catch (error) {
        console.error("Error adding product:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred while adding the product. Please try again later.",
          confirmButtonText: "OK",
        });
      }
    }

    setFormData({
      id: null,
      name: "",
      category: "",
      freshness: "Brand New",
      price: "",
      description: "",
    });
  };

  const handleEdit = (id) => {
    const editItem = tableData.find((data) => data.id === id);
    if (editItem) {
      setFormData(editItem);
      setEdit(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://651edfe744a3a8aa4769234a.mockapi.io/api/v1/CreateProduct/${id}` // Ganti dengan URL API yang sesuai
      );
      const updatedData = tableData.filter((data) => data.id !== id);
      setTableData(updatedData);
    } catch (error) {
      console.error("Error deleting product:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while deleting the product. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://651edfe744a3a8aa4769234a.mockapi.io/api/v1/CreateProduct" // Ganti dengan URL API yang sesuai
        );
        setTableData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred while fetching data. Please try again later.",
          confirmButtonText: "OK",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-400 flex flex-col items-center mt-">
      <form action="" className="w-full max-w-lg " onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="bg-blue-600 w-full mt-12 p-3 rounded-xl text-white"
        >
          {editing ? "Update Product" : "Create Product"}
        </button>
      </form>
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
            {tableData.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.category}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
