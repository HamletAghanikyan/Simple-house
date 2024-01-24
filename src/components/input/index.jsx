import React from "react";
import Iframe from "react-iframe";
import './style.scss'
import '../../assets/icons/style.css'


class Input extends React.Component {

    render() {
        return <div className="container">
            <div className="input-head">
                <form className="input" action="">
                    <label htmlFor="">
                        <input type="text" placeholder="Name" />
                    </label>
                    <label htmlFor="">
                        <input type="email" placeholder="Email" />
                    </label>
                    <textarea name="essage" rows="10" placeholder="Message"></textarea>
                    <div className="input-button">
                        <button>Send</button>
                    </div>
                </form>
                <div className="input-foot">
                    <h3>Our Address</h3>
                    <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                    <p><span className="icon-phone contact-icon"></span> 080-090-0110</p>
                    <p><span className="icon-mail contact-icon"></span>  info@company.com</p>
                    <span className="socialmedias">
                        <a className="icon-facebook" href="https://www.facebook.com/" target="blank"></a>
                        <a className="icon-instagram" href="https://www.instagram.com/" target="blank"></a>
                        <a className="icon-twitter" href="https://twitter.com/?lang=ru" target="blank"></a>
                    </span>
                </div>
            </div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97536.19878565893!2d44.5120512!3d40.186675199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1706023773681!5m2!1sru!2sam"></iframe>"
                
        </div>
    }
}

export default Input