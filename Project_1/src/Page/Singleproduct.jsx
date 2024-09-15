import React, { useEffect, useState } from 'react';
import '../assets/Singleproduct.css';
import Footer from '../Componets/Footer';
import Navbar from '../Componets/Navbar';
import { useParams } from 'react-router-dom';

const Singleproduct = () => {
    const obj = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://mock-server-app2-dll0.onrender.com/product?id=${obj.id}`)
            .then((Res) => Res.json())
            .then((res) => {
                setData(res);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [obj.id]);

    if (!data) {
        // Return a loader or fallback content while waiting for the data to be fetched
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div id="GK_PARENT">
                <div id="Div_container">
                    <p id="PPKT" className='ppp'>Home - Hair - Shop By Hair Type - {data.category}</p>
                    <div id="Div_1">
                        <div id="Div_2">
                            <img id="Div_2_img" src={data.image1} alt="Product" />
                        </div>
                        <div id="Div_3">
                            <div id="Div_4">
                                <p id="Div4_p1">{data.card_title}</p>
                            </div>
                            <div id="Div_5">
                                <p id="Div_5_p1">{data.rating}/5</p>
                                <p id="Div_5_p2">{data.ratingNum} Rating</p>
                                <p>&</p>
                                <p id="Div_5_p3">{data.reviews} reviews</p>
                            </div>
                            <div id="Div_6">
                                <div id="Div_7">
                                    <p>MRP:</p>
                                    <p id="Div7_p1" className='d7p1'>₹{data.price}</p>
                                    <p id="Div7_p2" className='d7p2'>₹{data.off_price}</p>
                                    <p id="Div7_p3" className='d7p3'>{data.offer}% Off</p>
                                </div>
                                <p className='d7p3'>inclusive of all taxes</p>
                            </div>
                            <div id="Div_8">
                                <button className="Div8_b1">Add to Bag</button>
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
                                <p id="Div11_p3">Sold by {data.brand}</p>
                            </div>
                        </div>
                    </div>
                    <div id="Div_12">
                        <p className='d12p'>Description</p>
                        <p id="DESCO" className='d12pp'>{data.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Singleproduct;
