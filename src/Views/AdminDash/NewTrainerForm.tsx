import { Button, Form, InputField1, Label1, RadioContainer, RadioInput, RadioLabel } from '../../Components/Styled Components/AppStyle'
import React from 'react'

export default function NewTrainerForm() {
  return (
    <div>
        <Form>
          <div className='column'>
            <InputField1 placeholder='First Name'/>
            <InputField1 placeholder='Last Name'/>
            <InputField1 placeholder='Emoployee Code'/>
            <InputField1 placeholder='Email Addressc'/>
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
            <InputField1 placeholder='Signature' height='120px'/>
          </div>
        <div className='btn-submit'>        
          <Button padding='12px 30px' fontSize='20px'>Add New</Button>
        </div>

        </Form>
    </div>
  )
}
