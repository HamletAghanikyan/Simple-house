import React from "react";
import './style.scss'



class Mark extends React.Component {
    render() {
        return <div className="container">
            <div className="markbox">
                <img src={this.props.item.image} alt="" />
                <p>{this.props.item.description}</p>
                <button>Read More</button>
                </div>
            </div>
    }
}

export default Mark