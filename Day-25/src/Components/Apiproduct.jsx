import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Apiproduct() {

  const dispatch = useDispatch()
  const {isLoading,isError,data} = useSelector((s)=>s.productReducer)
  useEffect(()=>{
      FetchData(dispatch)
  },[])

  return (
    <div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {data.map((el) => {
              return (
                <div key={el.id} className="col-12 col-md-4 col-lg-3 mb-5 my">
                  <Link to={`/product/${el.id}`}>
                  <a className="product-item">
                    <img
                      src={el.imageURL}
                      className="myimg product-thumbnail"
                    />
                    <h3 className="product-title">{el.product}</h3>
                    <strong className="product-price">${el.price}</strong>

                    <span className="icon-cross">
                      <img
                        src="https://themewagon.github.io/furni/images/cross.svg"
                        className="img-fluid"
                      />
                    </span>
                  </a></Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apiproduct;
