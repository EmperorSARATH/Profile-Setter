import React from 'react';
import {Helmet} from "react-helmet";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Image = () => {
    var counter = 3
    const handleClick = () => {  
        if (counter %  2 === 0) {
            var details = document.getElementById('details');
            details.classList.add('detail-disabled');
            var image = document.getElementById('img');
            image.classList.add('img-swift-left');
            image.classList.add("move");

        } else {
            var details = document.getElementById('details');
            details.classList.remove('detail-disabled');
            var image = document.getElementById('img');
            image.classList.remove('img-swift-left');
            image.classList.remove("move");
        }
        counter++
        console.log(counter);
    }
    return (
        <div className='image-stack'>
            <Avatar alt="Remy Sharp" src={require('../images/Goku.jpg')} id='img' className='img1' onClick={handleClick} />
            {/* <img src= alt="logo" onClick={handleClick} id='img' className='img1'/> */}
            {/* <img src={require('../images/Gear.jpg')} alt="logo" id="img2"  className='image2'/> */}
        </div>

    );
}

export default Image;