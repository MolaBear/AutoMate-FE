
import React, { useState } from 'react';
import "../App.css";
import { useTable, Column } from 'react-table';
// import { Router } from 'react-router-dom';

interface SessionData {
  session_name: string
  date: string;
  branch: string;
  view: string;
  // Add more fields...
}

const sessionData: SessionData[] = [
  { session_name: 'Powerskills', date: '2023-08-01', branch: 'DBN', view:  'View Session'},
  { session_name: 'FICA', date: '2023-08-02', branch: 'JHB', view: 'View Session' },
  { session_name: 'Powerskills', date: '2023-08-03', branch: 'DBN', view: 'View Session' },
  
  // Add more data...
];

 const columns: Column<SessionData>[] = [
  { Header: 'SESSION NAME', accessor: 'session_name' },
   { Header: 'DATE', accessor: 'date' },
   { Header: 'BRANCH', accessor: 'branch' },
   { 
    Header: 'VIEW', 
    Cell: e =>
    
    <a href={e.value}> {e.value} </a>,
   accessor: 'view' }, 
   
 ]; 



const SessionHistoryTable: React.FC = () => {
  const [searchDate, setSearchDate] = useState('');

  
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

  

  return (
    <div className='session_body'>
    <h1>All My Sessions</h1>
      <input
        type="date"
        placeholder="Search by date..."
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
      />
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SessionHistoryTable




