import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Adminpanel = () => {
  const [state, setState] = useState({
    product: "",
    brand: "",
    price: "",
    strikedOffPrice: "",
    category: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://mock-server-app-4tp9.onrender.com/product',{
      method  : "POST",
      headers : {
         "Content-Type" : "application/json"
      },
      body : JSON.stringify(state)
   }).then((res)=>res.json())
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
  }


  let { product, brand, price, strikedOffPrice, category, imageURL } = state;
  
  return (
    <>
      <div className="body">
        <div className="wrapper ">
          <div className="title">Admin Panel</div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={product}
                  name="product"
                  placeholder="Enter Product Title"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={brand}
                  name="brand"
                  placeholder="Enter Product Brand Name"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={imageURL}
                  name="imageURL"
                  placeholder="Enter Product Image URL"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={price}
                  name="price"
                  placeholder="Enter Product Discount Price"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={strikedOffPrice}
                  name="strikedOffPrice"
                  placeholder="Enter Product Orignal Price"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={category}
                  name="category"
                  placeholder="Enter Product Description"
                  className="input"
                />
              </div>
              <div className="input_field">
              <input type="submit" value= "Submit"  className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>

      </>
  )
}

export default Adminpanel