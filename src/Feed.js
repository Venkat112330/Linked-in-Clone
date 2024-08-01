import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import InputOptions from './InputOptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
  const user = useSelector(selectUser);
  const [input1,setInput] = useState('');
  const [posts,setPosts] =useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) =>
    setPosts(
      snapshot.docs.map((doc) => ({
      id:doc.id,
      data:doc.data(),

      }))
    )
    );
  },[]);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name:user.displayName,
      description:user.email,
      message:input1,
      photoUrl:user.photoUrl,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  }
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
            <CreateIcon />
            <form>
                <input value={input1} onChange = { e => setInput(e.target.value)} type='text' />
                <button onClick={sendPost}  type='submit'>Send</button>
            </form>
        </div>
        <div className='feed_inputOptions'>
            <InputOptions title = 'Photo' Icon ={InsertPhotoIcon} color ='#70b579'/>
            <InputOptions title = 'Subscriptions' Icon ={SubscriptionsIcon} color ='#e7a33e'/>
            <InputOptions title = 'Event' Icon ={EventIcon} color ='#c0cbcd'/>
            <InputOptions title = 'CalendarViewDay' Icon ={CalendarViewDayIcon} color ='#7fc15e'/>
        </div>
      </div>
      <FlipMove>
      {posts.map(({id,data:{name,description,message,photoUrl}}) =>(
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  )
}

export default Feed;
