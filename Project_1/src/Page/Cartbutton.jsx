import React, { useEffect, useState } from 'react';
import Navbar from '../Componets/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Componets/Footer';
import '../assets/cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from '../Redux/Cartpage/action';

const Cartbutton = () => {
    const dispatch = useDispatch()
  const {isLoading,isError,data} = useSelector((s)=>s.cartReducer)
  console.log(data);
  useEffect(()=>{
    dispatch(cartReducer)
 },[])
  
return(
<>
<Navbar/>
<div className="bg py-4">
    <div className="container">
        <div className="content">
            <div className="cart-items">
                <p className="fw-bold fs-5">Cart </p>
                 {data.length > 0
                    ?
                    data.map((item) => <div className="product d-flex flex-column py-2" key={item.id}>
                                    <div className="image-price d-flex justify-content-between">
                                        <div className='image d-flex'>
                                            <img src={item.image1} alt={item.title} className="img-fluid rounded" />
                                            <p className="ms-2">{item.title}</p>
                                        </div>
                                        <div className="price">
                                            <p className="fs-5 fw-bold">{item.price}</p>
                                        </div>
                                    </div>

                                    <div className="amount d-flex justify-content-evenly align-items-center mt-4">
                                        <div className="remove">
                                            <button className="btn fw-bold" onClick={() => deleteItemFromCartHandler(item)}>REMOVE</button>
                                        </div>

                                        <div className="add d-flex align-items-center">
                                            <button className='btn text-light fw-bold' disabled={item.quantity <= 1} onClick={() => updateQuantityHandler(item, item.quan - 1)}>-</button>
                                            <div className='mx-4'>{item.quan}</div>
                                            <button className='btn text-light fw-bold' onClick={() => updateQuantityHandler(item, item.quan + 1)}>+</button>
                                        </div>
                                    </div>

                                </div> 
                         ) 
                     : 
                    <p className='text-center fw-bold'>Your cart is empty <Link to='/'>Go Shopping</Link></p>
                 } 
            </div>

            <div className="cart-summary">
                    <p className='fw-bold border-bottom'>CART SUMMARY</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <p className="small fw-bold">Subtotal</p>
                        <p className="fs-4 fw-bold">
                            Ksh 
                        </p>
                    </div>


                    <Link to='/'>
                        <button className='btn w-100'>
                            Checkout 
                        </button>
                    </Link>

            </div>
        </div>

        {/* <ProductRows categoryName="Top selling items"/>
        <ProductRows categoryName="You may also like" /> */}
    </div>
</div>

<Footer/>
      
    </>
  )
}

export default Cartbutton


// import React, { useEffect, useState } from 'react';
// import Navbar from '../Componets/Navbar';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from '../Componets/Footer';
// import '../assets/cart.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { cartReducer } from '../Redux/Cartpage/action'; // Assuming the action is cartAction

// const Cartbutton = () => {
//   const dispatch = useDispatch();
  
//   const { isLoading, isError, data } = useSelector((state) => state.cartReducer);
//   console.log("Cart data:", data);
  
//   useEffect(() => {
//     // Dispatch the correct action, not the reducer
//     dispatch(cartReducer);
//   }, [dispatch]);

//   // Calculate subtotal (example)
//   const subtotal = data?.reduce((total, item) => total + item.price * item.quantity, 0);

//   const deleteItemFromCartHandler = (item) => {
//     // Handle deleting the item from the cart (you should implement this function)
//     console.log(`Deleting item: ${item.title}`);
//   };

//   const updateQuantityHandler = (item, newQuantity) => {
//     // Handle quantity update (you should implement this function)
//     console.log(`Updating quantity for: ${item.title}, New Quantity: ${newQuantity}`);
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isError) {
//     return <p>Error loading cart data.</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="bg py-4">
//         <div className="container">
//           <div className="content">
//             <div className="cart-items">
//               <p className="fw-bold fs-5">Cart</p>

//               {data && data.length > 0 ? (
//                 data.map((item) => (
//                   <div className="product d-flex flex-column py-2" key={item.id}>
//                     <div className="image-price d-flex justify-content-between">
//                       <div className="image d-flex">
//                         <img src={item.image1} alt={item.title} className="img-fluid rounded" />
//                         <p className="ms-2">{item.title}</p>
//                       </div>
//                       <div className="price">
//                         <p className="fs-5 fw-bold">KSH {item.price}</p>
//                       </div>
//                     </div>

//                     <div className="amount d-flex justify-content-between align-items-center mt-4">
//                       <div className="remove">
//                         <button className="btn fw-bold" onClick={() => deleteItemFromCartHandler(item)}>REMOVE</button>
//                       </div>

//                       <div className="add d-flex align-items-center">
//                         <button
//                           className="btn text-light fw-bold"
//                           disabled={item.quantity <= 1}
//                           onClick={() => updateQuantityHandler(item, item.quantity - 1)}
//                         >
//                           -
//                         </button>
//                         <div className="mx-4">{item.quantity}</div>
//                         <button
//                           className="btn text-light fw-bold"
//                           onClick={() => updateQuantityHandler(item, item.quantity + 1)}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center fw-bold">
//                   Your cart is empty <Link to="/">Go Shopping</Link>
//                 </p>
//               )}
//             </div>

//             <div className="cart-summary">
//               <p className="fw-bold border-bottom">CART SUMMARY</p>

//               <div className="d-flex justify-content-between align-items-center">
//                 <p className="small fw-bold">Subtotal</p>
//                 <p className="fs-4 fw-bold">
//                   Ksh {subtotal || 0} {/* Show subtotal */}
//                 </p>
//               </div>

//               <Link to="/">
//                 <button className="btn w-100">Checkout</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Cartbutton;
