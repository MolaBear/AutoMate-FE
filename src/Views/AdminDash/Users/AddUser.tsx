import React, { useState } from 'react';
import { Button, Card, Form, FormField, FormLabel, InputField1, RadioContainer, RadioInput, RadioLabel, UserRoleSelect } from '../../../Components/Styled Components/AppStyle';
import ToggleSwitch from '../../../Components/Styled Components/ToggleSwitch';
import axios from 'axios';

export default function AddUser() {
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

  const API_URL = 'https://localhost:7184/api/User/AddUser';

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  const AddUser = async () => {
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
      // const { isSuccess, error } = response.data;
      const isSuccess = true;
      const error = false;

      if (isSuccess) {
        alert('User successfully added');
        // Clear the form fields after successful submission
        setFormData({
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
      } else {
        alert(error);
      }
    } catch (e) {
      console.error('Error:', e);
    }
  };

  return (
    <div style={{ marginLeft: '250px' }}>
      <Card>
        <h2>Add a User</h2>
        <Form>
          {/* <ToggleSwitch /> */}
          <div className="column">
            <FormField>
              <FormLabel>First Name:</FormLabel>
              <InputField1
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
              />
            </FormField>
            <FormField>
              <FormLabel>Last Name:</FormLabel>
              <InputField1
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
              />
            </FormField>
            <FormField>
              <FormLabel>Employee Code:</FormLabel>
              <InputField1
                placeholder="Employee Code"
                value={empID}
                onChange={(e) => setFormData({ ...formData, empID: e.target.value })}
              />
            </FormField>
            <FormField>
              <FormLabel>Password:</FormLabel>
              <InputField1
                placeholder="Default Password"
                value={pass}
                onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
              />
            </FormField>
            <FormField>
              <FormLabel>ID/Passport:</FormLabel>
              <InputField1
                placeholder="ID/Passport"
                value={userID}
                onChange={(e) => setFormData({ ...formData, userID: e.target.value })}
              />
            </FormField>
          </div>
          <div className="column">
            <FormField>
              <FormLabel>Phone Number:</FormLabel>
              <InputField1
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </FormField>
            <FormField>
              <FormLabel>Email Address:</FormLabel>
              <InputField1
                placeholder="Email Address"
                value={email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </FormField>
            <FormField>
              <FormLabel>Race:</FormLabel>
              <UserRoleSelect
                placeholder="User Role"
                value={race}
                onChange={(e) => setFormData({ ...formData, race: e.target.value })}
              >
                <option hidden={true}>Select Race</option>
                <option>African</option>
                <option>Asian</option>
                <option>Indian</option>
                <option>White</option>
              </UserRoleSelect>
              <RadioContainer>
                <FormLabel>Gender:</FormLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                  />
                  Male
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                  />
                  Female
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === 'other'}
                    onChange={handleGenderChange}
                  />
                  Other
                </RadioLabel>
              </RadioContainer>
            </FormField>
            <FormField>
              <FormLabel>Job Title:</FormLabel>
              <InputField1
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              />
            </FormField>
          </div>
          <div style={{ margin: 'auto' }}>
            <Button fontSize="16px" onClick={AddUser}>
              Create new user
            </Button>
          </div>
        </Form>

      </Card>
    </div>
  );
}


// form.getTextField(fieldNames[22]).setText("Mpho")
//       form.getTextField(fieldNames[23]).setText("Mola")
//       form.getTextField(fieldNames[24]).setText("BT0439")
//       form.getTextField(fieldNames[25]).setText("9103275486288")
//       form.getTextField(fieldNames[26]).setText("BET")
//       form.getTextField(fieldNames[27]).setText("JHB")
//       form.getTextField(fieldNames[28]).setText("Senior Grad")
//       form.getTextField(fieldNames[29]).setText("A")
//       form.getTextField(fieldNames[30]).setText("M")
//       form.getTextField(fieldNames[31]).setText("No")
//       form.getTextField(fieldNames[33]).setText("-")
//       form.getTextField(fieldNames[34]).setText("-")