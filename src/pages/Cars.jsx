import React, { Component } from 'react'
import One_For_All from '../components/Pages Components/One_For_All';
import Cars_category from '../components/Pages Components/Cars_category';
import { Link } from 'react-router-dom';
import Top from '../components/top';
import Header from '../components/Header';

export default class Cars extends Component {
    render() {
        return (
            <div>
                <Top />
                <Header />
                <One_For_All
                    heading='Cars'
                    list={<Cars_category
                        define='col-md-4 col-lg-4 col-10 mx-auto mb-4'
                    />}
                    filterForCategory={
                        <ul>
                            <li><Link className='Link' to=''>Cars On Installments</Link></li>
                            <li><Link className='Link' to=''>Spare Parts</Link></li>
                            <li><Link className='Link' to=''>Tractors & Trailers</Link></li>

                        </ul>
                    }
                    filterHeading='Make'
                    filterForMake={
                        <ul>
                            <li><Link className='Link' to=''>Suzuki</Link></li>
                            <li><Link className='Link' to=''>Toyota</Link></li>
                            <li><Link className='Link' to=''>Honda</Link></li>
                            <li><Link className='Link' to=''>Nissan</Link></li>

                        </ul>
                    }
                />
            </div>
        )
    }
}
