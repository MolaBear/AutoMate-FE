import React, { useState } from 'react';
import { Button, Card, Form, FormField, FormLabel, InputField1, RadioContainer, RadioInput, RadioLabel, StyledSelect, UserRoleSelect } from '../../../Components/Styled Components/AppStyle'
import { Margin } from '@mui/icons-material';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div style={{marginLeft: '250px'}}>
      <Card>
        <h2>Add a User</h2>
          <Form>
            <div className='column'>
              <FormField>
                <FormLabel>First Name:</FormLabel>
                <InputField1 placeholder='First Name'/>
              </FormField>
              <FormField>
                <FormLabel>Last Name:</FormLabel>
                <InputField1 placeholder='Last Name'/>
              </FormField>
              <FormField>
              <FormField>
                <FormLabel>Phone Number:</FormLabel>
                <InputField1 placeholder='Phone Number'/>
              </FormField>
                <FormLabel>Email Address:</FormLabel>
                <InputField1 placeholder='Email Address'/>
              </FormField>
              <FormField>
                <FormLabel>ID/Passport:</FormLabel>
                <InputField1 placeholder='ID/Passport'/>
              </FormField>
              <FormField>
                <FormLabel>Race:</FormLabel>
                <UserRoleSelect placeholder='User Role'>
                    <option hidden={true}>Select Race</option>
                    <option>African</option>
                    <option>Asian</option>
                    <option>Indian</option>
                    <option>White</option>
                </UserRoleSelect>    
                <RadioContainer>
                  <FormLabel>Gender:</FormLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="gender" value="male" />
                    Male
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="gender" value="female" />
                    Female
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="gender" value="other" />
                    Other
                  </RadioLabel>
                </RadioContainer>  
              </FormField>      
            </div>
            <div className='column'>
              <FormField>
                <FormLabel>Emoployee Code:</FormLabel>
                <InputField1 placeholder='Emoployee Code'/>
              </FormField>
              <FormField>
                <FormLabel>Branch:</FormLabel>
                <InputField1 placeholder='Branch'/>
              </FormField>
              <FormField>
                  <FormLabel>Job Title:</FormLabel>
                  <InputField1 placeholder='Job Titile'/>
              </FormField>
              <FormField>
              <RadioContainer>
                  <FormLabel>Disability:</FormLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="disability" value="Yes" />
                    Yes
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="disability" value="no" />
                    No
                  </RadioLabel>
                </RadioContainer>
                <FormLabel>Disability Description:</FormLabel>
                <InputField1 height="90px" placeholder='Disability'/>
              </FormField>
              <FormField>
                <FormLabel>User Role:</FormLabel>
                <UserRoleSelect placeholder='User Role'>
                    <option hidden={true}>Select User Role</option>
                    <option>Trainee</option>
                    <option>Trainer</option>
                    <option>Admin</option>
                </UserRoleSelect>
              </FormField>
            </div>
            <div style={{margin: 'auto'}}>
            <Button fontSize='16px' >Create new user</Button>
            </div>
          </Form>
      </Card>
    </div>
  )
}