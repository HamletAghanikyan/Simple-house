import React from "react";
import './style.scss'
import about6 from '../../assets/images/about-06.jpg'


class History extends React.Component {

    render() {
        return <div className="container">
            <div className="history">
                <img src={about6} alt="" />
                <div className="history-text">
                    <h3>History of our restaurant</h3>
                    <p>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
                    <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                </div>
            </div>
        </div>
    }
}

export default History