// src/components/OnlineUsersView.tsx
import React, { useState, useEffect } from 'react';
import './OnlineUsersView.css'; // Import the CSS file
import { AdminUsersView, Card, SessionsTable, StyledCheckbox, StyledSelect } from '../../../Components/Styled Components/AppStyle';

interface UserItem {
  id: number;
  name: string;
  lastName: string;
  online: boolean;
  isActive: boolean;
  role: string;
}

const dummyUsers: UserItem[] = [
  { id: 1, name: 'John', lastName: 'Doe', online: true, isActive: true, role: 'User' },
  { id: 2, name: 'Jane', lastName: 'Smith', online: false, isActive: false, role: 'Admin' },
  { id: 3, name: 'Bob', lastName: 'Johnson', online: true, isActive: true, role: 'User' },
];

const OnlineUsersView: React.FC = () => {
  const [users, setUsers] = useState<UserItem[]>(dummyUsers);

  useEffect(() => {
    const updateOnlineStatus = () => {
      // Simulate users going online and offline randomly if they are active
      const updatedUsers = users.map((user) => ({
        ...user,
        online: user.isActive && Math.random() < 0.5,
      }));
      setUsers(updatedUsers);
    };

    const intervalId = setInterval(updateOnlineStatus, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [users]);

  const handleToggleIsActive = (userId: number) => {
    // Toggle the isActive property for the selected user
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, isActive: !user.isActive, online: false } : user
    );
    setUsers(updatedUsers);
  };

  const handleRoleChange = (userId: number, newRole: string) => {
    // Update the role for the selected user
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  const roleOptions = ['User', 'Admin', 'Manager']; // Define your role options here

  return (
    <div style={{
      padding: '10px 0px 0px 260px'
  }}>
    <Card>
      <div className="online-users">
        <AdminUsersView>All Users</AdminUsersView>
        <SessionsTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Status</th>
              <th>isActive</th>
              <th>Enable</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td className={user.online ? 'Online' : 'Offline'}>{user.online ? 'Online' : 'Offline'}</td>
                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                <td >
                  <StyledCheckbox
                    type="checkbox"
                    checked={user.isActive}
                    onChange={() => handleToggleIsActive(user.id)}
                  />
                </td>
                <td>
                  <StyledSelect
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  >
                    {roleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </StyledSelect>
                </td>
              </tr>
            ))}
          </tbody>
        </SessionsTable>
      </div>
    </Card>
    </div>
  );
};

export default OnlineUsersView;
