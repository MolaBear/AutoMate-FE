import React, { useState } from 'react';
import { useTable, Column } from 'react-table';
import { Card, InputField1, SessionsTable, TableHeader } from '../../../../Components/Styled Components/AppStyle';
import PopUp from '../../../../Components/Popup';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SessionRegister from './Register';
// import { Router } from 'react-router-dom';

interface SessionData {
  session_name: string
  date: string;
  branch: string;
  // view: string;
  // Add more fields...
}

const sessionData: SessionData[] = [
  { session_name: 'Powerskills', date: '2023-08-01', branch: 'DBN'},
  { session_name: 'FICA', date: '2023-08-02', branch: 'JHB' },
  { session_name: 'Powerskills', date: '2023-08-03', branch: 'DBN'},
  
  // Add more data...
];

 const columns: Column<SessionData>[] = [
  { Header: 'SESSION NAME', accessor: 'session_name' },
   { Header: 'DATE', accessor: 'date' },
   { Header: 'BRANCH', accessor: 'branch' },
  //  { 
  //   Header: 'VIEW', 
  //   Cell: e =>
    
  //   <a href={e.value}> {e.value} </a>,
  //  accessor: 'view' }, 
   
 ]; 



const SessionHistoryTable: React.FC = () => {
  const [searchDate, setSearchDate] = useState('');
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: sessionData.filter((session) => {
      return(
      session.date.includes(searchDate)
    
    );
  }),
},

);

const handlePencilIconClick = () => {
  setPopUpOpen(true);
};

const handleClosePopUp = () => {
  setPopUpOpen(false);
};

  

  return (
    <div style={{marginLeft: '250px'}} >
      <Card>
        <h2>All My Sessions</h2>
          <InputField1
            width='18%'
            fontSize='15px'
            type="date"
            placeholder="Search by date..."
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            style={{margin: '10px', marginInline: "72%"}}
          />
          <SessionsTable {...getTableProps()} className="table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                <TableHeader></TableHeader>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                    <td>
                        <button
                            className="h-6 w-6 text-gray-500 hover:text-purple-500 cursor-pointer" 
                            onClick={handlePencilIconClick}
                            style={{width: "fit-content"}}
                        > View Session</button>
                        <PopUp isOpen={isPopUpOpen} onClose={handleClosePopUp}>
                          <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <button onClick={handleClosePopUp}>
                              <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                          </div>
                          <SessionRegister/>
                        </PopUp>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </SessionsTable>
      </Card>
    </div>
  );
};

export default SessionHistoryTable