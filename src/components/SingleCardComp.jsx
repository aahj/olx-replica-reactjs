import React, { Component } from 'react';
import { ProductConsumer } from '../config/context';
import CardList from './CardList';
import userIcon from '../image/user1.png';
import Top from '../components/top';
import Header from '../components/Header';

class SingleCardComp extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { imgsrc, price, title, seller_desc, description, location } = value.detailProduct || {};
                        return (
                            <div>
                                <Top /><Header />
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div>
                                                <img src={imgsrc} className="img-thumbnail" alt={title} />
                                            </div>
                                            <div className='detail'>
                                                <h2>Details</h2>
                                                <hr />
                                                <h2>Description</h2>
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className='details_tag'>
                                                <h2 className='details_price_tag'>Rs {price}</h2>
                                                <p className='details_title_tag'>{title}</p>
                                                <hr />
                                                <p className='details_loc_tag'>{location}</p>
                                            </div>
                                            <div className='seller_tag'>
                                                <h3>Seller Description</h3>
                                                <hr />
                                                <p><img src={userIcon} className='rounded-circle' alt="" />
                                                    {seller_desc}</p>
                                                <button type="button" className="btn btn-secondary btn-lg btn-block">Chat With Seller</button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <h2>Related ads</h2>
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
            </ProductConsumer>
        )
    }
}
export default SingleCardComp;