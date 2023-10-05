import React from 'react'
import { Button, InputField1, Label1, SessionsTable, TableContainer, TableHeader, TableRow } from '../../../Components/Styled Components/AppStyle'
import { TableCell } from '@mui/material';
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { DatePicker, Space } from 'antd';

const AddUserToSession = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData)
      };

  return (
    <form onSubmit={handleSubmit}  style={{ width: '180vh'}}>
    </form>
  )
}

const DeleteUserFromSession = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData)
      };

  return (
    <form onSubmit={handleSubmit}  style={{ width: '180vh'}}>

    </form>
  )
}

export {AddUserToSession, DeleteUserFromSession}