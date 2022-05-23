import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='pt-5 mb-3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <ul className='text-secondary'>
                            <li><a href="#">Emergency dental care</a></li>
                            <li><a href="#">Check up</a></li>
                            <li><a href="#">Treatment of teeth diasease</a></li>
                            <li><a href="#">Tooth extraction</a></li>
                            <li><a href="#">Check up</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className='text-primary'>service</h4>
                        <ul className='text-secondary'>
                            <li><a href="#">Emergency dental care</a></li>
                            <li><a href="#">Check up</a></li>
                            <li><a href="#">Treatment of teeth diasease</a></li>
                            <li><a href="#">Tooth extraction</a></li>
                            <li><a href="#">Check up</a></li>
                            <li><a href="#">Tooth extraction</a></li>
                            <li><a href="#">Check up</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className='text-primary'>Oral health</h4>
                        <ul className='text-secondary'>
                            <li><a href="#">Emergency dental care</a></li>
                            <li><a href="#">Check up</a></li>
                            <li><a href="#">Treatment of teeth diasease</a></li>
                            <li><a href="#">Tooth extraction</a></li>
                            <li><a href="#">Check up</a></li>
                            <li><a href="#">Tooth extraction</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className='text-primary'>Our address</h4>
                        <p className='text-secondary'>new-work-13838 hudson yard.</p>
                        <ul className='social-icon text-secondary d-flex mt-5'>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        </ul>
                        <p className='mt-5'>Call now</p>
                        <div className="btn btn-primary">+9399929343</div>
                    </div>
                </div>
                <div className="copyright d-flex text-center justify-content-center mt-5 align-items-center">
                    <FontAwesomeIcon icon={faCopyright} /> <p className='text-secondary'>copyright 2022 All rights reserved</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;