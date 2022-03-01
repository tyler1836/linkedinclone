import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Mainfeed() {
  return (
    <div>
        < AccountCircleIcon sx={{fontSize: 45}}/>
        <input type="text" className='startPost' />
        <button>Post</button>
      {/* pull in fetched data from posts stored in DB*/}

    </div>
    
  )
}

export default Mainfeed