import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
    return (
        <div className='Feed'>
            <StoryReel/>
            <MessageSender />
            <Post 
                profilePic= "https://scontent.fdel7-1.fna.fbcdn.net/v/t1.6435-9/59552912_10216928455636939_4089688792921800704_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Zu9c9Pda58kAX9hQUpR&_nc_oc=AQlK-f8WDCo7VeQmKADEhmMu7zR_L7BwP4d1fpYDLJJOy59D8CzO8jsz9JoWMasShTA&tn=k08ewcYbw8A5wx5t&_nc_ht=scontent.fdel7-1.fna&oh=cc7e10b58c3e369651ccacf6a9875b14&oe=60D378EC"
                message= "works"
                timestamp= "timestamp" 
                username= 'deyboi27'
                image='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
            />
            <Post />
            <Post />

        </div>
    )
}

export default Feed
