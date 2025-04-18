import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import Wedgits from './Wedgits';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) =>{
    if(userAuth) {
      dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
      }));
    }
    else{
      dispatch(logout());
    }
  });
  } ,[]);
  

  return (
    <div className="app">
     <Header />
     {!user ?( <Login />) : (
      <div className='app_body'>
      <Sidebar /> 
      <Feed />
      <Wedgits />
      </div>
     )}
     
    </div> 
  );
}

export default App;
