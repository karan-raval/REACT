import { React, useState } from "react";
import { addData } from "../Redux/Product/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();
  console.log(state);
  const [fromdata, setState] = useState({
    product: "",
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

  let { product, brand, price, strikedOffPrice, category, imageURL } = fromdata;
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
                  name="contactForm"
                  id="contactForm"
                  method="post"
                  action=""
                >
                  <fieldset>
                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="cName"
                        type="text"
                        id="cName"
                        class="full-width"
                        placeholder="Your Name"
                      />
                    </div>

                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="cEmail"
                        type="text"
                        id="cEmail"
                        class="full-width"
                        placeholder="Your Email"
                      />
                    </div>

                    <div class="form-field">
                      <input
                      onChange={handleChange}
                        name="cWebsite"
                        type="text"
                        id="cWebsite"
                        class="full-width"
                        placeholder="Website"
                      />
                    </div>

                    <div class="message form-field">
                      <textarea
                      onChange={handleChange}
                        name="cMessage"
                        id="cMessage"
                        class="full-width"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

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
