import React, { useState, useEffect } from 'react';
import { AdminUsersView, Card, SessionsTable, StyledCheckbox, StyledSelect } from '../../../Components/Styled Components/AppStyle';
import SearchQuery from '../../../Components/SearchQuery';
import { TableCell } from '@mui/material';
import PopUp from '../../../Components/Popup';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {UsersInformation} from './UsersInformation';

interface UserItem {
  id: number;
  name: string;
  lastName: string;
  online: boolean;
  isActive: boolean;
  role: string;
}

const dummyUsers: UserItem[] = [
  { id: 1, name: 'John', lastName: 'Doe', online: true, isActive: true, role: 'Trainee' },
  { id: 2, name: 'Jane', lastName: 'Smith', online: false, isActive: false, role: 'Admin' },
  { id: 3, name: 'Bob', lastName: 'Johnson', online: true, isActive: true, role: 'Trainer' },
];

const EditUsersProfile: React.FC = () => {
  const [users, setUsers] = useState<UserItem[]>(dummyUsers);
  const [filteredUsers, setFilteredUsers] = useState<UserItem[]>(dummyUsers);
  const [searchDate, setSearchDate] = useState('');
  const [isPopUpOpen, setPopUpOpen] = useState(false);


  const API_URL = 'https://localhost:7184/api/User/GetUserInformation';

  const handleSearch = (searchQuery: string) => {
    // Filter users based on the search query
    const filtered = users.filter((user) =>
      `${user.name} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

    const handlePencilIconClick = () => {
        setPopUpOpen(true);
    };
    
    const handleClosePopUp = () => {
        setPopUpOpen(false);
    };

  return (
    <div style={{ padding: '10px 0px 0px 260px' }}>
      <Card>
        <div className="online-users">
          <h2>Edit user's information</h2>
          <p> Search through all the users in order to find, change and/or edit a user's information</p> <br/>
          <SearchQuery onSearch={handleSearch} />

          <SessionsTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <TableCell>Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell className={
                    // isOnline 
                    true
                     ? 'Online' : 'Offline'}>
                    {/* {user.online ? 'Online' : 'Offline'} */}
                  </TableCell>
                  <TableCell>
                  <button
                    className="h-6 w-6 text-gray-500 hover:text-purple-500 cursor-pointer" 
                    onClick={handlePencilIconClick}
                    style={{width: "fit-content"}}
                    > 
                        Edit user details</button>
                        <PopUp isOpen={isPopUpOpen} onClose={handleClosePopUp}>
                          <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <button onClick={handleClosePopUp}>
                              <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                          </div>
                          <UsersInformation/>
                        </PopUp>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </SessionsTable>
        </div>
      </Card>
    </div>
  );
};

export default EditUsersProfile;