import InputBox from '../../components/InputBox'
import { useState } from 'react';
import { auth } from '../../data/firebase';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

function firebaseError(errorResponse) {
  switch (errorResponse.code) {
      case 'auth/user-not-found':
          return 'This email is not registered. Please proceed to register an account.';
      case 'auth/wrong-password':
          return 'Incorrect password entered. Please try again.';
      case 'auth/too-many-requests': // when user keeps clicking on the login/register buttons, can get disabled.
          return 'Authentication failed multiple times and account is disabled. Please proceed to register a new account.';
      case 'auth/email-already-in-use':
          return 'This email is already registered. You can proceed to login or register using another account.'
      case 'auth/invalid-login-credentials':
          return 'Your email or username is incorrect. Please try again'
      case 'auth/invalid-email':
          return '';
      default:
          return '';
  }
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState()
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setEmailErrorMsg('')
    setPasswordErrorMsg('');

    const validator = require('validator')

  
  
    if (email.length === 0) {
      setEmailErrorMsg("email is required field");
    } else {
      const isValid = validator.isEmail(email);
      if (!isValid) {
        setEmailErrorMsg("Wrong email format");
        return;
      }
    } 
    
    if (password.length === 0) {
      setPasswordErrorMsg("Password is required field");
      return;
    }
  
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigate('/home')

      })
      .catch(error => {
        console.error("Firebase Authentication Error:", error);
        setErrorMsg(firebaseError(error));
      })

      setEmail('')
      setPassword('')
    
  }

  return (
    <div className='loginDiv'>
      <div className='logo'>
        <img src='../../../assets/images/logo.png'/>
      </div>
      <form>

        <InputBox placeholder="EMAIL" value={email} setValue={setEmail}/>
        {emailErrorMsg !== "" && <label className='errorMsg'>{emailErrorMsg}</label>}
        <InputBox placeholder="PASSWORD" type="password" value={password} setValue={setPassword}/>
        {passwordErrorMsg !== "" && <label className='errorMsg'>{passwordErrorMsg}</label>}
        <p className='forgotPassword'>Forgot your password? <span>Click here</span></p>

        <div className='loginButtonContainer'>
          <button className='loginButton' onClick={handleSubmit}>
            LOGIN
          </button>
        </div>

      </form>

      {errorMsg !== "" && <p className='errorMsg'>{errorMsg}</p>}

      <div className='loginImage'>
        <img src='../../../assets/images/login.png' alt=''/>
      </div>
    </div>
  )
}
