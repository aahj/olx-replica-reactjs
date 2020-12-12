import React, { useState } from 'react';
import Input_file from '../Bootstrap Component/input_file';
import ProgressBar from '../Bootstrap Component/ProgressBar';
import imgDemo from '../../image/img-demo.png'
import { storage } from '../../config/firebase';
import './productSell.css'

export default function Sell() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
            let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        },
            error => {
                console.log('stoarage error', error);
            },
            () => {
                storage.ref('images/').child(image.name).getDownloadURL().then(url => {
                    console.log('url===>', url);
                    setUrl(url);
                });
            }
        )
    }

    return (
        <div>
            <div className='container'>
                <div className='sellProduct-div'>
                    <div className='sellProduct-heading'>Sell Your Products</div>
                    <p>Select Your File Here</p>
                    <hr style={{ backgroundColor: '#fff', marginBottom: '15px' }} />
                    <ProgressBar
                        progress={progress}
                    />
                    <Input_file
                        handleChange={handleChange}
                    />
                    <button type="button" style={{ marginBottom: 12 }}
                        onClick={handleUpload}
                        className="btn btn-light">
                        Upload
                        </button>
                    <br />
                    <img src={url ? url : imgDemo} style={{ width: 110, height: 100 }} alt="" />
                    <br />
                    <br />
                    <div className='sellProduct-heading'>Product Description</div>
                    <form action="">
                        <label htmlFor="">Category</label>
                        <select id="inputState" className="form-control" style={{ marginBottom: 14 }}>
                            <option defaultValue>Choose...</option>
                            <option value="mobile-phones">mobile-phones</option>
                            <option value="houses">Houses</option>
                            <option value="lands-and-plots">lands-and-plots</option>
                            <option value="hotels">Hotels</option>
                            <option value="cars">Cars</option>
                            <option value="tablets">Tablets</option>
                            <option value="motorcycles">Motorcycles</option>
                            <option value="tv-audio-video">Tv-audio-video</option>
                        </select>
                        <label htmlFor="">Title</label>
                        <input type="text" className="text_input" maxLength='20' placeholder='Enter title' required />
                        <label htmlFor="">Description</label>
                        <input type="text" className="text_input" maxLength='48' placeholder='Enter Description' required />
                        <label htmlFor="">Price</label>
                        <input type="number" className="text_input" maxLength='6' placeholder='Enter Price' required />
                        <label htmlFor="">Location</label>
                        <input type="text" className="text_input" maxLength='30' placeholder='Location' required />
                        <br />
                        <input type="submit" value='submit' className='submitBtn' />
                    </form>
                </div>

            </div>
        </div>
    )
}
