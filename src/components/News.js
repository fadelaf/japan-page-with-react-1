import React from "react";


const News = ({text}) => {
    
    return (
    <div className="more-comp news">
        <h3>News</h3>
        <h5>Breaking News</h5>
        <p>{text}</p>
    </div>
    )

}

export default News