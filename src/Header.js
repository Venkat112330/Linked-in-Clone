import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import './HeaderOption';
import HeaderOption from './HeaderOption';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout);
    auth.signOut();  
  }
  return (
    <div className='header'>
      <div className='header_left'>
        <img src='data:image/png;base64,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' alt='icon'/>

       <div className='header_search'>
       <SearchIcon />
       <input placeholder='Search' type='text' />
       </div>

      </div>
      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={GroupIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Chat' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption  onClick = {logoutOfApp} avatar={true} title='Me'/>
      </div>
    </div>
  )
}

export default Header;
