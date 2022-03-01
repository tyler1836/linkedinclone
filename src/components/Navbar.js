import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import SchoolIcon from '@mui/icons-material/School';



function Navbar() {
    return (
        <div className='navbar'>
            <div className='noFlex'>
                < SearchIcon className='navSearch' />
                <input type="text" className='navbarSearch' ></input>
            </div>
            <div className='navIcons'>
                < HomeIcon />
                < GroupIcon />
                < WorkIcon />
                < MessageIcon />
                < NotificationsActiveIcon size={100}/>
                < AccountCircleIcon />
                <ViewComfyIcon />
                < SchoolIcon />
            </div>
        </div>
    )
}

export default Navbar