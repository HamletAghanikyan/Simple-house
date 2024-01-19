import React from 'react'
import './style.scss'
import Title from '../../components/title'
import Input from '../../components/input'

class Contact extends React.Component{
    render(){
        return <div>
         <Title title={'Contact Page'} description={'You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.'} />
            <Input></Input>
        </div>
        }
}



export default Contact