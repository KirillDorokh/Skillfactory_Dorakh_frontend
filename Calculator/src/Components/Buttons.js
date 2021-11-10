import * as React from "react";

import "../Styles/Buttons.css"

function Buttons(){
    let buttonName1 = 1;
    const handleClick = () => {
                console.log({buttonName1})
    }

    return(
        <div>
            <button className="btn" onClick={handleClick}>{buttonName1}</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">+</button>
            <button className="btn">-</button>
            <button className="btn">*</button>
            <button className="btn">/</button>
            <button className="btn">=</button>
        </div>
    )
}

export default Buttons;