import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/banner';
import CardList from '../components/CardList';
import FeaturedProducts from '../components/FeaturedProducts';
import Top from '../components/top';
import Header from '../components/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Top />
                <Header />
                <Banner />
                <div className='container-fluid'>
                    <div className='jumbotron p-4 mt-3'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h4>Featured Products</h4>
                            </div>
                            <div>
                                <Link to='/'><strong>View All</strong></Link>
                            </div>
                        </div>
                        <br />
                        <FeaturedProducts
                            define='col-md-4 col-lg-3 col-10 mx-auto mb-4'
                        />
                    </div>
                    <div className='recommend p-3'>
                        <h4 >Fresh recommendations</h4>
                        <br />
                        <CardList
                            define='col-md-4 col-lg-3 col-10 mx-auto mb-4'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;