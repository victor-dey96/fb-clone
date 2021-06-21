import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='Post'>
            <div className="post_top">
                <Avatar src={profilePic}
                        className="post_avatar"
                />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=''></img>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <CommentIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>

            </div>
        </div>
    )
}

export default Post
