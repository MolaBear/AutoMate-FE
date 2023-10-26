import React from 'react';
import {
  Button,
  Card,
  Form,
  FormField,
  FormLabel,
  InputField1,
  RadioContainer,
  RadioInput,
  RadioLabel,
  UserRoleSelect,
} from '../../../Components/Styled Components/AppStyle';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddUser() {
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      fname: Yup.string().required('First name is required'),
      lname: Yup.string().required('Last name is required'),
    }),
    onSubmit: (values) => {
      // method to submit
      console.log('form values', values);
      AddUser(values);
    },
  });

  const API_URL = 'https://localhost:7184/api/User/AddUser';

  const AddUser = async (values) => {
    const { fname, lname, empID, pass, userID, phone, email, race, jobTitle } =
      values;
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
        alert('User successfully added');
        // Clear the form fields after successful submission
        // call formik to reset values
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
        <Form onSubmit={formik.handleSubmit}>
          {/* <ToggleSwitch /> */}
          <div className="column">
            <FormField>
              <FormLabel>First Name:</FormLabel>
              <InputField1
                placeholder="First Name"
                value={formik.values.fname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="fname"
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div>
                  <span className="text-danger">{formik.errors.fname}</span>
                </div>
              ) : null}
            </FormField>
            <FormField>
              <FormLabel>Last Name:</FormLabel>
              <InputField1
                placeholder="Last Name"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="lname"
              />
              {formik.touched.lname && formik.errors.lname ? (
                <div>
                  <span className="text-danger">{formik.errors.lname}</span>
                </div>
              ) : null}
            </FormField>
            <FormField>
              <FormLabel>Employee Code:</FormLabel>
              <InputField1
                placeholder="Employee Code"
                value={formik.values.empID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="empID"
              />
              {formik.touched.empID && formik.errors.empID ? (
                <div>
                  <span className="text-danger">{formik.errors.empID}</span>
                </div>
              ) : null}
            </FormField>
            <FormField>
              <FormLabel>Password:</FormLabel>
              <InputField1
                placeholder="Default Password"
                value={formik.values.pass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="pass"
              />
              {formik.touched.pass && formik.errors.pass ? (
                <div>
                  <span className="text-danger">{formik.errors.pass}</span>
                </div>
              ) : null}
            </FormField>
            <FormField>
              <FormLabel>ID/Passport:</FormLabel>
              <InputField1
                placeholder="ID/Passport"
                value={formik.values.userID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="userID"
              />
              {formik.touched.userID && formik.errors.userID ? (
                <div>
                  <span className="text-danger">{formik.errors.userID}</span>
                </div>
              ) : null}
            </FormField>
          </div>
          <div className="column">
            <FormField>
              <FormLabel>Phone Number:</FormLabel>
              <InputField1
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="phone"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div>
                  <span className="text-danger">{formik.errors.phone}</span>
                </div>
              ) : null}
            </FormField>
            <FormField>
              <FormLabel>Email Address:</FormLabel>
              <InputField1
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div>
                  <span className="text-danger">{formik.errors.email}</span>
                </div>
              ) : null}
            </FormField>
            <FormField>
              <FormLabel>Race:</FormLabel>
              <UserRoleSelect
                placeholder="User Role"
                value={formik.values.race}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="race">
                <option hidden={true}>Select Race</option>
                <option>African</option>
                <option>Asian</option>
                <option>Indian</option>
                <option>White</option>
              </UserRoleSelect>
              {formik.touched.race && formik.errors.race ? (
                <div>
                  <span className="text-danger">{formik.errors.race}</span>
                </div>
              ) : null}
              <RadioContainer>
                <FormLabel>Gender:</FormLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="gender"
                    id="gender"
                    value="male"
                    checked={formik.values.gender === 'male'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  Male
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="gender"
                    id="gender"
                    value="female"
                    checked={formik.values.gender === 'female'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  Female
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="gender"
                    id="gender"
                    value="other"
                    checked={formik.values.gender === 'other'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  Other
                </RadioLabel>
              </RadioContainer>
              {formik.touched.gender && formik.errors.gender ? (
                <div>
                  <span className="text-danger">{formik.errors.gender}</span>
                </div>
              ) : null}
            </FormField>
            <FormField>
              <FormLabel>Job Title:</FormLabel>
              <InputField1
                placeholder="Job Title"
                id="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.jobTitle && formik.errors.jobTitle ? (
                <div>
                  <span className="text-danger">{formik.errors.jobTitle}</span>
                </div>
              ) : null}
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
