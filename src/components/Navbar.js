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
import { grey } from '@mui/material/colors';


function Navbar() {
    return (
        <div>
            < SearchIcon sx={{ color: grey[500], fontSize: 35}}/>
            <input type="text"  ></input>
            < HomeIcon sx={{ color: grey[500], fontSize: 35}}/>
            < GroupIcon sx={{ color: grey[500], fontSize: 35}}/>
            < WorkIcon sx={{ color: grey[500], fontSize: 35}}/>
            < MessageIcon sx={{ color: grey[500], fontSize: 35}}/>
            < NotificationsActiveIcon sx={{ color: grey[500], fontSize: 35}}/>
            < AccountCircleIcon sx={{ color: grey[500], fontSize: 35}}/>
            <ViewComfyIcon sx={{ color: grey[500], fontSize: 35}}/>
            < SchoolIcon sx={{ color: grey[500], fontSize: 35}}/>
        </div>
    )
}

export default Navbar