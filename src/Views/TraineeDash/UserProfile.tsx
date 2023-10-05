import { Button, Card, Form, FormField, FormLabel, InputField1, Label1, RadioContainer, RadioInput, RadioLabel, UserRoleSelect } from '../../Components/Styled Components/AppStyle'
import React from 'react'

export default function UserProfile() {
  return (
    <div>
        <Card>
            <div style={{textAlign: 'center', fontSize:'18px'}}>
                <h2>Welcome to your user Profile</h2>
                <p> Here you can find your user information
                This information is what will be sent when signing the register<br/><br/>
                <b>Please also upload your signature in the field below</b></p>
            </div><br/>
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
                </FormField>      
                </div>
                <div className='column'>
                <FormField>
                    <FormLabel>Disability Description:</FormLabel>
                    <InputField1 height="90px" placeholder='Disability'/>
                </FormField>
                <FormField>
                    <FormLabel>Emoployee Code:</FormLabel>
                    <InputField1 placeholder='Emoployee Code'/>
                </FormField>
                <FormField>
                    <FormLabel>Branch:</FormLabel>
                    <UserRoleSelect>
                        <option hidden={true}>Select Branch</option>
                        <option>JHB</option>
                        <option>DBN</option>
                        <option>CPT</option>
                    </UserRoleSelect>
                </FormField>
                <FormField>
                    <FormLabel>Job Title:</FormLabel>
                    <InputField1 placeholder='Job Titile'/>
                </FormField>
                <FormField>
                    <FormLabel>Add Signature:</FormLabel>
                    <InputField1 height="90px" placeholder='Signature'/>
                </FormField>
                </div>
                <div>
                <Button fontSize='16px' >Save Changes</Button>
                </div>
            </Form>
        </Card>
    </div>
  )
}
