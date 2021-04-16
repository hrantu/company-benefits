import React from 'react';
import './Footer.css'



const Footer = () => {
    
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-3"></div>
                
                <div className="col-1.5 dot">
                    <small className="text">About Company</small>
                </div>
                <div className="col-1 dot">
                    <small className="text">Privacy Policy</small>
                </div>
                <div className="col-1.5 dot">
                    <small className="text">Terms & Conditions</small>
                </div>
                <div className="col-1 dot1">
                    <small className="text">Blog</small>
                </div>
                <div className="col-1 dot">
                    <small className="text">Contact Us</small>
                </div>
                <div className="col-3"></div>
                
            </div>
            
        </div>
    );
};

export default Footer;