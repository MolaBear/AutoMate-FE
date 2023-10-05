import React, { useState } from 'react';
import { Button, Card, Form, InputField1, RadioContainer, RadioInput, RadioLabel, StyledSelect, UserRoleSelect } from '../../../Components/Styled Components/AppStyle'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div style={{marginLeft: '250px'}}>
      <Card>
        <h2>Add a User</h2>
          <Form>
            <div className='column'>
              <InputField1 placeholder='First Name'/>
              <InputField1 placeholder='Last Name'/>
              <InputField1 placeholder='Emoployee Code'/>
              <InputField1 placeholder='Email Address'/>
              <InputField1 placeholder='Branch'/>
              <InputField1 placeholder='ID/Passport' />
              
              <RadioContainer>
                <h2>Gender</h2>
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
            </div>
            <div className='column'>
              <InputField1 placeholder='First Name'/>
              <InputField1 placeholder='Last Name'/>
              <InputField1 placeholder='Branch'/>
              <InputField1 placeholder='Phone Number'/>
              <UserRoleSelect placeholder='User Role'>
                  <option>Trainee</option>
                  <option>Trainer</option>
                  <option>Admin</option>
              </UserRoleSelect>
            </div>
          <div className='btn-submit'>        
            <Button padding='12px 30px' fontSize='20px'>Add New</Button>
          </div>

          </Form>
      </Card>
    </div>
  )
}

