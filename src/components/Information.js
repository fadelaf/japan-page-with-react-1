import React from 'react'
import Button from './Button'

const Information = ({text}) => {

    return (
    <div className="container">
        <div className="info-container">
            <div class="info info-text-1">
                <div class="info-text">
                <h3>Make Your Trip</h3>
                    <p>{text}</p>
                    <Button text={"more information"} />
                </div>
            </div>
            <div class="info info-text-2">
                <div class="info-text">
                    <h3>Tour with Us</h3>
                    <p>{text}</p>
                    <Button text={"more information"} />
                </div>
            </div>
        </div>
    </div>)
    
}


export default Information