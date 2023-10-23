import { Button, Card, Form, FormField, FormLabel, InputField1, InputFieldReadOnly, Label1, RadioContainer, RadioInput, RadioLabel, UserRoleSelect } from '../../Components/Styled Components/AppStyle'
import React, { useEffect, useState } from 'react'
import { UserProfileService } from '../../Services/data/UserProfileService';
import { decodeJwtToken } from '../../Services/data/jwtToken';
import axios from 'axios';
import { updateUserInfo } from '../../Services/data/userApi';

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    userId: 0,
    firstName: '',
    lastName: '',
    employeeNumber: '',
    identityNumber: '',
    emailAddress: '',
    phoneNumber: '',
    race: '',
    gender: '',
    disability: false, 
    jobTitle: '',
    roleName: '',
    branchName: '',
    companyName: ''
  });

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const userId = getUserId(); // Implement your own logic to get the user's ID
      const response = await axios.get(`https://localhost:7184/api/User/GetUserProfile/${userId}`);
      const userDetails = response.data;
      setUserProfile(userDetails);
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateUserInfo(userProfile.userId, userProfile);
      console.log('Data updated:', response.data);
      // You may want to display a success message to the user
    } catch (error) {
      console.error('Error updating user profile:', error);
      // You may want to display an error message to the user
    }
  };

  const getUserId = () => {
    const token = localStorage.getItem('jwtToken') as string;
    const decodedToken = decodeJwtToken(token);
    return decodedToken?.UserId;
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
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
                    <InputField1 
                        defaultValue={userProfile.phoneNumber}
                        onChange={(e) => setUserProfile({ ...userProfile, phoneNumber: e.target.value })}/>
                </FormField>
                <FormField>
                    <FormLabel>Email Address:</FormLabel>
                    <InputField1 
                        defaultValue={userProfile.emailAddress}
                        onChange={(e) => setUserProfile({ ...userProfile, emailAddress: e.target.value })}/>
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
                    <InputField1 
                        defaultValue={userProfile.jobTitle}
                        onChange={(e) => setUserProfile({ ...userProfile, jobTitle: e.target.value })}
                        />
                </FormField>
                <FormField>
                    <FormLabel>Add Signature:</FormLabel>
                    <InputField1 height="90px" placeholder='Signature'/>
                </FormField>
                </div>
                <div>
                <Button type='submit' fontSize='16px' onClick={handleFormSubmit}>Save Changes</Button>
                </div>
      </Form>
    </div>
  );
}

