import React from 'react';
import './Header.css';
import header from '../../images/header.jpg';
import Avatar1 from '../Avatar1/Avatar1';
import dp from '../../images/dp.jpg';



const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            
                <div className="image-cropper">
                <img src={dp} alt="R" className="profile-pic"/>
            </div>
            
        </div>
    );
};

export default Header;