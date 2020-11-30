import React, { Component } from 'react'
import One_For_All from '../components/Pages Components/One_For_All';
import Tv_category from '../components/Pages Components/Tv_category';
import { Link } from 'react-router-dom';

export default class Tv_audio_video extends Component {
    render() {
        return (
            <div>
                <One_For_All
                    heading='Tv-audio-video'
                    list={<Tv_category
                        define='col-md-4 col-lg-4 col-10 mx-auto mb-4'
                    />}
                    filterForCategory={
                        <ul>
                            <li><Link className='Link' to=''>Tv-audio-video</Link></li>
                            <li><Link className='Link' to=''>Computer</Link></li>
                        </ul>
                    }
                    filterHeading='Type'
                    filterForMake={
                        <ul>
                            <li><Link className='Link' to=''>Tv</Link></li>
                            <li><Link className='Link' to=''>Video-audio</Link></li>                            
                        </ul>
                    }
                />
            </div>
        )
    }
}
