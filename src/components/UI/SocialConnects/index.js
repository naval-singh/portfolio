import React from "react";
import social from "../../../assets/social";
import './style.css';

/**
 * @author
 * @function SocialConnects
 **/

const SocialConnects = (props) => {
    return (
        <div className='socialConnect'>
            <span className='font-14 text-color'>Follow me on : </span>
            <a href='#' className='socialLink'>
                <img src={social.facebook} alt=''/>
            </a>
            <a href='#' className='socialLink'>
                <img src={social.twitter} alt=''/>
            </a>
            <a href='#' className='socialLink'>
                <img src={social.linkedin} alt=''/>
            </a>
            <a href='#' className='socialLink'>
                <img src={social.youtube} alt=''/>
            </a>
        </div>
    )
};

export default SocialConnects;
