import { useEffect, useState } from 'react';
import { User, fetchUsers } from '../../../Services/data/userApi';
import React from 'react';
import { SessionsTable, THead, TableCell, TableContainer, TableHeader, TableRow } from '../../../Components/Styled Components/AppStyle';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Avatar } from '../../../Components/Avatar';
import PopUp from '../../../Components/Popup';
import SignRegister from './SignLogic';

const  Table = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  // Filter users based on the search query
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });  

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const signRegisterClick = () => {
    setPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setPopUpOpen(false);
  };

  return (
      <TableContainer>
         <SessionsTable>
         <THead>
           <tr>
             <TableHeader colSpan={6} id="table-heading">  <h2>Sessions</h2> </TableHeader>
           </tr>
           <tr>
             <TableHeader>Avatar</TableHeader>
             <TableHeader>
             <div className="p-4">
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for Sessions"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                </div>
              </div>
             </TableHeader>
             <TableHeader>DATE</TableHeader>
             <TableHeader>START</TableHeader>
             <TableHeader>END</TableHeader>
             <TableHeader>Sign register</TableHeader>
           </tr>
         </THead>
         <tbody>
         {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
             <TableRow key={index}>
               <TableCell>
                <Avatar
                imgSrc = {user.picture.thumbnail}
                altText ={`${user.name.first} ${user.name.last}`}
                trainerName = {`${user.name.first}`}
                trainerEmail ={`${user.email}`}
                trainerPhone ={`${user.phone}`}
                />
               </TableCell>
               <TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>
               <TableCell>{user.registered.date}</TableCell>
               <TableCell>{user.dob.age}</TableCell>
               <TableCell>{user.registered.age}</TableCell>
               <TableCell>
                   <button 
                      className='action-button' 
                      onClick={signRegisterClick}
                   >
                     Sign Here
                   </button>
                   <PopUp isOpen={isPopUpOpen} onClose={handleClosePopUp}>
                    <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                      <button onClick={handleClosePopUp}>
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                      </button>
                    </div>
                    <SignRegister/>
                  </PopUp>
              
               </TableCell>
             </TableRow>
           ))
           ) : (
            <tr>
              <TableCell colSpan={6}>No matching sessions found.</TableCell>
            </tr>
          )}
         </tbody>
         </SessionsTable>
    </TableContainer>
  );
};

export default Table;
