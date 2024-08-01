import React,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const  Post = forwardRef(({name,message,description,photoUrl},ref) => {
  return (
    <div  ref={ref} className='post'>
       <div className='post_header'>
        <Avatar src={photoUrl}>{description[0]}</Avatar>
        <div className='post_info'>
        <h4>{name}</h4>
        <p>{description}</p>
        </div>
       </div>
       <div className='post_body'>
        <p>{message}</p>
       </div>
       <div className='post_buttons'>
        <InputOptions  Icon={ThumbUpOffAltIcon} title='Like' color='gray' />
        <InputOptions  Icon={ChatIcon} title='Comment' color='gray' />
        <InputOptions  Icon={ShareIcon} title='Share' color='gray' />
        <InputOptions  Icon={SendIcon} title='Send' color='gray' />
       </div>
    </div>
  )
})

export default Post;
