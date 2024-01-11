import React from "react";
import './style.scss'

class Menu extends React.Component {

    state = {
        isHide: false
    }
    hideText = () => {
        this.setState({ isHide: !this.state.isHide })
    }

    render() {

        return <div className="container">
            <div className="box">
                {this.state.isHide ? <p>{this.props.name}</p> : null}
                <img src={this.props.image} alt="" />
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <span>{this.props.price}</span>
            </div>
        </div>
    }
}

export default Menu 