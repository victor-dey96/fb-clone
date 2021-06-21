import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className= 'Sidebar'>
            <SidebarRow 
                src='https://scontent.fdel7-1.fna.fbcdn.net/v/t1.6435-9/59552912_10216928455636939_4089688792921800704_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Zu9c9Pda58kAX_fohRZ&_nc_oc=AQmxDVFAdjn5XgmEnxVOmtrF6xeXNIWwzHvD0ewhRxUupAtY4O9wtKBaFY0phCjvTCc&tn=k08ewcYbw8A5wx5t&_nc_ht=scontent.fdel7-1.fna&oh=a4abc82eedf6cb52e5230c5791e6affd&oe=60D17EAC'
                title ='Victor Dey'    
            />
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title={'COVID-19 Information Center'}
            />
            <SidebarRow 
                Icon={EmojiFlagsIcon} title='Pages'
            />
            <SidebarRow 
                Icon={PeopleIcon} title= 'Friends'
            />
            <SidebarRow 
                Icon={ChatIcon} title='Messenger'
            />
            <SidebarRow 
                Icon={StorefrontIcon} title= 'Marketplace'
            />
            <SidebarRow 
                Icon={VideoLibraryIcon} title= 'Watch'
            />
            <SidebarRow 
                Icon={ExpandMoreIcon} title= 'See More'
            />
        </div>
    )
}

export default Sidebar
