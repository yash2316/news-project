import React from 'react';

import { useEffect, useState } from "react";
import "../styles/login.css"
import { supabase } from "../supabase-config";


const LoginModal = ({ setUserEmail, setOpenLogin, anyError }) => {


  const [openRegisterPage, setOpenRegisterPage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const [errorRegistering, setErrorRegister] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    // Set fadeIn to true after the component mounts
    setFadeIn(true);
  }, []);

  useEffect(() => {
    setErrorLogin(anyError);
  }, [anyError]);



  async function handleRegister(e) {
    e.preventDefault();
    setErrorRegister("");

    if (newPassword !== newConfirmPassword || newPassword.length < 6) {
      return;
    }

    try {

      const { data, error } = await supabase.auth.signUp({
        email: newEmail,
        password: newPassword,
      });

      const userCred = await supabase.auth.getUser();
      setUserEmail(userCred.data.user ? userCred.data.user.email : "");


      console.log("data: ", data, "error: ", error.toString().replace('AuthApiError:', '').trim());



      if (error) {
        setErrorRegister(error.toString().replace('AuthApiError:', '').trim());
      } else {
        setOpenLogin(false);
        setNewConfirmPassword("");
        setNewEmail("");
        setNewPassword("");
      }
    } catch (e) {
      console.error(e);
      setErrorRegister("Error registering user");
    }
  }





  async function handleLogin(e) {

    e.preventDefault();
    setErrorLogin("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      const userCred = await supabase.auth.getUser();
      setUserEmail(userCred.data.user ? userCred.data.user.email : "");

      if (error) {
        setErrorLogin("Invalid login credential");
        console.log(error);
      } else {
        setOpenLogin(false);
      }

    } catch (er) {
      console.log(er);
      setErrorLogin("Invalid login credential");
    }

  }


  return (
    <div className={`modal-view  ${ fadeIn ? 'fade-in' : ''}`}>

      {/* <Login setUserEmail={setUserEmail} setOpenLogin={setOpenLogin} /> */}
      <div className="card login-card">
        <button className='btn-close' onClick={() => { setOpenLogin(false); setFadeIn(false) }}></button>
        {openRegisterPage ?
          <div>
            <form onSubmit={handleRegister} >

              <div className="error-box">
                {errorRegistering || newEmail !== "" ? <div style={{ color: '#FF6347' }}>{errorRegistering}</div> : ""}
                {newPassword.length < 6 && newPassword !== "" ? <div style={{ color: '#FF6347' }}>Password too short</div> : ""}
                {newConfirmPassword !== "" && newPassword !== "" ?
                  (newPassword === newConfirmPassword ? <div style={{ color: 'lime' }}></div> : <div style={{ color: '#FF6347' }}>Passwords do not match</div>)
                  : ""}
              </div>
              <h1>Register New</h1>
              <input placeholder="Email" onChange={(e) => setNewEmail(e.target.value)} value={newEmail} type="email" required className='form-control' />

              <input placeholder="Password" type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className='form-control' />
              <input placeholder="Confirm Password" type="password" onChange={(e) => setNewConfirmPassword(e.target.value)} value={newConfirmPassword} className='form-control' />

              <button type="submit" className="btn btn-dark">Register</button>
            </form>
            <button className="btn" onClick={() => setOpenRegisterPage(!openRegisterPage)}>Already Registered?</button>
          </div>
          :
          <div>
            <form onSubmit={handleLogin}  >
              <div className="error-box">
                {errorLogin ? <p style={{ color: '#FF6347' }}>{errorLogin}</p> : null}
              </div>
              <h1>Login</h1>
              <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required className='form-control' />
              <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required className='form-control' />
              <button type="submit" className="btn btn-dark">Login</button>
            </form>
            <button className="btn" onClick={() => setOpenRegisterPage(!openRegisterPage)}>New user?</button>
          </div>
        }
      </div>

    </div>
  );
};

export default LoginModal;
