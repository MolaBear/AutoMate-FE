import { useEffect, useState } from 'react';
import { UserSessions, fetchUserSession } from '../../../Services/data/userApi';
import React from 'react';
import { SessionsTable, THead, TableCell, TableContainer, TableHeader, TableRow } from '../../../Components/Styled Components/AppStyle';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PopUp from '../../../Components/Popup';
import SignRegister from './SignLogic';
import { getUserId } from '../../../Services/data/jwtToken';


const  Table = () => {
  const [session, setSession] = useState<UserSessions[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const userId = getUserId();

  useEffect(() => {
    fetchUserSession(userId)
      .then((response) => {
        if (response.data && response.data.message) {
          setSession(response.data.message);
        } else {
          console.error("No results found in the response data");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  
  const filteredUsers = session.filter((session) => {
    const sessionName = `${session.sessionName}`;
    return sessionName.toLowerCase().includes(searchQuery.toLowerCase());
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
            filteredUsers.map((session, index) => (
             <TableRow key={index}>
               <TableCell>
                {/* <Avatar
                imgSrc = {user.picture.thumbnail}
                altText ={`${session.trainerId} ${user.name.last}`}
                trainerName = {`${user.name.first}`}
                trainerEmail ={`${user.email}`}
                trainerPhone ={`${user.phone}`}
                /> */}
               </TableCell>
               <TableCell>
                  {`${session.sessionName} `}
                  {/* ${user.name.last} */}
                  
              </TableCell>
               <TableCell>{session.sessionDate}</TableCell>
               <TableCell>{session.startTime}</TableCell>
               <TableCell>{session.endTime}</TableCell>
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
