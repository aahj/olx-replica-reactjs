import React, { Component } from 'react'
import One_For_All from '../components/Pages Components/One_For_All';
import Land_category from '../components/Pages Components/Land_category';
import { Link } from 'react-router-dom';
import Top from '../components/top';
import Header from '../components/Header';

export default class Lands_and_plots extends Component {
    render() {
        return (
            <div>
                <Top />
                <Header />
                <One_For_All
                    heading='Lands and Plots'
                    list={<Land_category
                        define='col-md-4 col-lg-4 col-10 mx-auto mb-4'
                    />}
                    filterForCategory={
                        <ul>
                            <li><Link className='Link' to=''>Portion & Floors</Link></li>
                            <li><Link className='Link' to=''>Apartments & Flats</Link></li>
                            <li><Link className='Link' to=''>Shop & Offices-Commercial Places</Link></li>

                        </ul>
                    }
                    filterHeading='Type'
                    filterForMake={
                        <ul>
                            <li><Link className='Link' to=''>Commercial</Link></li>
                            <li><Link className='Link' to=''>Residential</Link></li>

                        </ul>
                    }
                />
            </div>
        )
    }
}
