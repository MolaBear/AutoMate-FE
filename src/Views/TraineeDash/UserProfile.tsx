import { Button, Card, Form, FormField, FormLabel, InputField1, InputFieldReadOnly, Label1, RadioContainer, RadioInput, RadioLabel, UserRoleSelect } from '../../Components/Styled Components/AppStyle'
import React, { useEffect, useState } from 'react'
import { UserProfileService } from '../../Services/data/UserProfileService';
import { decodeJwtToken } from '../../Services/data/jwtToken';
import axios from 'axios';

export default function UserProfile() {
    const userService = new UserProfileService();
    const [userProfile, setUserProfile] = useState({
        userId: 0,
        firstName: '',
        lastName: '',
        employeeNumber: '',
        identityNumber: '',
        emailAddress: '',
        phoneNumber: '',
        race: '',
        gender:true,
        disability: true,
        jobTitle: '',
        roleName: '',
        branchName: '',
        companyName: ''
    });
    
    const token = localStorage.getItem('jwtToken') as string;
    
    const decodedToken = decodeJwtToken(token);

    useEffect(() => {
        if (decodedToken) {
            loadUserProfile(decodedToken.UserId);
        } else {
            console.error('Failed to decode JWT token.');
        }
    }, [decodedToken]);

    async function loadUserProfile(userId: number) {
        try {
          axios.get('https://localhost:7184/api/User/GetUserProfile/'+userId).then((response)=>{
                const userDetails = response.data;
                setUserProfile(userDetails)
          });

        } catch (error) {
          console.error(`Error loading user profile:`, error);
        }
      }

      const handleFormSubmit = (event) => {
        event.preventDefault();
    
        // Send the updated data to the API
        axios.put('your-api-endpoint', userProfile).then((response) => {
          console.log('Data updated:', response.data);
        });
      };

  return (
    <div>
        <Card>
            <div style={{ textAlign: 'center', fontSize: '18px' }}>
                <h2>Welcome to your user Profile</h2>
                <p> Here you can find your user information This information is what will be sent when signing the register<br /><br />
                <b>Please also upload your signature in the field below</b></p>
            </div><br />
            <Form>
                <div className='column'>
                    <FormField>
                        <FormLabel>First Name:</FormLabel>
                        <InputFieldReadOnly value={userProfile.firstName} readOnly/>
                    </FormField>
                    <FormField>
                        <FormLabel>Last Name:</FormLabel>
                        <InputFieldReadOnly value={userProfile.lastName} readOnly />
                    </FormField>
                <FormField>
                    <FormLabel>Phone Number:</FormLabel>
                    <InputField1 defaultValue={userProfile.phoneNumber}
                                onChange={(e) => setUserProfile({ ...userProfile, phoneNumber: e.target.value })}/>
                </FormField>
                <FormField>
                    <FormLabel>Email Address:</FormLabel>
                    <InputField1 defaultValue={userProfile.emailAddress}/>
                </FormField>
                <FormField>    
                    <FormLabel>Gender:</FormLabel>
                    {/* <RadioContainer>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="gender"
                                value="male"
                                checked={userProfile.gender === 'male'}
                                readOnly
                            />
                            Male
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="gender"
                                value="female"
                                checked={userProfile.gender === 'female'}
                                readOnly
                            />
                            Female
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="gender"
                                value="other"
                                checked={userProfile.gender === 'other'}
                                readOnly
                            />
                            Other
                        </RadioLabel>
                    </RadioContainer> */}
                </FormField>
                <FormField>
                    <FormLabel>ID/Passport:</FormLabel>
                    <InputFieldReadOnly value={userProfile.identityNumber} readOnly/>
                </FormField>
                    <FormField>
                    <FormLabel>Race:</FormLabel>
                    <UserRoleSelect
                        value={userProfile.race}>
                        <option hidden={true}>Select Race</option>
                        <option>African</option>
                        <option>Asian</option>
                        <option>Indian</option>
                        <option>White</option>
                        {/* Add other options as needed */}
                    </UserRoleSelect>
                </FormField>
                <FormField>
                <RadioContainer>
                    <FormLabel>Disability:</FormLabel>
                    <RadioLabel>
                        <RadioInput 
                            type="radio" 
                            name="disability" 
                            value="Yes"
                            checked={userProfile.disability === true}
                         />
                            Yes
                        </RadioLabel>
                    <RadioLabel>
                        <RadioInput  
                            type="radio" 
                            name="disability" 
                            value="No"
                            checked={userProfile.disability === false}/>
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
                    <InputFieldReadOnly value={userProfile.employeeNumber} readOnly/>
                </FormField>
                <FormField>
                    <FormLabel>Branch:</FormLabel>
                    <UserRoleSelect
                        value={userProfile.branchName}>
                        <option hidden={true}>Select Branch</option>
                        <option>JHB</option>
                        <option>DBN</option>
                        <option>CPT</option>
                    </UserRoleSelect>
                </FormField>
                <FormField>
                    <FormLabel>Job Title:</FormLabel>
                    <InputField1 defaultValue={userProfile.jobTitle}/>
                </FormField>
                <FormField>
                    <FormLabel>Add Signature:</FormLabel>
                    <InputField1 height="90px" placeholder='Signature'/>
                </FormField>
                </div>
                <div>
                <Button type='submit' fontSize='16px' >Save Changes</Button>
                </div>
            </Form>
        </Card>
    </div>
  )
}
