import React from "react";
import './style.scss'


class Faqs extends React.Component {

    state = {
        changeArrow: false
    }
    arrow = () => {
        this.setState({ changeArrow: !this.state.changeArrow })
    }

    state = {
        isHide: false
    }
    unHide = () => {
        this.setState({ isHide: !this.state.isHide })
    }

    

    render() {
        return <div className="container">
            <div className="question">
                <button onClick={this.unHide}>{this.props.item.question} <span onClick={this.arrow} className={this.state.changeArrow ? 'icon-down' : 'icon-left'} ></span></button>
                {this.state.isHide ? <p>{this.props.item.answer}</p> : null}
            </div>
        </div>
    }
}
export default Faqs