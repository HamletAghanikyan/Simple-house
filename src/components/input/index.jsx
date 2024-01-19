import React from "react";
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
                    <p>080-090-0110</p>
                    <p>info@company.com</p>
                    <span className="socialmedias">
                        <a className="icon-facebook" href=""></a>
                        <a className="icon-instagram" href=""></a>
                        <a className="icon-twitter" href=""></a>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default Input