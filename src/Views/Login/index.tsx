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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css'

interface JwtPayload {
  RoleName: string;
  exp: number;
}

const API_URL = 'https://localhost:7184/api/User/LoginUser'; 
const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      employeeCode: "",
      password: "",
    },
    validationSchema: Yup.object({
      employeeCode: Yup.string()
      .required('Employee code is required')
      .test('employeeCode', 'Invalid employee code', (value) => {
        const employeeCodeRegex = /^(BT)(\d{4,10})$/;
        return employeeCodeRegex.test(value!);
      }),
      password: Yup.string()
      .required('Password is required')
      .test('Password', 'Invalid Password', (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;
        return passwordRegex.test(value!);
      }),
    }),
    onSubmit: (values) => {
      // method to submit
      console.log('form values', values);
      loginUser(values);
    }
  })
  
  const [empID, setEmpID] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [securityQ, setSecurityQ] = useState("");
  const [securityAns, setSecurityAns] = useState("");
  const navigate = useNavigate();
  
  const loginUser = async (values) => {
    const { employeeCode, password } = values;
    try {
      const response = await axios.post(API_URL, {
        EmployeeNumber: employeeCode,
        Password: password,
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
        <form onSubmit={formik.handleSubmit} className="login-form">
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
            id="employeeCode"
            value={formik.values.employeeCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="BT0000"
            variant="outlined"
          />
          {formik.touched.employeeCode && formik.errors.employeeCode ? (
            <div> 
              <span className="text-danger">{formik.errors.employeeCode}</span></div>
          ): null}

          <TextField
            className="input-field"
            label="Password"
            color="secondary"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            variant="outlined"
          />
{formik.touched.password && formik.errors.password ? (
            <div><span className="text-danger">{formik.errors.password}</span></div>
          ): null}

          <Button
            style={{ marginBottom: "25px" }}
            id="submitBtn"
            color="primary"
            type="submit"
            
          >
            Submit
          </Button>

            <Popup trigger={<label id="forgotPass" style={{marginLeft: "60%", marginTop:"10px"}}>forgot password</label>} modal nested>
               <div className='modal'>
                 <div className='content'>
                   <form onSubmit={handleSubmit} className="forgetForm">
                     <h2>Forgot Password</h2>
                     <label>
                     Enter your Employee Code and Security Question to reset your password
                     </label>
                     <InputField1 value={empID} onChange={(e) => setEmpID(e.target.value)} type="text" placeholder="Employee Code" id="employeeCode" name="employeeCode" width="100%" />
                     <br/>
                     <UserRoleSelect value={securityQ} onChange={(e) => setSecurityQ(e.target.value)} name="SecurityQ" id="SecurityQ" width="100%">
                       <option value="" disabled>Security Question</option>
                       <option value="Q1">What elementary school did you attend?</option>
                       <option value="Q2">What is your mother's maiden name?</option>
                       <option value="Q3">What is the name of the town where you were born?</option>
                       
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

    