import React from 'react';  
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

 function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
}

const Image = () => {
    var counter = 0
    const handleClick = () => {
        
        if (counter % 2 === 0) {
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