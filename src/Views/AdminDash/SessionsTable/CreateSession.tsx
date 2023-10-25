import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import { AddButton, Button, DescriptionSesction, InputField1, Label1, RemoveButton, SessionName, SessionsCard, SessionsTable, THead, TableContainer, TableHeader } from '../../../Components/Styled Components/AppStyle';
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { getUserId } from '../../../Services/data/jwtToken';

interface UserOption {
  label: string;
  userId: string;
  firstName: string;
  lastName: string;
  employeeNumber: string;
}

interface UsersInSession {
  tableId: number;
  firstName: string;
  lastName: string;
  employeeCode: string;
  userId: string;
}

interface FormData {
  trainerId: number;
  sessionName: string;
  sessionDate: string;
  sessionDescription: String;
  sessionType: true,
  startTime: string;
  endTime: string;
  attendees: string[]; // Change the type to an array of strings
}

const CreateSession: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
          trainerId: getUserId()as number,
          sessionName: '',
          sessionDescription: '',
          sessionType: true,
          sessionDate: '',
          startTime: '',
          endTime: '',
          attendees: []
  });
  const [users, setUsers] = useState<UsersInSession[]>([]);
  const [myOptions, setMyOptions] = useState<UserOption[]>([]); // Specify the type of myOptions
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = () => {
    // Use Axios to make the API request
    axios.get('https://localhost:7184/api/User/GetAllUsers')
      .then((response) => {
        const res = response.data;

        const options = res.map((item) => ({
          label: `${item.firstName} ${item.lastName}`,
          userId: item.userId,
          firstName: item.firstName,
          lastName: item.lastName,
          employeeNumber: item.employeeNumber,
        }));
        setMyOptions(options);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleInputChange = (_, newValue) => {
    setSearchValue(newValue);
  };

  const handleAddUser = () => {
    if (searchValue) {
      const selectedUserData = myOptions.find((option) => option.label === searchValue);

      if (selectedUserData) {
        const { userId, firstName, lastName, employeeNumber } = selectedUserData;

        const newUser: UsersInSession = {
          tableId: users.length + 1,
          firstName: firstName,
          lastName: lastName,
          employeeCode: employeeNumber,
          userId: userId,
        };

        setUsers([...users, newUser]);

        setFormData({
          ...formData,
          attendees: [...formData.attendees, newUser.userId],
        });
      }
    }
  };

  const handleRemoveUser = (userId) => {
    const updatedRows = users.filter((user) => user.userId !== userId);
    setUsers(updatedRows);
  };

  const handleAddSession = async (e) => {
    e.preventDefault()
    try {
      debugger
      const response = await axios.post('https://localhost:7184/api/Session/CreateSession', formData)
      const {status} = response.data.message;
      console.log(status)
      if (status === 200) {
        alert('Session successfully Created');
        // Clear the form fields after successful submission
        setFormData({
          trainerId: 0,
          sessionName: '',
          sessionDescription: '',
          sessionType: true,
          sessionDate: '',
          startTime: '',
          endTime: '',
          attendees: []
        });
      } else {
        alert('Haha try again');
      }
    } catch (e) {
      console.error('Error:', e);
    }
  };

  return (
    <div style={{ marginLeft: '250px' }}>
      <SessionsCard>
        <h2>Create Session</h2>
        <form>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
            {/* Session name input field */}
            <SessionName
              placeholder="Session Name"
              value={formData.sessionName}
              onChange={(e) => setFormData({ ...formData, sessionName: e.target.value })}
            />
            </div>
            <div style={{ display: 'flex' }}>
              {/* Autocomplete for adding users */}
              <Autocomplete
                style={{ width: 300}}
                freeSolo
                autoComplete
                autoHighlight
                options={myOptions}
                value={searchValue}
                onInputChange={handleInputChange}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" size="small" label="Search Trainee" color="secondary" style={{paddingRight: "15px"}}/>
                )}
              />
              <AddButton type="button" onClick={handleAddUser}>
                Add Trainee &nbsp;
                <PlusCircleIcon className="h-6 w-6 text-white-500" />
              </AddButton>
            </div>
          </div>
  
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Session date input field */}
            <div>
              <Label1>Date:</Label1>
              <InputField1
                width="100%"
                fontSize="15px"
                type="date"
                value={formData.sessionDate}
                onChange={(e) => setFormData({ ...formData, sessionDate: e.target.value })}
              />
            </div>
  
            <div style={{ display: 'flex' }}>
              {/* Start time input field */}
              <Label1>Start:</Label1>
              <InputField1
                width="100%"
                fontSize="15px"
                type="date"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              />
  
              {/* End time input field */}
              <Label1 style={{ marginLeft: '20px' }}>End:</Label1>
              <InputField1
                width="100%"
                fontSize="15px"
                type="date"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              />
            </div>
          </div>
  
          <br/>
  
          {/* Table displaying added users */}
          <TableContainer margin="0px" maxHeight="20em">
            <SessionsTable>
              {/* Table headers */}
              <THead>
                <TableHeader>First Name</TableHeader>
                <TableHeader>Last Name</TableHeader>
                <TableHeader>Employee Code</TableHeader>
                <TableHeader>Branch</TableHeader>
                <TableHeader>ID/Passport</TableHeader>
                <TableHeader>Phone Number</TableHeader>
                <TableHeader>Remove</TableHeader>
              </THead>
  
              {/* Render added users */}
              {users.map((user, index) => (
                <tr key={index} id={user.userId}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.employeeCode}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <RemoveButton onClick={() => handleRemoveUser(user.userId)}>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TrashIcon className="h-6 w-6 text-gray-500 hover:text-purple-500 cursor-pointer" />
                      </div>
                    </RemoveButton>
                  </td>
                </tr>
              ))}
            </SessionsTable>
          </TableContainer>
  
          <DescriptionSesction
                onChange={(e) => setFormData({ ...formData, sessionDescription: e.target.value })}
          >
            
          </DescriptionSesction>
  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px' }}>
            {/* Button to save changes (calls handleAddSession) */}
            <Button type='button' onClick={handleAddSession}>Create Session</Button>
          </div>
        </form>
      </SessionsCard>
    </div>
  );
  
};

export default CreateSession;