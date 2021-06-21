import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return (
        <div className= 'Header'>
            <div className="header_left">
                <img 
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" 
                    alt="Facebook Logo"  
                />
                <div className="header_input">
                    <SearchIcon />
                    <input 
                    placeholder= 'Search Facebook'
                    type="text" />
                </div>
            </div>
            
            <div className="header_middle">
                <div className="header_option
                header_option--active">
                    <HomeIcon fontSize='large' />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize='large' />
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className="header_option">
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className="header_option">
                    <GroupIcon fontSize='large' />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                
                    <Avatar src='https://scontent.fdel7-1.fna.fbcdn.net/v/t1.6435-9/59552912_10216928455636939_4089688792921800704_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Zu9c9Pda58kAX_fohRZ&_nc_oc=AQmxDVFAdjn5XgmEnxVOmtrF6xeXNIWwzHvD0ewhRxUupAtY4O9wtKBaFY0phCjvTCc&tn=k08ewcYbw8A5wx5t&_nc_ht=scontent.fdel7-1.fna&oh=a4abc82eedf6cb52e5230c5791e6affd&oe=60D17EAC' />
                    <h4>Victor Dey</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>



            </div>
        </div>
    )
}

export default Header
