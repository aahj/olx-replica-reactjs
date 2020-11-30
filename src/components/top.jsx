import React, { Component } from 'react'
import '../style.css';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../config/context';
import { Button } from 'react-bootstrap';
import InputGroup from './Bootstrap Component/InputGroup';

export default class Top extends Component {
    state = {
        search: ''
    }
    handleSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onClear = () => {
        document.getElementById('reset').value = '';
        this.setState({
            search: ''
        })
    }

    render() {
        const { search } = this.state;
        return (
            <div>
                <ProductConsumer>
                    {
                        value => {
                            const { products } = value;
                            const searching = products.filter(items => items.title.toLowerCase().includes(search.toLowerCase()));

                            //get unique value from products~location
                            const get_unique_location = products.reduce((acc, currentValue) => (
                                acc.includes(currentValue.location) ? acc : [...acc, currentValue.location]
                            ), []);

                            // const location = get_unique_location.filter(items => items.toLowerCase().includes(search.toLowerCase()));
                            return (
                                <div className='container-fluid top'>
                                    <div className='row'>
                                        <div className='col-md-1 mt-2 text-center'>
                                            <Link to='/'>
                                                <h2>Olx</h2>
                                            </Link>
                                        </div>
                                        <div className='col-md-4'>
                                            <InputGroup
                                                placeholder='Locations'
                                                aria_label='Location'
                                                onChange={(e) => this.handleSearch(e)}
                                                name='location'
                                                disabled={true}
                                            />
                                        </div>
                                        <div className='col-md-4 col-lg-4 mx-auto'>
                                            <InputGroup
                                                placeholder=' Find Cars, Phones and more.. '
                                                aria_label='cars'
                                                onChange={(e) => this.handleSearch(e)}
                                                name='search'
                                                id='reset'
                                            />
                                            {
                                                searching.map((val, index) => {
                                                    {
                                                        return search === '' ? null : <div id='outer_search'>
                                                            <ul style={{ backgroundColor: "rgb(79, 141, 233)", padding: '0 5px' }}>
                                                                <Link
                                                                    to={val.category.type}
                                                                    onClick={this.onClear} >
                                                                    <li
                                                                        className='shadow p-2 mb-0 bg-white rounded'
                                                                        key={index} >
                                                                        {val.title}
                                                                    </li>
                                                                </Link>
                                                            </ul>
                                                        </div>
                                                    }

                                                })
                                            }
                                        </div>

                                        <div className='col-md-3 col-lg-3 mt-2'>
                                            <Button variant="link">Login</Button>{' '}
                                            <Button className='ml-2 w-50' variant="dark">Sell</Button>{' '}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}