import { useState } from "react";
import article from "./article";

function FormTable() {
  const [inputName, setInputName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  //   const [imageOfProduct, setImageOfProduct] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [freshnessError, setFreshnessError] = useState("");
  //   const [imageError, setImageError] = useState("");
  const [descError, setDescError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [products, setProducts] = useState([]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setInputName(value);

    if (value.trim() === "") {
      setNameError("Please enter a valid Product name");
    } else if (value.length > 10) {
      setNameError("Name must not exceed 10 characters");
    } else if (/[!@#{}]/.test(value)) {
      setNameError("Name must not contain symbols");
    } else {
      setNameError("");
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setProductCategory(value);
    if (value === "Choose") {
      setCategoryError("Category must be selected");
    } else {
      setCategoryError("");
    }
  };

  const handleFreshnessChange = (e) => {
    const value = e.target.value;
    setProductFreshness(value);
    setFreshnessError("");
  };

  //   const handleImageChange = (e) => {
  //     // Anda tidak perlu menyimpan value dari input file dalam state
  //     // karena file input tidak dapat dikontrol oleh state
  //     setImageError(""); // Reset error ketika ada perubahan gambar
  //   };

  const handleDescChange = (e) => {
    const value = e.target.value;
    setAdditionalDescription(value);

    if (value.trim() === "") {
      setDescError("Please enter a description");
    } else {
      setDescError("");
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setInputPrice(value);

    if (value.trim() === "") {
      setPriceError("Please enter a valid Price");
    } else {
      setPriceError("");
    }
  };

  const isFormValid = () => {
    return (
      inputName.trim() !== "" &&
      productCategory.trim() !== "" &&
      productFreshness !== "" &&
      additionalDescription.trim() !== "" &&
      inputPrice.trim() !== "" &&
      !nameError &&
      !categoryError &&
      !freshnessError &&
      //   !imageError &&
      !descError &&
      !priceError
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const newProduct = {
      name: inputName,
      category: productCategory,
      freshness: productFreshness,
      // Anda tidak perlu menyimpan value file input dalam state
      description: additionalDescription,
      price: inputPrice,
    };
    setProducts([...products, newProduct]);

    setInputName("");
    setProductCategory("");
    setProductFreshness("");
    // Mengosongkan input tidak perlu untuk file input
    setAdditionalDescription("");
    setInputPrice("");

    window.alert(
      `Data yang telah terisi:\nProduct Name: ${newProduct.name}\nProduct Category: ${newProduct.category}\nProduct Freshness: ${newProduct.freshness}\nAdditional Description: ${newProduct.description}\nProduct Price: ${newProduct.price}`
    );
  };

  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <div>
      <section className="container square-box d-flex " />
      <section className="container-main text-center ">
        <div className="main-content text-center">
          <img src="logobs.png" alt="logo" />
          <h1>{article.title[language]}</h1>
          <p>{article.description[language]}</p>
          <button
            type="button"
            className="custom-button"
            onClick={toggleLanguage}
          >
            En/Id
          </button>
        </div>
      </section>
      <section className="row justify-content-center my-5 ">
        <h2 className="text-detail col-lg-6">Detail Product</h2>
      </section>
      <form id="inputdata" onSubmit={handleSubmit}>
        <section className="row justify-content-center my-5">
          <section className="container-form col-lg-6">
            <label htmlFor="exampleDataList" className="form-label">
              Product Name
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="DataName"
              type="text"
              value={inputName}
              onChange={handleNameChange}
            />
            <span className="text-danger">{nameError}</span>
          </section>
        </section>
        <section className="row justify-content-center my-5">
          <section className="container-choose col-lg-6">
            <label htmlFor="exampleDataList" className="label-choose">
              Product Category
            </label>
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              id="kategoti"
              value={productCategory}
              onChange={handleCategoryChange}
            >
              <option value="Choose">Choose</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </select>
            <span className="text-danger">{categoryError}</span>
          </section>
        </section>
        <section className="row justify-content-center my-5">
          <section className="container-img col-lg-6">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label ">
                Image of Product
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                // onChange={handleImageChange}
              />
              {/* <span className="text-danger">{imageError}</span> */}
            </div>
          </section>
        </section>
        <section className="row justify-content-center my-5">
          <section className="container-checkbox col-lg-6">
            <label htmlFor="formFile" className="form-label">
              Product Freshness
            </label>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  value="Brand New"
                  id="firstCheckbox"
                  checked={productFreshness === "Brand New"}
                  onChange={handleFreshnessChange}
                />
                <label className="form-check-label" htmlFor="firstCheckbox">
                  Brand New
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  value="Second Hand"
                  id="secondCheckbox"
                  checked={productFreshness === "Second Hand"}
                  onChange={handleFreshnessChange}
                />
                <label className="form-check-label" htmlFor="secondCheckbox">
                  Second Hand
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  value="Refurbished"
                  id="thirdCheckbox"
                  checked={productFreshness === "Refurbished"}
                  onChange={handleFreshnessChange}
                />
                <label className="form-check-label" htmlFor="thirdCheckbox">
                  Refurbished
                </label>
              </li>
            </ul>
            <span className="text-danger">{freshnessError}</span>
          </section>
        </section>
        <section className="row justify-content-center my-5">
          <section className="container-messages col-lg-6">
            <div className="form">
              <label className="form-floating">Additional Description</label>
              <textarea
                className="form-control"
                id="floatingTextarea2"
                style={{ height: 100 }}
                value={additionalDescription}
                onChange={handleDescChange}
              />
              <span className="text-danger">{descError}</span>
            </div>
          </section>
        </section>
        <section className="row justify-content-center my-5">
          <section className="container-price col-lg-6">
            <label htmlFor="price" className="form-label">
              Product price
            </label>
            <input
              className="form-control"
              id="price"
              type="number"
              value={inputPrice}
              onChange={handlePriceChange}
            />
            <span className="text-danger">{priceError}</span>
          </section>
        </section>
        <section className="row justify-content-center my-5">
          <section className="container-submit col-lg-6">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </section>
        </section>
      </form>
      <br />
      <br />
      <br />
      <section>
        <h3 className="container">List Product</h3>
        <table className="table container tabel" id="outputTable">
          {/* Tambahkan konten tabel di sini */}
        </table>
      </section>
      <section>
        <section className="row justify-content-center my-5">
          <section className="container-submit col-lg-6">
            <form>
              <label htmlFor="gsearch">Search :</label>
              <input
                type="text"
                id="searchInput"
                className="form-control"
                placeholder="Search..."
              />
              <input type="submit" />
            </form>
          </section>
        </section>
      </section>
    </div>
  );
}

export default FormTable;
