import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import login from '../../../images/login.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { initializeApp } from "firebase/app";
import { userContex } from '../../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const Login = () => {
    let naviget = useNavigate();
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [logedInUser, setLogedInUser] = useContext(userContex)
    console.log(logedInUser);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider) 
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const {displayName, email} = user;
                const signInUser = {name: displayName, email: email};
                setLogedInUser(signInUser);
                naviget(from)   
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
           
        reset()

    };

    return (
        <section className='p-5'>
            <div className="container login-container">
                <div className="row align-items-center d-flex justify-content-between">
                    <div className="shadow-sm p-5 col-md-4">
                        <h3 className='text-secondary text-center mb-3'>Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                <label htmlFor="">User name</label>
                                <input className='form-control' {...register("user name", { required: true })} />
                            </div>

                            <div className="form-group mb-3">

                                <label htmlFor="">password</label>
                                <input className='form-control' type="password" {...register("password", { required: true })} />
                            </div>
                            <button className='btn-brand w-100 mt-5 p-2' type='submit'>Sign in with google</button>
                        </form>
                    </div>
                    <div className="col-md-6 login-img">
                        <img className='img-fluid' src={login} alt="login" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;