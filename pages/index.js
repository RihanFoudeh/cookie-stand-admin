import Head from 'next/head'
import { useState } from 'react';


import Header from './components/Header'
import Main from './components/Main'
import LoginForm from './components/LoginForm'
import axios from 'axios';

// import Footer from '../components/Footer'


const baseUrl ='https://cookie-stand-api-rihan.herokuapp.com/';
const tokenUrl = baseUrl+'api/token/';

export default function CookieStandAdmin() {

  const [token, setToken] = useState('');

  const submitHandler = async (e, credintials)=>{
    e.preventDefault();
    axios.post(tokenUrl,credintials).then(data=>{
      setToken(data.data.access)
    });
    console.log(token)
  }
  

  // return (
    // <div className="bg-green-50">
      
    //   <Head>
    //     <title>Cookie Stand Admin</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

      if (!token)  return <LoginForm submitHandler={submitHandler}/> 
      return (
       <> 
       <Header/>
      <Main token={token}/>
      </>
      )
    //   <Main />

    //   {/* <Footer/> */}

    // </div>
  // )
}









