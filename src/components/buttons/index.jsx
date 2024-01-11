import React from "react";
import './style.scss'



class Buttons extends React.Component{
    render(){
        return <div className="buttons">
            <button className="button">Pizza</button>
            <button className="button">Salad</button>
            <button className="button">Noodle</button>
        </div>
    }
}

export default Buttons