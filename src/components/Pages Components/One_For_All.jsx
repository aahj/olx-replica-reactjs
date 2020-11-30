import React, { Component } from 'react';
import { faArrowCircleDown, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input_group from '../Bootstrap Component/Input_group';
import { Link } from 'react-router-dom';
import './style.css';
import { ProductConsumer } from '../../config/context';

export default class One_For_All extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { handleChangeSort, sort } = value;
                        return (
                            <div className='container-fluid'>
                                <div className="row p-3">
                                    <div className="col-md-5">
                                        <h2>{this.props.heading}</h2>
                                        <h6>Filters</h6>

                                        <hr />

                                        <div>
                                            <h5 type="button" data-toggle="collapse" data-target="#demo">Categories
                                        <FontAwesomeIcon className='icon_spacing' icon={faArrowCircleDown} />
                                            </h5>

                                            <div id="demo" className="collapse">
                                                <Link className='Link' to=''>All Categories</Link>
                                                {this.props.filterForCategory}
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <h5 type="button" data-toggle="collapse" data-target="#demo1">
                                                {this.props.filterHeading}
                                                <FontAwesomeIcon className='icon_spacing' icon={faArrowCircleDown} />
                                            </h5>

                                            <div id="demo1" className="collapse">
                                                {this.props.filterForMake}
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <h5 type="button" data-toggle="collapse" data-target="#demo2">Price
                                            <FontAwesomeIcon className='icon_spacing' icon={faArrowCircleDown} />
                                            </h5>
                                            <div id="demo2" className="collapse">
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <Input_group
                                                            label='Min'
                                                        />
                                                    </div>

                                                    <div className='mx-3'>
                                                        <Input_group
                                                            label='Max'
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                    </div>

                                    <div className="col-md-7">
                                        <br />
                                        <div className='products_gallery d-flex justify-content-between'>
                                            <div>
                                                <p id='view'>
                                                    View <FontAwesomeIcon className='icon_spacing' icon={faThLarge} />
                                                </p>
                                            </div>

                                            <div>
                                                <div className="form-group">
                                                    <select id="inputState" className="form-control"
                                                        value={sort}
                                                        onChange={(e) => handleChangeSort(e)}
                                                    >
                                                        <option active='true'>Sort By</option>
                                                        <option value="highest">Highest To Lowest</option>
                                                        <option value="lowest">Lowest To Highest</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        {this.props.list}
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
