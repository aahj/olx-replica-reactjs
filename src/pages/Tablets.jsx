import React, { Component } from 'react'
import One_For_All from '../components/Pages Components/One_For_All';
import Tablets_category from '../components/Pages Components/Tablets_category';
import { Link } from 'react-router-dom';
import Top from '../components/top';
import Header from '../components/Header';

export default class Tablets extends Component {
    render() {
        return (
            <div>
                <Top />
                <Header />
                <One_For_All
                    heading='Tablets'
                    list={<Tablets_category
                        define='col-md-4 col-lg-4 col-10 mx-auto mb-4'
                    />}
                    filterForCategory={
                        <ul>
                            <li><Link className='Link' to=''>Tablets</Link></li>
                            <li><Link className='Link' to=''>Mobile Phones</Link></li>
                        </ul>
                    }
                    filterHeading='Make'
                    filterForMake={
                        <ul>
                            <li><Link className='Link' to=''>Apple</Link></li>
                            <li><Link className='Link' to=''>Samsung</Link></li>
                            <li><Link className='Link' to=''>Q Tabs</Link></li>
                        </ul>
                    }
                />
            </div>
        )
    }
}
