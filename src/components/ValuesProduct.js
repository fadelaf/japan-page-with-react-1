import React from 'react'
import { FaQuestionCircle } from "react-icons/fa";

const ValuesProduct = ({text}) => {
 
    return (        
    <div className="container"> 
        <div className="value-product">
        <div className="value">
        <h2>Our Products <FaQuestionCircle /> </h2>
        <p>{text}</p>
        </div>
        <div className="value">
        <h2>We are Professional <FaQuestionCircle /> </h2>
        <p>{text}</p>
        </div>
        <div className="value">
        <h2>Flexible Schedule <FaQuestionCircle /> </h2>
        <span FaQuestionCircle></span>
        <p>{text}</p>
        </div>
    </div>
    </div>

    )
    
}


export default ValuesProduct