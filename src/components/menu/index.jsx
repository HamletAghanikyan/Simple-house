import React from "react";
import './style.scss'

class Menu extends React.Component {

    render() {

        return <div className="container">
            <div className="box">
                <img src={this.props.item.image} alt="" />
                <h4>{this.props.item.title}</h4>
                <p>{this.props.item.description}</p>
                <span>{this.props.item.price}</span>
            </div>
        </div>
    }
}

export default Menu 