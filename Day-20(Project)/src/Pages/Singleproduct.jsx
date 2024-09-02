import React from 'react'
import '../assets/Singleproduct.css'
import Footer from '../Componets/Footer'
import Navbar from '../Componets/Navbar'
const Singleproduct = () => {
  return (
    <>
    <Navbar/>
    <div id="GK_PARENT">
    <div id="Div_container">
        <p id="PPKT" className='ppp'></p>
        <div id="Div_1">   
            <div id="Div_2">
            <img id="Div_2_img" src="" alt="Product image"/>
            </div>
            <div id="Div_3">
             <div id="Div_4"><p id="Div4_p1"></p></div>
             <div id="Div_5">
                 <p id="Div_5_p1"></p>
                 <p id="Div_5_p2">  </p>
                 <p>&</p>
                 <p id="Div_5_p3"></p>
            </div>
             <div id="Div_6">
                 <div id="Div_7">
                     <p>MRP:</p>
                     <p id="Div7_p1" className='d7p1' ></p>
                     <p id="Div7_p2" className='d7p2'></p>
                     <p id="Div7_p3" className='d7p3'></p>
                 </div>
                 <p className='d7p3'>inclusive of all taxes</p>
                 </div>
             <div id="Div_8">
                 <button className="Div8_b1">Add to Bag</button>
                 <div id="Div_9">
                     <p className='d9' > Delivery Options</p>
                     <div id="Div_10">
                   
                         <input type="number" id="Div10_input1" placeholder="Enter Pincode" value=""/>
                         <button id="Div10_b1">Check</button>
              
                         </div>  
                 </div>    
         </div>
         <div id="Div_11">
            <p>100% Genuine Products</p>
            <p>Return Policy</p>
            <p id="Div11_p3"></p>
        </div>
         </div>   
    </div>
    <div id="Div_12">
        <p className='d12p'>Description</p>
        <p id="DESCO" className='d12pp'></p></div>
      
    </div>
</div>
<div>
    {/* <img id="yes" src="" alt=""/> */}
</div>
    <Footer/>
    </>
  )
}

export default Singleproduct