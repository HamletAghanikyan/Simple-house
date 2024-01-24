import React from 'react'
import './style.scss'
import Title from '../../components/title'
import Input from '../../components/input'
import Faqs from '../../components/faqs'
import Footer from '../../components/footer'

class Contact extends React.Component {

    questionList = [
        {
            question: '1.Lorem ispus almas de que escan teda?',
            answer: '#111 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
        },
        {
            question: '2.Lorem ispus almas de que escan teda?',
            answer: '#222 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
        },
        {
            question: '3.Lorem ispus almas de que escan teda?',
            answer: '#333 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
        },
        {
            question: '4.Lorem ispus almas de que escan teda?',
            answer: '#444 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
        },
    ]
    render() {
        return <div>
            <Title title={'Contact Page'} description={'You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.'} />
            <Input />
            <Title title={'Faqs'} description={'This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #555'} />
            {this.questionList.map((item, index) => {
                return <Faqs item={item} />
            })}
            <Footer />
        </div>
    }
}



export default Contact