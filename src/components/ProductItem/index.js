import React from "react";
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";




function ProductItem(){
    return(
        <div className="item productItem">
                    <div className="imgWrapper">
                      <img src="https://mahnam.co/home/images/Product-category/nodel/nodel-chicken-mahnam.jpg" alt="" className="w-100"/>
                      <span className="badge badge-primary">20%</span>
                      <div className="action">
                        <Button><SlSizeFullscreen /></Button>
                        <Button><IoMdHeartEmpty style={{fontSize: '20px'}} /></Button>
                      </div>
                    </div>
                    <div className="info">
                    <h2>this is an example text for the product</h2>
                    <span className="text-success d-block">In stock</span>
                    <Rating className="mt-2 mb-2" name='read-only' value={4} readOnly size="small" precision={0.5}/>
                    <div className="d-flex">
                      <span className="oldPrice">$20.00</span>
                      <span className="newPrice text-danger ml-3">$13.00</span>
                    </div>
                    </div>
                  </div>
    )
}

export default ProductItem;