import React, { Component } from 'react'
import One_For_All from '../components/Pages Components/One_For_All';
import Mobile_category from '../components/Pages Components/Mobile_category';
import { Link } from 'react-router-dom';

export default class Mobile_phones extends Component {
    render() {
        return (
            <div>
                <One_For_All
                    heading='Mobile Phones'
                    list={<Mobile_category
                        define='col-md-4 col-lg-4 col-10 mx-auto mb-4'
                    />}
                    filterForCategory={
                        <ul>
                            <li><Link className='Link' to=''>Mobile</Link></li>
                            <li><Link className='Link' to=''>Tablets</Link></li>
                        </ul>
                    }
                    filterHeading='Make'
                    filterForMake={
                        <ul>
                            <li><Link className='Link' to=''>Samsung</Link></li>
                            <li><Link className='Link' to=''>Apple</Link></li>
                            <li><Link className='Link' to=''>Infinix</Link></li>
                        </ul>
                    }
                />
            </div>
        )
    }
}
