import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { useEffect, useRef, useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import { InputField1, UserRoleSelect } from "../../Components/Styled Components/AppStyle";
  

  const Login = () => {
    const [empID, setEmpID] = useState("");
    const [pass, setPass] = useState("");
    const [securityQ, setSecurityQ] = useState("");
    const [securityAns, setSecurityAns] = useState("");
    const navigate = useNavigate();

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
  
    //Validation (Trainer, Trainee, Admin)
    const loginUser = () => {
      if (empID === "Trainee" && pass === "1234") {
        navigate("setpass");
      } else if (empID === "Trainer" && pass === "0000") {
        console.log("trainer in, take me to home");
        navigate("trainer/home");
      } else if (empID === "Admin" && pass === "1111") {
        navigate("admin/home");
        console.log("admin clocking in, take me to home");
      } else {
        console.log("invalid user");
      }
    };
  
    return (
      <>
        {/* <img src={bgLogin} className="login-bg" alt="background image" />  */}
        <div className="split left">
          <label className="dvd">DVD</label>
        </div>
  
        <div className="split right">
          <form className="login-form">
            <img 
             ref={imgRef}
             src="/Logo.gif"
             className="appLogo"
             alt="logo"
                />
  
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
  
            {/* <div className="form-labels">
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="Remember Me"
                color="secondary"
              />
            </div> */}
  
            <Button 
              style={{marginBottom: "25px"}} 
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
                    <br/><br/>
                    <InputField1 value={empID} onChange={(e) => setEmpID(e.target.value)} type="text" placeholder="Employee ID" id="empID" name="empID" width="100%" />
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
  