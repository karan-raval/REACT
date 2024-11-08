import * as React from 'react';
import { useState } from "react";
import { addData } from "../Redux/Product/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

const CreateBlog = () => {
  
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value as string);
  // };


  const dispatch = useDispatch();
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();
  console.log(state);
  const [fromdata, setState] = useState({
    name: "",
    brand: "",
    price: "",
    strikedOffPrice: "",
    category: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...fromdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      product,
      brand,
      price,
      strikedOffPrice,
      category,
      imageURL,
    };

    dispatch(addData)(obj);
    navigate("/product");
  };

  // let { product, brand, price, strikedOffPrice, category, imageURL } = fromdata;
  return (
    <>
      <Header />
      <section class="s-content--narrow">
        <div class="comments-wrapp">
          <div id="comments" class="row">
            <div class="col-full">
              <div class="respond">
                <h3 class="h2">Write Your Blog </h3>

                <form
                onSubmit={handleSubmit}
                  id="contactForm"
                >
                  <fieldset>
                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="name"
                        type="text"
                        class="full-width"
                        placeholder="Your Name"
                      />
                    </div>

                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="heading"
                        type="text"
                        class="full-width"
                        placeholder="Enter Heading"
                      />
                    </div>

                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="des"
                        type="text"
                        class="full-width"
                        placeholder="Enter description"
                      />
                    </div>
                    {/* <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="cat"
                        type="text"
                        class="full-width"
                        placeholder="Enter Categories"
                      />
                    </div>
                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="imgURL"
                        type="text"
                        class="full-width"
                        placeholder="Your Image Link"
                      />
                    </div>

        <label>Enter Date
                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="date"
                        type="date"
                        class="half-width"
                        placeholder="Enter Date"
                      />
                    </div>
                    </label>

                    

                    <button
                      type="submit"
                      class="submit btn--primary btn--large full-width"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CreateBlog;
