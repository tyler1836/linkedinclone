import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Miniprofile() {
  return (
    <div>
      <div className='miniProfile'>
      < AccountCircleIcon sx={{fontSize: 75}}/>
      {/* pull info from DB */}
      {/* minibackground
      Name clickable
        Jobs
      <p>Who viewed your profile <span> 22 </span></p> clickable
      <p>Views of your post <span>100</span></p> clickable
      See all premium features clickable
      bookmarked items clickable */}
      </div>
      <div className='recentSearches'>
      <p>Recent</p>
      <a href="">Groups</a> <button className='arrowDown'></button>
      <a href="">Events</a> <button className='add'></button>
      <a href="">Followed Hashtags</a>
      </div>
    </div>
  )
}

export default Miniprofile