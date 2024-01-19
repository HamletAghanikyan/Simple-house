import React from "react";
import './style.scss'
import backgrundmember from '../../assets/images/about-05.jpg'
import Mark from "../mark";
import mark1 from '../../assets/images/mark1.jpg'
import mark2 from '../../assets/images/mark2.jpg'
import mark3 from '../../assets/images/mark3.jpg'

class Options extends React.Component {

    markList = [
        {
            image: mark1,
            description: 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.',
        },
        {
            image: mark2,
            description: 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.'
        },
        {
            image: mark3,
            description: 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.'
        },
    ]

    render() {
        return <div className="container">
            <div className="backgroundmember" style={{ backgroundImage: `url(${backgrundmember})`, }}>
            </div>
            <div className="marks">
                {this.markList.map((item, index) => {
                return <Mark item={item} />
            })}
            </div>
        </div>
    }
}

export default Options