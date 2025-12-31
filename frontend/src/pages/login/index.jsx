
import UserLayout from '@/layout/UserLayout'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css';
import { registerUser, loginUser } from '@/config/redux/action/authAction';
import { emptyMessage } from '@/config/redux/reducer/authReducer';

export default function LoginComponent() {

  const authState = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [userLoginMethod, setUserLoginMethod] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const handleRegister = () => {
    console.log('Registering...')
    dispatch(registerUser({ username, password, email, name }));
  }

  const handleLogin = () => {
    console.log('login...')
    dispatch(loginUser({ email, password }));
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/dashboard');
    }
  },[])

  useEffect(() => {
    dispatch(emptyMessage());
  },[userLoginMethod])

  useEffect(() => {
    if (authState.loggedIn) {
      router.push('/dashboard')
    }
  }, [authState.loggedIn])
  

  return (
    <UserLayout>
      <div className={styles.container}>
      <div className={styles.cardContainer}>

        <div className={styles.cardContainer_left}>

            <p className={styles.cardleft_heading}>{userLoginMethod ? 'Sign In' : 'Sign Up'}</p>
            <p style={{color: authState.isError?'red':'green'}}>{authState.message.message}</p>
            
            <div className={styles.inputContainers}>

              {!userLoginMethod && <div className={styles.inputRow}>
                <input onChange={(e)=>setUsername(e.target.value)} className={styles.inputfield} type="text" placeholder='Username' />
                <input onChange={(e)=>setName(e.target.value)} className={ styles.inputfield} type="text" placeholder='Name' />
              </div>}

              <input onChange={(e)=>setEmail(e.target.value)} className={styles.inputfield} type="text" placeholder='Email' />
              
              <input onChange={(e)=>setPassword(e.target.value)} className={styles.inputfield} type="text" placeholder='Password' />
              
              <div onClick={() => {
                if (userLoginMethod) {
                  handleLogin();
                } else {
                  handleRegister();
                }
              }} className={styles.buttonWithOutline}>
                <p>{ userLoginMethod? "Sign In": 'Sign Up'}</p>
              </div>

            </div>

        </div>

        <div className={styles.cardContainer_right}>
              {userLoginMethod?<p>Don't have an account</p>:<p>Already have an account</p>}
              <div onClick={() => {
                setUserLoginMethod(!userLoginMethod)
              }} style={{color: 'black', textAlign: "center"}} className={styles.buttonWithOutline}>
                <p>{ userLoginMethod? "Sign Up": 'Sign In'}</p>
              </div>
        </div>

      </div>
      </div>
    </UserLayout>
  )
}
