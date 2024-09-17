import React, { useEffect } from 'react';
import '../assets/Singleproduct.css';
import Footer from '../Componets/Footer';
import Navbar from '../Componets/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../Redux/Singleproduct/action';
import Rating from "@mui/material/Rating";
import axios from 'axios'

const Singleproduct = () => {
    const navigate =useNavigate()

    const {id} = useParams()
    const dispatch = useDispatch()
    const {data} = useSelector((s)=>s.SingleProduct)
    
    useEffect(()=>{
       dispatch(FetchData)(id)
    },[])
    
        const handleclick = () => {
            axios.post('https://mock-server-app2-dll0.onrender.com/cart', data[0])
                .then((res) => {
                    navigate('/cart'); 
                })
                .catch((err) => {
                    console.error("Error adding to cart:", err);
                });
        };
            

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div id="GK_PARENT">
                <div id="Div_container">
                    <p id="PPKT" className='ppp'>Home - Hair - Shop By Hair Type - {data[0].category}</p>
                    <div id="Div_1">
                        <div id="Div_2">
                            <img id="Div_2_img" src={data[0].image1} alt="Product" />
                        </div>
                        <div id="Div_3">
                            <div id="Div_4">
                                <p id="Div4_p1">{data[0].card_title}</p>
                            </div>
                            <div id="Div_5">
                            <Rating name="read-only" value={data[0].rating} readOnly size="small" />
                                <p id="Div_5_p1">{data[0].rating}/5</p>
                                <p id="Div_5_p2">{data[0].ratingNum} Rating</p>
                                <p>&</p>
                                <p id="Div_5_p3">{data[0].reviews} reviews</p>
                            </div>
                            <div id="Div_6">
                                <div id="Div_7">
                                    <p>MRP:</p>
                                    <p id="Div7_p1" className='d7p1'>₹{data[0].price}</p>
                                    <p id="Div7_p2" className='d7p2'>₹{data[0].off_price}</p>
                                    <p id="Div7_p3" className='d7p3'>{data[0].offer}% Off</p>
                                </div>
                                <p className='d7p3'>inclusive of all taxes</p>
                            </div>
                            <div id="Div_8">
                                <button className="Div8_b1" onClick={handleclick}>Add to Bag</button>
                                <div id="Div_9">
                                    <p className='d9'>Delivery Options</p>
                                    <div id="Div_10">
                                        <input type="number" id="Div10_input1" placeholder="Enter Pincode" />
                                        <button id="Div10_b1">Check</button>
                                    </div>
                                </div>
                            </div>
                            <div id="Div_11">
                                <p>100% Genuine Products</p>
                                <p>Return Policy</p>
                                <p id="Div11_p3">Sold by  {data[0].brand}</p>
                            </div>
                        </div>
                    </div>
                    <div id="Div_12">
                        <p className='d12p'>Description</p>
                        <p id="DESCO" className='d12pp'>{data[0].description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Singleproduct;
