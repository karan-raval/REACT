import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CreateBlog = () => {
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
                  name="contactForm"
                  id="contactForm"
                  method="post"
                  action=""
                >
                  <fieldset>
                    <div class="form-field">
                      <input
                        name="cName"
                        type="text"
                        id="cName"
                        class="full-width"
                        placeholder="Your Name"
                      />
                    </div>

                    <div class="form-field">
                      <input
                        name="cEmail"
                        type="text"
                        id="cEmail"
                        class="full-width"
                        placeholder="Your Email"
                      />
                    </div>

                    <div class="form-field">
                      <input
                        name="cWebsite"
                        type="text"
                        id="cWebsite"
                        class="full-width"
                        placeholder="Website"
                      />
                    </div>

                    <div class="message form-field">
                      <textarea
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
