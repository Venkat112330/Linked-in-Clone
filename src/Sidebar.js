import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentitem = (topic) => (
        <div className='sidebar_recentItem' >
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
              <img src='data:image/jpeg;base64,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' alt='' />
              <Avatar src={user.photoUrl} alt='Me'>{user.email[0]}</Avatar>
              <h2>{user.displayName}</h2>
              <h4>{user.email}</h4>
          </div><div className='sidebar_stats'>
                  <div className='sidebar_stat'>
                      <p>Who viewed you</p>
                      <p className='sidebar_statNumber'>2,543</p>
                  </div>
                  <div className='sidebar_stat'>
                      <p>Views on posts</p>
                      <p className='sidebar_statNumber'>2,423</p>
                  </div>
              </div><div className='sidebar_bottom'>
                  <p>Recent</p>
                  {recentitem('reactjs')}
                  {recentitem('Programming')}
                  {recentitem('Software Developer')}
                  {recentitem('Designer')}
            </div>
    </div>
  )
}

export default Sidebar;
