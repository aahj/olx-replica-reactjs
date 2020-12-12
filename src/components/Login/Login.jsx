import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fire, auth, provider } from '../../config/firebase';
import './login.css'

export default function Login() {
    const history = useHistory();
    const googleSigin = () => {

        auth.signInWithPopup(provider).then(function (result) {
            var user = result.user;
            console.log('sigin user==>', user);
            history.push('/sell-products');
        })
            .catch(function (error) {
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <div>
            <div className='container'>
                <div className='login-div'>
                    <div className='login-title'>Proceed With Your Account</div>
                    <div className='login-signin'>Login</div>
                    <div>
                        <div onClick={googleSigin} className="loginWithGoogle">
                            <div className='d-flex justify-content-between'>
                                <span style={{ fontSize: 40 }}>
                                    <FontAwesomeIcon icon={['fab', 'google']} />
                                </span>
                                <p>Sigin With Google!</p>
                            </div>
                        </div>
                        <div className='loginWithFacebook'>
                            <div className='d-flex justify-content-between'>
                                <span style={{ fontSize: 40 }}>
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </span>
                                <p>Sigin With Facebook!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fire, auth, provider } from '../../config/firebase';
// import './login.css'

// class Login extends Component {
//     googleSigin = () => {

//         auth.signInWithPopup(provider).then(function (result) {
//             var user = result.user;
//             console.log('sigin user==>', user);
//             this.props.history.push('/sell-products');
//         })
//             .catch(function (error) {
//                 var errorMessage = error.message;
//                 alert(errorMessage);
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <div className='container'>
//                     <div className='login-div'>
//                         <div className='login-title'>Proceed With Your Account</div>
//                         <div className='login-signin'>Login</div>
//                         <div>
//                             <div onClick={this.googleSigin} className="loginWithGoogle">
//                                 <div className='d-flex justify-content-between'>
//                                     <span style={{ fontSize: 40 }}>
//                                         <FontAwesomeIcon icon={['fab', 'google']} />
//                                     </span>
//                                     <p>Sigin With Google!</p>
//                                 </div>
//                             </div>
//                             <div className='loginWithFacebook'>
//                                 <div className='d-flex justify-content-between'>
//                                     <span style={{ fontSize: 40 }}>
//                                         <FontAwesomeIcon icon={['fab', 'facebook']} />
//                                     </span>
//                                     <p>Sigin With Facebook!</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default withRouter(Login);