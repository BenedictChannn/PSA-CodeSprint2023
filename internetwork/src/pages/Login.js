import InputBox from '../components/InputBox'
import { useState } from 'react';
import { auth } from '../data/firebase';
import { FirebaseError } from '../error/FirebaseError'




export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState()
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailErrorMsg('')
    setPasswordErrorMsg('');

    const validator = require('validator')

  
  
    if (email.length == 0) {
      setEmailErrorMsg("email is required field");
    } else {
      const isValid = validator.isEmail(email);
      if (!isValid) {
        setEmailErrorMsg("Wrong email format");
      }
    } 
    
    if (password.length == 0) {
      setPasswordErrorMsg("Password is required field");
    }
  
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        setSuccess("Success")
      })
      .catch(error => {
        setErrorMsg(FirebaseError(error));
        setSuccess("Error")
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
    <main>
      <form onSubmit={handleSubmit}>

        <InputBox placeholder="Email" value={email} setValue={handleEmail}/>
        {emailErrorMsg !== "" && <label>{emailErrorMsg}</label>}
        <InputBox placeholder="Password" type="password" value={password} setValue={handlePassword}/>
        {passwordErrorMsg !== "" && <label>{passwordErrorMsg}</label>}
        <button type='submit'>Login</button>

      </form>
      {errorMsg !== "" && <label>{errorMsg}</label>}
      {success !== "" && <label>{success}</label>}
    </main>
  )
}
