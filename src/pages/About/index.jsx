import React from 'react'
import './style.scss'
import Title from '../../components/title'
import Options from '../../components/options'
import History from '../../components/history'
import Footer from '../../components/footer'
import Members from '../../components/members'
import member1 from "../../assets/images/about-01.jpg"
import member2 from "../../assets/images/about-02.jpg"
import member3 from "../../assets/images/about-03.jpg"
import member4 from "../../assets/images/about-04.jpg"
import '../../assets/icons/style.css'

class About extends React.Component{
    memberList = [
        {
            image: member1,
            name: 'Jennifer Soft',
            position: 'Founder and CEO',
            description:'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
            className: 'icon-facebook',
            className1: 'icon-twitter',
            className2: 'icon-instagram',
        },
        {
            image: member2,
            name: 'Daisy Walker',
            position: 'Executive Chef',
            description:'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus..',
            className: 'icon-facebook',
            className1: 'icon-twitter',
        },
        {
            image: member3,
            name: 'Florence Nelson',
            position: 'Kitchen Manager',
            description:'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est.',
            className: 'icon-facebook',
            className1:'icon-instagram'
        },
        {
            image: member4,
            name: 'Jennifer Soft',
            position: 'Founder and CEO',
            description:'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
            className: 'icon-facebook',
            className1: 'icon-twitter',
            className2: 'icon-instagram',
            className3: 'icon-youtube'
           
        },
    ]
    render(){
        return <div className='container'>
            <Title title={'About Simple House'} description={'This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.'} />
            <div className='membersall'>
                {this.memberList.map((item, index) => {
                    return <Members item={item} />
                })}
            </div>
            <Options/>
            <History/>
            <Footer/>
        </div>
        }
}



export default About