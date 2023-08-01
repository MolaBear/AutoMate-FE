import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import Popup from 'reactjs-popup';
import logo from './img/Logo.gif'
import bgLogin from './img/bg-login.png'
import './login.css'
import { useState } from 'react';


export const Login = () => {

  const [empID, setEmpID] = useState('');
    const [pass, setPass] = useState('');
    const [securityQ, setSecurityQ] = useState('');
    const [securityAns, setSecurityAns] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(empID);
    }


    //Validation (Trainer, Trainee, Admin)
    const loginUser = () => {
     if (empID == "Trainee", pass == "1234"){
         console.log('hey i am in, take me to home');
     }else if (empID == "Trainer", pass == "0000"){
         console.log('trainer in, take me to home');
     }else if (empID == "Admin", pass == "1111"){
         console.log('admin clocking in, take me to home');
     }else {
         console.log('invalid user')
     }
 }
    

  return (
    <>
    {/* <img src={bgLogin} className="login-bg" alt="background image" />  */}
     <div class = "split left">
                <label class="dvd">DVD</label>
        
        </div> 
    
    <div class = "split right">
    <form className='login-form'>
        <img src={logo} className="appLogo" alt="logo" /> 
      
        <TextField  className="input-field" 
        label="Employee Code" 
        color='secondary' 
        value={empID} onChange={(e) => setEmpID(e.target.value)} 
        placeholder="BT0000" 
        variant="outlined"/>


        <TextField  className="input-field" 
        label="Password" 
        color='secondary' 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
        type='password'
        variant="outlined" />

        <div className='form-labels'>
            <FormControlLabel control={<Checkbox color='secondary' />} label="Remember Me" color='secondary'/>
        
            <Popup trigger= {<label id="forgotPass">forgot password</label>} modal nested>
            {
                close => (
                    <div className='modal'>
                        <div className='content'>
                            <form onSubmit={handleSubmit} class = "forgetForm">
                            <h2>Forgot Password</h2>
                            <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                            
                            <TextField sx={{ mt: 2, minWidth: 520 }}
                                        className="popup-input-field" 
                                        label="Employee Code" 
                                        color='secondary' 
                                        value={empID} onChange={(e) => setEmpID(e.target.value)} 
                                        placeholder="BT0000" 
                                        variant="outlined" />

                            <FormControl sx={{ mt: 2, minWidth: 520 }}>
                                    <InputLabel 
                                    color='secondary'
                                    >SecurityQuestion</InputLabel>

                                    <Select 
                                    placeholder='Security Question'
                                    color='secondary'
                                    value={securityQ} onChange={(e) => setSecurityQ(e.target.value)}    
                                    variant="outlined"
                                    label='Security Question'
                            
                            >
                                    <MenuItem value={10}>Question 1 The ultimate Question of questions</MenuItem>
                                    <MenuItem value={20}>Question 2</MenuItem>
                                    <MenuItem value={30}>Question 3</MenuItem>
                                    </Select>
                                </FormControl>
                                
                        
                            <TextField  sx={{ mt: 2, minWidth: 520 }}
                                        className="popup-input-field" 
                                        label="Security Answer" 
                                        color='secondary' 
                                        value={securityAns} onChange={(e) => setSecurityAns(e.target.value)} 
                                        variant="outlined" />
                            
                            <Button id='resetBtn' color='primary'>Reset Password</Button> 
                            </form> 
                        </div>
                    </div>
                )
            }
            </Popup>

        </div>
        

        <Button 
            id='submitBtn' 
            color='primary' 
            onClick={loginUser}
        >
            Login</Button>



    </form>
        </div>
    </>
                
  )
}
