import React from "react";
import './style.scss'
import avokado from '../../assets/images/img-01.jpg'


class Footer extends React.Component {

    render() {
        return <>
        <div className="footer ">
            <img src={avokado} alt="" />
            <div>
                <h3>Maecenas nulla neque</h3>
                <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                <button>Read More</button>
            </div>
        </div>
        <p className="home-end">Copyright © 2045 Simple House | Design: TemplateMo</p>
        </>
    }
}

export default Footer