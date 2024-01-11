import React from "react";
import './style.scss'

class Title extends React.Component {

    render() {
        return <div className="desc">
            <div className="descraption">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>

            </div>
        </div>
    }
}

export default Title