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
  useEffect(()=>{
    dispatch(cartReducer)
 },[])
  
return(
<>
<Navbar/>
<main class="w-full mt-20">

<div class="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">

    <div class="flex-1">
        <div
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 sm:px-6 py-4 gap-2 sm:gap-0">
            <div class="flex flex-col gap-1">
                <p class="font-medium">Delivery Address :</p>
                <span class="text-sm">E-604,416-LIG, munjka, Rajkot, Gujarat - <span
                        class="font-medium">360005</span></span>
            </div>
            <div id="place">
            <button  class="w-full sm:w-auto px-16 py-3 font-medium text-white bg-primary-orange shadow rounded-sm">PLACE
            ORDER</button>
            </div>
        </div>
        <div class="flex flex-col shadow bg-white" id="data">

        {data.length > 0
                    ?
                    data.map((el) =><div class="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">
                    <div class="flex flex-col sm:flex-row gap-5 items-stretch w-full" href="#">
                        <div class="w-full sm:w-1/6 h-28 flex-shrink-0 sm:flex-shrink">
                            <img class="h-full w-full object-contain" src={el.image1} alt={el.image1}/>
                        </div>
                        <div class="flex flex-col sm:gap-5 w-full p-1 pr-6">
                            <div class="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
                                <div class="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                                    <p class="truncate">{el.title}</p>
                                    <span class="text-sm text-gray-500">{el.brand}</span>
                                </div>
                                <div class="flex flex-col sm:gap-2">
                                    <p class="text-sm">Delivery by Mon Sep 27 | <span class="text-primary-green">Free</span> <span class="line-through">₹40</span></p>
                                    <span class="text-xs text-gray-500">7 Days Replacement Policy</span>
                                </div>
                            </div>
                            <div class="flex items-baseline gap-2 text-xl font-medium">
                                <span>₹{el.price}</span>
                                <span class="text-sm text-gray-500 line-through font-normal">₹{el.off_price}</span>
                                <span class="text-sm text-primary-green">{el.offer}%&nbsp;off</span>
                            </div>
                        </div>
                    </div>
                </div>) 
                     : 
                    <p className='text-center fw-bold'>Your cart is empty <Link to='/'>Go Shopping</Link></p>
                 }


        </div>

    </div>

    <div class="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">

        <div class="flex flex-col bg-white rounded-sm shadow">
            <h1 class="px-6 py-3 border-b font-medium text-gray-500">PRICE DETAILS</h1>

            <div class="flex flex-col gap-4 p-6 pb-3">
                <p class="flex justify-between">Price <span id="maintotal"></span></p>
                <p class="flex justify-between">Discount (10% off)<span class="text-primary-green"
                        id="dissco"></span></p>
                <p class="flex justify-between">Delivery Charges <span class="text-primary-green">FREE</span>
                </p>

                <div class="border border-dashed"></div>
                <p class="flex justify-between text-lg font-medium">Total Amount <span id="total"></span></p>
                <div class="border border-dashed"></div>

                <p class="font-medium text-primary-green" id="line"></p>

            </div>

        </div>

    </div>
</div>

</main>

<Footer/>
      
    </>
  )
}

export default Cartbutton