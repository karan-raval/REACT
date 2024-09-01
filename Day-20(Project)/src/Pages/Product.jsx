import React from 'react'
import Navbar from '../Componets/Navbar'
import '../App.css'
import Footer from '../Componets/Footer'
import '../product.css'
const Product = () => {
  return (
    <>
    <div id="parent">
        <Navbar/>
    <div id="HairTools">
        <h3>Hair Tools & Hair Styling Accessories</h3>
    </div>
    <div id="G-slide">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src="https://images-static.nykaa.com/uploads/ed95a16f-0ccf-4c30-81bf-b2b90b656490.jpg?tr=w-1200,cm-pad_resize" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://images-static.nykaa.com/uploads/0d33d4a4-2e56-404d-95c9-7a8d461f2e76.jpg?tr=w-1200,cm-pad_resize" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://images-static.nykaa.com/uploads/a10a31c4-77c2-4907-a3be-d02ca483efd2.jpg?tr=w-1200,cm-pad_resize" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"  data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    <div id="G-lable"><h3>ALL PRODUCTS</h3></div>
    <div id="mainProd">
        <div id="area">
            <div className="FILTERANDSORT">
                <div id="sort">
                    <select name="" id="sortTag">
                        <option value="">Sort By</option>
                        <option value="Name">Name</option>
                        <option value="rating">Rating</option>
                        <option value="Discount">Discount</option>
                        <option value="priceAsc">Price low to High</option>
                        <option value="Priceddes">Price High to low</option>

                    </select>
                    <select name="" id="catF">
                        <option value="">Category</option>
                        <option value="Hair_Styling_Tools">Hair_Styling_Tools</option>
                        <option value="Shaving_Tools">Shaving_Tools</option>
                        <option value="Face/Skin_Tools">Face/Skin_Tools</option>
                        <option value="Hair_Removal_Tools">Hair_Removal_Tools</option>
                        <option value="Massage_Tools">Massage_Tools</option>
                    </select>
                    
                </div>
            </div>
            <div id="PRODUCT">
            <div className="card">
        <h6 id="G-five">BEST SELLER</h6>
        <div id="G-img"> <img src="https://images-static.nykaa.com/uploads/a10a31c4-77c2-4907-a3be-d02ca483efd2.jpg?tr=w-1200,cm-pad_resize" className="d-block w-100" alt=""/>
        <h6 id="G-des">$name</h6>
        
        </div>
        <div id="Price-Div"><h6 id="price">MRP: <span id="ear">₹9999</span><span id="G-real"> ₹99999</span><span id="G-OFF"> 99% Off</span> </h6></div>
        <h4 id="rating">4.3</h4>
        <div id="addToBag">
                    <div id="hert"><span id="heart">&#x2661;</span></div>
                    <div id="add">
                    <div id="add1">
                        
                            <h5>Add to Bag</h5>
                        
                    </div>
                </div>
                </div>
    </div>

            </div>
        </div>
    </div>
</div>
<Footer/>
    </>
  )
}

export default Product