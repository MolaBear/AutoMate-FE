import React, { useState } from 'react';
import { Button, Card, InputField1, Label1, StyledCloceIcon } from '../../Components/Styled Components/AppStyle'
import ToggleSwitch from '../../Components/Styled Components/ToggleSwitch';
import { Popover } from '@mui/material';
import NewTrainerForm from './NewTrainerForm';
import { useFormik } from "formik";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {

  
  return (
    <div>
   
    <Card>
          <div className='head-content'>
          <StyledCloceIcon xmlns="http://www.w3.org/2000/svg" >
            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#1C1B1F" />
            </StyledCloceIcon>
            <Label1>Please use toggle to show whether a user has an ID or Passport</Label1>
          <ToggleSwitch></ToggleSwitch>
          </div>
          <div className='body-content'>
            {
              
            }
            <NewTrainerForm/> 
          </div>
    </Card>
    </div>
  )
}

