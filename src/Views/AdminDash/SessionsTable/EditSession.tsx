import React, { useEffect, useState } from 'react'
import { AddButton, AddUserInputField, Button, CancelSessionButton, DescriptionSesction, InputField1, Label1, RemoveButton, SessionName, SessionTableCell, SessionsTable, THead, TableContainer, TableHeader, TableRow } from '../../../Components/Styled Components/AppStyle'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { DatePicker, Space } from 'antd';
import { User, fetchUsers } from '../../../Services/data/userApi';


const EditSessionForm = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
      fetchUsers()
        .then((response) => setUsers(response.data.results))
        .catch((error) => console.error(error));
    }, []);
      
    const handleAddUser = () => {
      const newResult: User = {
        gender: '',
        name: {
          title: '',
          first: '',
          last: '',
        },
        location: {
          street: {
            number: 0,
            name: '',
          },
          city: '',
          state: '',
          country: '',
          postcode: 0,
          coordinates: {
            latitude: '',
            longitude: '',
          },
          timezone: {
            offset: '',
            description: '',
          },
        },
        email: '',
        login: {
          uuid: '',
          username: '',
          password: '',
          salt: '',
          md5: '',
          sha1: '',
          sha256: '',
        },
        dob: {
          date: '',
          age: 0,
        },
        registered: {
          date: '',
          age: 0,
        },
        phone: '',
        cell: '',
        id: {
          name: '',
          value: '',
        },
        picture: {
          large: '',
          medium: '',
          thumbnail: '',
        },
        nat: '',
      };
    
        setUsers([...users, newResult]);
    };
  
    const handleRemoveUser = (userId) => {
      const updatedRows = users.filter((user) => user.id.value !== userId);
      setUsers(updatedRows);
    };
  
    const handleCancelSession = () => {
      console.log("session cancelled");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData)
      };

  return (
    <form onSubmit={handleSubmit}  style={{ width: '100%'}}>
        <h2>Edit Session</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SessionName placeholder={'Session Name'}></SessionName>
          <CancelSessionButton onClick={handleCancelSession}>Cancel Session</CancelSessionButton>
        </div>
        <br/>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <Label1>Date:</Label1><br/>
                    <DatePicker/>
                </div>
                <div>
                    <Label1>Start:</Label1>
                    <DatePicker picker='time'/> 
                    <Label1>End:</Label1>
                    <DatePicker picker='time'/>
                </div>
            </div>
        <br/>
        <br/>
        <TableContainer margin='0px' maxHeight='20em'>
            <SessionsTable>
                <THead>
                  <TableHeader>First Name</TableHeader>
                  <TableHeader>Last Name</TableHeader>
                  <TableHeader>Employee Code</TableHeader>
                  <TableHeader>Branch</TableHeader>
                  <TableHeader>ID/Passport</TableHeader>
                  <TableHeader>Phone Number</TableHeader>
                  <TableHeader>Remove</TableHeader>
                </THead>
                {users.map((user, index) => (
                  user.name.first !== '' ? (
                    <TableRow key={index} id={user.id.value}>
                      <SessionTableCell>{user.name.first}</SessionTableCell>
                      <SessionTableCell>{user.name.last}</SessionTableCell>
                      <SessionTableCell>{user.registered.age}</SessionTableCell>
                      <SessionTableCell>{user.location.city}</SessionTableCell>
                      <SessionTableCell>{user.id.value}</SessionTableCell>
                      <SessionTableCell>{user.phone}</SessionTableCell>
                      <SessionTableCell>
                        <RemoveButton onClick={() => handleRemoveUser(user.id.value)}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TrashIcon 
                                    className="h-6 w-6 text-gray-500 hover:text-purple-500 cursor-pointer"  />
                            </div>
                          </RemoveButton>
                      </SessionTableCell>
                    </TableRow>):(
                        <TableRow key={index} id={user.id.value + 1}>
                        <SessionTableCell>
                            <AddUserInputField value={user.name.first}></AddUserInputField>
                        </SessionTableCell>
                        <SessionTableCell>
                            <AddUserInputField value={user.name.last}></AddUserInputField>
                        </SessionTableCell>
                        <SessionTableCell>
                            <AddUserInputField value={user.registered.age}></AddUserInputField>
                        </SessionTableCell>
                        <SessionTableCell></SessionTableCell>
                        <SessionTableCell></SessionTableCell>
                        <SessionTableCell></SessionTableCell>
                        <SessionTableCell>
                          <RemoveButton onClick={() => handleRemoveUser(user.id.value)}>
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                  <TrashIcon 
                                      className="h-6 w-6 text-gray-500 hover:text-purple-500 cursor-pointer"  />
                              </div>
                            </RemoveButton>
                        </SessionTableCell>
                        </TableRow>
                      
                    )
                  ))}
                <TableRow>
                    <SessionTableCell>
                        <AddButton onClick={handleAddUser}>
                          Add User 
                          <PlusCircleIcon className="h-6 w-6 text-gray-500" />
                        </AddButton>
                    </SessionTableCell>
                      <SessionTableCell>
                      </SessionTableCell>
                      <SessionTableCell>
                      </SessionTableCell>
                    <SessionTableCell></SessionTableCell>
                    <SessionTableCell></SessionTableCell>
                    <SessionTableCell></SessionTableCell>
                    <SessionTableCell></SessionTableCell>
                </TableRow>
            </SessionsTable>
        </TableContainer>
        <DescriptionSesction>

        </DescriptionSesction>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px'}}>
        <Button type="submit">Save Changes</Button>
        </div>
    </form>
  )
}

export default EditSessionForm