import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
const Auth = () => {
  const [mode, setMode] = useState("signup");
  const {user,signUp,logout,login} = useContext(AuthContext);

  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit=(data)=>{
    if(mode ==='signup'){
      signUp(data.email,data.password);
    }else{
      login(data.email,data.password);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>user logged in: {user.email}</p>}
          <button onClick={()=>logout()}>Logout</button>
          <h1 className='page-title'>{mode === "signup"?"Sign Up":"Login"}</h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label className='form-label' htmlFor='email'>Email</label>
              <input  className='form-input'type='email' id='email' {...register('email',{required:'Email is required'})}/>
              {errors.email && (<span className='form-error'>{errors.email.message}</span>)}
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='password'>Password</label>
              <input  className='form-input' type='password' id='password' {...register('password',{required:'Password is required', minLength:{
                value: 4,
                message: 'Password must be at least 6 characters'
              },
              maxLength:{
                value: 12,
                 message: 'Password must be less than 12 characters'
              }
              })}/>
              {errors.password && (<span className='form-error'>{errors.password.message}</span>)}
            </div>
            <button type='submit' className='btn btn-primary btn-large'>{mode === "signup"?"Sign Up":"Login"}</button>
          </form>
          <div className="auth-switch">
            {
              mode === "signup"?(<p>Already habe an account? <span className='auth-link' onClick={()=>setMode('login')}>Login</span></p>):
              (<p>Don't habe an account? <span className='auth-link' onClick={()=>setMode('signup')}>Sign Up</span></p>)
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth