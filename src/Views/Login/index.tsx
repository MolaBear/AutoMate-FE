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
  

  const Login = () => {
    const [empID, setEmpID] = useState("");
    const [pass, setPass] = useState("");
    const [securityQ, setSecurityQ] = useState("");
    const [securityAns, setSecurityAns] = useState("");
    const navigate = useNavigate();

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
        navigate("trainee");
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
  
            <div className="form-labels">
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="Remember Me"
                color="secondary"
              />
            </div>
  
            <Button id="submitBtn" color="primary" onClick={loginUser}>
              Submit
            </Button>
          </form>
        </div>
      </>
    );
  };
  
  export default Login;
  