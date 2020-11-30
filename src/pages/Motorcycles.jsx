import React, { Component } from 'react'
import One_For_All from '../components/Pages Components/One_For_All';
import Motorcycles_category from '../components/Pages Components/Motorcycles_category';
import { Link } from 'react-router-dom';

export default class Motorcycles extends Component {
    render() {
        return (
            <div>
                <One_For_All
                    heading='Motorcycles'
                    list={<Motorcycles_category
                        define='col-md-4 col-lg-4 col-10 mx-auto mb-4'
                    />}
                    filterForCategory={
                        <ul>
                            <li><Link className='Link' to=''>Spare Parts</Link></li>
                            <li><Link className='Link' to=''>Bicycles</Link></li>
                            <li><Link className='Link' to=''>Scooters</Link></li>
                        </ul>
                    }
                    filterHeading='Make'
                    filterForMake={
                        <ul>
                            <li><Link className='Link' to=''>Suzuki</Link></li>
                            <li><Link className='Link' to=''>Toyota</Link></li>
                            <li><Link className='Link' to=''>Honda</Link></li>
                            <li><Link className='Link' to=''>Yamaha</Link></li>                            

                        </ul>
                    }
                />
            </div>
        )
    }
}
