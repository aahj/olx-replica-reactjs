import React, { Component } from 'react'
import One_For_All from '../components/Pages Components/One_For_All';
import Houses_category from '../components/Pages Components/Houses_category';
import { Link } from 'react-router-dom';
import Top from '../components/top';
import Header from '../components/Header';

export default class Houses extends Component {
    render() {
        return (
            <div>
                <Top />
                <Header />
                <One_For_All
                    heading='Houses'
                    list={<Houses_category
                        define='col-md-4 col-lg-4 col-10 mx-auto mb-4'
                    />}
                    filterForCategory={
                        <ul>
                            <li><Link className='Link' to=''>Portion & Floors</Link></li>
                            <li><Link className='Link' to=''>Apartments & Flats</Link></li>
                            <li><Link className='Link' to=''>Shop & Offices-Commercial Places</Link></li>

                        </ul>
                    }
                    filterHeading='Capacity'
                // filterForMake={
                //     <ul>
                //         <li><Link className='Link' to=''>Suzuki</Link></li>
                //         <li><Link className='Link' to=''>Toyota</Link></li>
                //         <li><Link className='Link' to=''>Honda</Link></li>
                //         <li><Link className='Link' to=''>Nissan</Link></li>                            

                //     </ul>
                // }
                />
            </div>
        )
    }
}
