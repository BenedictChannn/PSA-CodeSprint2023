import InputBox from '../../components/InputBox'
import { useState } from 'react';
import { auth } from '../../data/firebase';
import { FirebaseError } from '../../error/FirebaseError'
import './Login.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState()
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailErrorMsg('')
    setPasswordErrorMsg('');

    const validator = require('validator')

  
  
    if (email.length === 0) {
      setEmailErrorMsg("email is required field");
    } else {
      const isValid = validator.isEmail(email);
      if (!isValid) {
        setEmailErrorMsg("Wrong email format");
      }
    } 
    
    if (password.length === 0) {
      setPasswordErrorMsg("Password is required field");
    }
  
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => {
        setErrorMsg(FirebaseError(error));
      })
  
      setEmail('');
      setPassword('');
    
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='loginDiv'>
      <div className='logo'>
        <img src='../../../assets/images/logo.png'/>
      </div>
      <form onSubmit={handleSubmit}>

        <InputBox placeholder="EMAIL" value={email} setValue={handleEmail}/>
        {emailErrorMsg !== "" && <label className='errorMsg'>{emailErrorMsg}</label>}
        <InputBox placeholder="PASSWORD" type="password" value={password} setValue={handlePassword}/>
        {passwordErrorMsg !== "" && <label className='errorMsg'>{passwordErrorMsg}</label>}
        <p className='forgotPassword'>Forgot your password? <span>Click here</span></p>
        <div className='buttonContainer'>
          <button className='button' type='submit'>LOGIN</button>
        </div>

      </form>

      {errorMsg !== "" && <label className='errorMsg'>{errorMsg}</label>}

      <div className='loginImage'>
        <img src='../../../assets/images/login.png' alt=''/>
      </div>
    </div>
  )
}
