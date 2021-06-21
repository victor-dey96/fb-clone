import React, {useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('');
        setImageUrl('');
    };

    return (
        <div className='MessageSender'>
            <div className="messageSender_top">
            <Avatar src='https://scontent.fdel7-1.fna.fbcdn.net/v/t1.6435-9/59552912_10216928455636939_4089688792921800704_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Zu9c9Pda58kAX_fohRZ&_nc_oc=AQmxDVFAdjn5XgmEnxVOmtrF6xeXNIWwzHvD0ewhRxUupAtY4O9wtKBaFY0phCjvTCc&tn=k08ewcYbw8A5wx5t&_nc_ht=scontent.fdel7-1.fna&oh=a4abc82eedf6cb52e5230c5791e6affd&oe=60D17EAC' />
            <form>
                <input 
                        value = {input}
                        onChange= {(e)=> setInput(e.target.value)}
                        className= 'messageSender_input' 
                        placeholder= {`What's on your mind?`}
                />
                <input 
                        value={imageUrl}
                        onChange = {(e)=> setImageUrl(e.target.value)}
                        placeholder= 'Image URL (Optional)'/>
                <button onClick= {handleSubmit} type= 'submit'>
                    Hidden Submit
                </button>
            </form>
            
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: 'red' }}/>
                <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: 'green' }}/>
                <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: 'orange' }}/>
                <h3>Feeling/Activity</h3>
                </div>
            
            </div>
        </div>
    )
}

export default MessageSender
