import React from "react";
import './style.scss'



class Members extends React.Component {
    render() {
        return <div className="container">
            <div className="memberbox">
                <img src={this.props.item.image} alt="" />
                <div className="memberinfo">
                    <h2>{this.props.item.name}</h2>
                    <h3>{this.props.item.position}</h3>
                    <p>{this.props.item.description}</p>
                    <div className="socialmedias">
                        <a className={this.props.item.className}></a>
                        <a className={this.props.item.className1}></a>
                        <a className={this.props.item.className2}></a>
                        <a className={this.props.item.className3}></a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Members