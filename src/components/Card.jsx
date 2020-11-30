import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../config/context';
// import PropTypes from 'prop-types';

export default class Card extends Component {
    render() {
        const { id, imgsrc, price, title, slug } = this.props.product || {};
        return (
            <div className={this.props.className}>
                {/* getting access to consumer and ID */}
                <ProductConsumer>
                    {value => (
                        <div onClick={() => value.handleDetails(id)} className="card">
                            <Link to={`/details/${slug}`}>
                                <img src={imgsrc} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Rs {price}</h5>
                                    <p className="card-text">{title}</p>
                                    <p className='card-date d-flex justify-content-end'>Oct 29</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </ProductConsumer>
            </div>
        )
    }
}
// Card.propTypes = {
//     product: PropTypes.shape({
//         imgsrc: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         slug: PropTypes.string.isRequired
//     })
// }