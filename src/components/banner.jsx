import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import '../style.css';
import BannerImage from '../image/banner.PNG'
class Banner extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <img className='img-fluid' src={BannerImage} alt='banner'/>
            </div>
        )
    }
}
export default Banner;