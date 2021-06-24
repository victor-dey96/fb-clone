import React from 'react'
import './StoryReel.css'
import Story from './Story'
import tanveerDP from './tanveerPic.jpg';
import guptaDP from './guptaPic.jpg';
import rituDP from './rituPic.jpg';
import ipsitaDP from './ipsitaPic.jpg';
import ipsitaCover from './ipsitaCover.jpg';
import guptaCover from './guptaCover.jpg';
import shruthiDP from './shruthiPic.jpg';
import tanveerCover from './tanveerCover.jpg';
function StoryReel() {
    return (
        <div className='StoryReel'>
            <Story
                image={tanveerCover}
                profileSrc={tanveerDP}
                title='Tanveer Ahmed'
            />
            <Story
                image='https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/aimee-bourque-instagram/x.jpg'
                profileSrc={rituDP}
                title='Ritu Halder'
            />
            <Story 
                image= 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/golgappa-pani-recipe-1-500x375.jpg'
                profileSrc={shruthiDP}
                title= 'Shruthi Salem'
            />
            <Story
                image= {ipsitaCover}
                profileSrc = {ipsitaDP}
                title= 'Ipsita Hedwig Bhargava'
                />
            <Story
                image= {guptaCover}
                profileSrc = {guptaDP}
                title= 'Aditya Gupta'
                />
            {/* StoryReel */}
            {/* StoryReel */}
            {/* StoryReel */}
            {/* StoryReel */}
        </div>
    )
}

export default StoryReel
