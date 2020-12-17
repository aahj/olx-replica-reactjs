import React, { useState, useEffect } from 'react';
import Input_file from '../Bootstrap Component/input_file';
import ProgressBar from '../Bootstrap Component/ProgressBar';
import imgDemo from '../../image/img-demo.png';
import { storage, database, auth } from '../../config/firebase';
import './productSell.css';

export default function Sell() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [state, setState] = useState({
        title: '', description: '', price: 0, location: '', category: ''
    });
    const [auth_userData, setAuth_userData] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const userProfile = {
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    photo: user.photoURL
                }
                setAuth_userData(userProfile);
            }
            else {
                console.log('User is signOut');
            }
        });
    }, []);

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
                    setUrl(url);
                });
            }
        )
    }

    const handleProductValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitted = (e) => {
        e.preventDefault();
        const key = database.ref('User').push().key;
        let userData = {
            key: key,
            data: {
                title: state.title,
                description: state.description,
                price: state.price,
                location: state.location,
                category: state.category,
                file: url,
            },
            currentUser: {
                displayName: auth_userData.displayName || null,
                picture: auth_userData.photoURL || '',
                email: auth_userData.email || null,
            }
        }
        database.ref('User').child(key).set(userData).then(() => {
            alert("Form has been Submitted !");
        })
            .catch((error) => {
                alert("Generated =>", error);
            });
        setState({
            title: '', description: '', price: 0, location: '', category: ''
        });
        setProgress(0); setUrl('');
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
                    <form method='get' onSubmit={onSubmitted}>
                        <label>Category</label>
                        <select name='category' onChange={handleProductValue} value={state.category}
                            className="form-control"
                            style={{ marginBottom: 14 }}
                        >
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
                        <label>Title</label>
                        <input value={state.title} onChange={handleProductValue} name='title' type="text" className="text_input" maxLength='20' placeholder='Enter title' required />
                        <label>Description</label>
                        <input value={state.description} onChange={handleProductValue} name='description' type="text" className="text_input" maxLength='48' placeholder='Enter Description' required />
                        <label>Price</label>
                        <input value={state.price} onChange={handleProductValue} name='price' type="number" className="text_input" maxLength='6' placeholder='Enter Price' required />
                        <label>Location</label>
                        <input value={state.location} onChange={handleProductValue} name='location' type="text" className="text_input" maxLength='30' placeholder='Location' required />
                        <br />
                        <button type="submit" className='submitBtn'>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
