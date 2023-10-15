import React, { Fragment, useState } from 'react'
import { Button, Form, FormField, FormLabel, InputField1, RadioContainer, RadioInput, RadioLabel, UserRoleSelect } from '../../../Components/Styled Components/AppStyle'
import axios from 'axios';

export const UsersInformation = () =>{
    const [formData, setFormData] = useState({
      fname: '',
      lname: '',
      empID: '',
      pass: '',
      userID: '',
      phone: '',
      email: '',
      race: '',
      gender: '',
      jobTitle: '',
    });
  
    const {
      fname,
      lname,
      empID,
      pass,
      userID,
      phone,
      email,
      race,
      gender,
      jobTitle,
    } = formData;
  
    const API_URL = 'https://localhost:7184/api/User/UpdateUser';
  
    const EditUser = async () => {
      try {
        const response = await axios.post(API_URL, {
          firstName: fname,
          lastName: lname,
          employeeNumber: empID,
          password: pass,
          identityNumber: userID,
          emailAddress: email,
          phoneNumber: phone,
          race: race,
          jobTitle: jobTitle,
        });
  
        const { isSuccess, error } = response.data;
  
        if (isSuccess) {
          alert('User details successfully changed');
        } else {
          alert(error);
        }
      } catch (e) {
        console.error('Error:', e);
      }
    };
  
    return (
      <div>
          <h2>Edit Users details</h2>
          <Form>
            <div>
              <FormField>
                <FormLabel>First Name:</FormLabel>
                <InputField1
                  placeholder="First Name"
                  width='35em'
                  value={fname}
                  onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                />
              </FormField>
              <FormField>
                <FormLabel>Last Name:</FormLabel>
                <InputField1
                  placeholder="Last Name"
                  width='35em'
                  value={lname}
                  onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                />
              </FormField>
              <FormField>
                <FormLabel>Employee Code:</FormLabel>
                <InputField1
                  placeholder="Employee Code"
                  width='35em'
                  value={empID}
                  onChange={(e) => setFormData({ ...formData, empID: e.target.value })}
                />
              </FormField>
              <FormField>
                <FormLabel>ID/Passport:</FormLabel>
                <InputField1
                  placeholder="ID/Passport"
                  width='35em'
                  value={userID}
                  onChange={(e) => setFormData({ ...formData, userID: e.target.value })}
                />
              </FormField>
              <FormField>
                <FormLabel>Phone Number:</FormLabel>
                <InputField1
                  placeholder="Phone Number"
                  width='35em'
                  value={phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </FormField>
              <FormField>
                <FormLabel>Email Address:</FormLabel>
                <InputField1
                  placeholder="Email Address"
                  width='35em'
                  value={email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </FormField>
            </div>
            <div style={{ textAlign: 'center'}}>
              <Button fontSize="16px" onClick={EditUser}>
                Save Changes
              </Button>
            </div>
          </Form>
  
      </div>
    );
  }
