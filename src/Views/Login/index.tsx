import axios from 'axios';
import {
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { InputField1, UserRoleSelect } from '../../Components/Styled Components/AppStyle';
import Popup from 'reactjs-popup';

interface JwtPayload {
  RoleName: string;
  exp: number;
}

const API_URL = 'https://localhost:7184/api/User/LoginUser'; 
const Login: React.FC = () => {
  
  const [empID, setEmpID] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [securityQ, setSecurityQ] = useState("");
  const [securityAns, setSecurityAns] = useState("");
  const navigate = useNavigate();
  
  const loginUser = async () => {
    try {
      const response = await axios.post(API_URL, {
        EmployeeNumber: empID,
        Password: pass,
      });

      const { message, isSucess } = response.data;

      if (isSucess) {
        const { jwtTokenKey } = message;
        
        localStorage.setItem('jwtToken', jwtTokenKey);
        
        const decodedToken = jwt_decode<JwtPayload>(jwtTokenKey);
        const userRole = decodedToken.RoleName
        if (userRole === 'Admin'){
            navigate('admin/sessions/view');
        }else if (userRole === 'Trainer') {
          navigate('/trainer/sessions/view');
        }else if (userRole === 'Trainee') {
          navigate('/trainee/home');
        }

      } else {
      console.log('Invalid credentials');
      alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Not Connected to server');
    }
  };

  
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(empID);
    }
  
      const imgRef = useRef<HTMLImageElement>(null);
  
      useEffect(() => {
        if (imgRef.current) {
          const img = imgRef.current;
          img.setAttribute('width', img.width.toString());
          img.setAttribute('height', img.height.toString());
        }
      }, []);

  return (
    <>
      <div className="split left">
        <label className="dvd">DVD</label>
      </div>

      <div className="split right">
        <form className="login-form">
            {/* <img 
               ref={imgRef}
               src="/Logo.gif"
               className="appLogo"
               alt="logo"
                  /> */}
          <TextField
            className="input-field"
            label="Employee Code"
            color="secondary"
            value={empID}
            onChange={(e) => setEmpID(e.target.value)}
            placeholder="BT0000"
            variant="outlined"
          />

          <TextField
            className="input-field"
            label="Password"
            color="secondary"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            variant="outlined"
          />

          <Button
            style={{ marginBottom: "25px" }}
            id="submitBtn"
            color="primary"
            onClick={loginUser}
          >
            Submit
          </Button>

            <Popup trigger={<label id="forgotPass" style={{marginLeft: "60%", marginTop:"10px"}}>forgot password</label>} modal nested>
               <div className='modal'>
                 <div className='content'>
                   <form onSubmit={handleSubmit} className="forgetForm">
                     <h2>Forgot Password</h2>
                     <label>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </label>
                     <InputField1 value={email} onChange={(e) => setEmpID(e.target.value)} type="text" placeholder="Email Address" id="email" name="email" width="100%" />
                     <br/>
                     <UserRoleSelect value={securityQ} onChange={(e) => setSecurityQ(e.target.value)} name="SecurityQ" id="SecurityQ" width="100%">
                       <option value="" disabled>Security Question</option>
                       <option value="Q1">Question 1</option>
                       <option value="Q2">Question 2</option>
                       <option value="Q3">Question 3</option>
                       <option value="Q4">Question 4</option>
                     </UserRoleSelect>
                     <InputField1 value={securityAns} onChange={(e) => setSecurityAns(e.target.value)} type="text" placeholder="Security Question Answer" id="securityAns" name="securityAns" width="100%"/>
                     <button type="submit" id="submitBtn">Reset Password</button> 
                   </form> 
                 </div>
               </div>
             </Popup>
        </form>
      </div>
    </>
  );
};

export default Login;

    