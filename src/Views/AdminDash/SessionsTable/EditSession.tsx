import React from 'react'
import { Button, InputField1, Label1, SessionsTable, TableContainer, TableHeader, TableRow } from '../../../Components/Styled Components/AppStyle'
import { TableCell } from '@mui/material';
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const EditSessionForm = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData)
      };

  return (
    <form onSubmit={handleSubmit}  style={{ width: '180vh'}}>
        <h2>Edit Session</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Label1>Session Name</Label1>
            Cancel Session
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
        <TableContainer>
            <SessionsTable>
                <TableHeader>First Name</TableHeader>
                <TableHeader>Last Name</TableHeader>
                <TableHeader>Employee Code</TableHeader>
                <TableHeader>Branch</TableHeader>
                <TableHeader>ID/Passport</TableHeader>
                <TableHeader>Phone Number</TableHeader>
                <TableHeader>Remove</TableHeader>
                <TableRow>
                    <TableCell>Testing1</TableCell>
                    <TableCell>Testing1</TableCell>
                    <TableCell>Testing1</TableCell>
                    <TableCell>Testing1</TableCell>
                    <TableCell>Testing1</TableCell>
                    <TableCell>Testing1</TableCell>
                    <TableCell>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TrashIcon 
                                className="h-6 w-6 text-gray-500 hover:text-purple-500 cursor-pointer"  />
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                        Add User 
                        <PlusCircleIcon className="h-6 w-6 text-gray-500" />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </SessionsTable>
        </TableContainer>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px'}}>
        <Button type="submit">Save Changes</Button>
        </div>
    </form>
  )
}

export default EditSessionForm