import React, { useState } from 'react'
import '../assets/adminpanel.css'
const ADminpanel = () => {

  const [state, setState] = useState({
    card_title: "",
    title: "",
    rating: "",
    ratingNum: "",
    reviews:"" ,
    price: "",
    off_price: "",
    offer: "",
    image1: "",
    image2: "",
    image3: "",
    brand: "",
    category: "",
    sub_category: "",
    description: "",
    quan: 1,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://mock-server-app2-dll0.onrender.com/product',{
      method  : "POST",
      headers : {
         "Content-Type" : "application/json"
      },
      body : JSON.stringify(state)
   }).then((res)=>res.json())
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
  }


  let {card_title,title,rating,ratingNum,reviews,price,off_price,offer,image1,image2,image3,brand,category,sub_category,description} = state;
  
  return (
    <>
        <div className="body">
        <div className="wrapper">
          <div className="title">Admin Panel</div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={card_title}
                  name="card_title"
                  placeholder="card Product Title"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={title}
                  name="title"
                  placeholder="Enter Product Title"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="number"
                  onChange={handleChange}
                  value={rating}
                  name="rating"
                  placeholder="Enter Product Rating"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="number"
                  onChange={handleChange}
                  value={ratingNum}
                  name="ratingNum"
                  placeholder="Product People Rating In Number"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="number"
                  onChange={handleChange}
                  value={reviews}
                  name="reviews"
                  placeholder="Product Reviews In Number"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="number"
                  onChange={handleChange}
                  value={price}
                  name="price"
                  placeholder="Enter Product Orignal Price"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="number"
                  onChange={handleChange}
                  value={off_price}
                  name="off_price"
                  placeholder="Enter Product Offer Price"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="number"
                  onChange={handleChange}
                  value={offer}
                  name="offer"
                  placeholder="Enter Product Offer in %"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={image1}
                  name="image1"
                  placeholder="Enter Product Image URL"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={image2}
                  name="image2"
                  placeholder="Enter Product Image URL"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={image3}
                  name="image3"
                  placeholder="Enter Product Image URL"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={brand}
                  name="brand"
                  placeholder="Enter Product Brand"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={category}
                  name="category"
                  placeholder="Enter Product Category"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={sub_category}
                  name="sub_category"
                  placeholder="Enter Product Sub Category"
                  className="input"
                /></div>
                <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={description}
                  name="description"
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

export default ADminpanel