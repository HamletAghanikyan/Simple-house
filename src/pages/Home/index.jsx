import React from 'react'
import './style.scss'
import Title from "../../components/title"
import Menu from "../../components/menu"
import pizza1 from "../../assets/images/01.jpg"
import pizza2 from "../../assets/images/02.jpg"
import pizza3 from "../../assets/images/03.jpg"
import pizza4 from "../../assets/images/04.jpg"
import pizza5 from "../../assets/images/05.jpg"
import pizza6 from "../../assets/images/06.jpg"
import pizza7 from "../../assets/images/07.jpg"
import pizza8 from "../../assets/images/08.jpg"
import pizza9 from "../../assets/images/09.jpg"
import pizza10 from "../../assets/images/10.jpg"
import pizza11 from "../../assets/images/11.jpg"
import pizza12 from "../../assets/images/12.jpg"
import pizza13 from "../../assets/images/13.jpg"
import pizza14 from "../../assets/images/14.jpg"
import Buttons from '../../components/buttons'
import Footer from '../../components/footer'



class Home extends React.Component {

    render() {
        return <div className='container'>
            <Title title={'Welcome to Simple House'} description={'Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.'} />
            <Buttons/>
            <div className='boxes'>
                <Menu image={pizza1} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza2} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza3} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza4} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza5} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza6} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza7} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza8} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'pizza'} />
                <Menu image={pizza9} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'salad'} />
                <Menu image={pizza10} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'salad'} />
                <Menu image={pizza11} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'salad'} />
                <Menu image={pizza12} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'salad'} />
                <Menu image={pizza13} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'salad'} />
                <Menu image={pizza14} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'salad'} />
                <Menu image={pizza1} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'noodle'} />
                <Menu image={pizza2} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'noodle'} />
                <Menu image={pizza3} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'noodle'} />
                <Menu image={pizza4} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'noodle'} />
                <Menu image={pizza5} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'noodle'} />
                <Menu image={pizza6} title={'Fusce dictum finibus'} description={'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'} price={'$45 / $55'} name={'noodle'} />
            </div>
            <Footer/>
        </div>
    }
}



export default Home