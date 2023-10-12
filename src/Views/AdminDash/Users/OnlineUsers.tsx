import React, { useState, useEffect } from 'react';
import { AdminUsersView, Button, Card, SessionsTable, StyledCheckbox, StyledSelect } from '../../../Components/Styled Components/AppStyle';

interface UserItem {
  userId: number;
  firstName: string;
  lastName: string;
  enabled: boolean;
  roleId: number;
}

const API_URL = 'https://localhost:7184/api/User/GetAllUsers';

const OnlineUsersView: React.FC = () => {
  const [users, setUsers] = useState<UserItem[] | null>(null);
  const [editingUser, setEditingUser] = useState<number | null>(null);
  const [newRole, setNewRole] = useState<string | null>(null);
  const [inEditMode, setInEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json() as UserItem[];
          setUsers(data);
          // Start the interval for updating online status after fetching initial data
          const intervalId = setInterval(updateOnlineStatus, 5000);
          return () => {
            clearInterval(intervalId); // Clean up on unmount
          };
        } else {
          console.error('Failed to fetch data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      // Ensure that a value is returned even in error cases
      return undefined;
    };
  
    fetchData();
  }, []);
  

  const updateOnlineStatus = () => {
    if (users) {
      const updatedUsers = users.map((user) => ({
        ...user,
        enabled: user.enabled && Math.random() < 0.5,
      }));
      setUsers(updatedUsers);
    }
  };

  const handleToggleIsActive = (userId: number) => {
    setEditingUser(userId);
    setInEditMode(true);
  };

  const handleRoleChange = (userId: number, role: string) => {
    setEditingUser(userId);
    setNewRole(role);
    setInEditMode(true);
  };

  const handleSave = (userId: number) => {
    if (users !== null) {
      const updatedUsers = users.map((user) => {
        if (user.userId === userId) {
          return {
            ...user,
            enabled: editingUser === userId, // Toggle the enabled property based on edit mode
            roleId: roleOptions.indexOf(newRole || ''),
          };
        }
        return user;
      });
      setUsers(updatedUsers);
      setEditingUser(null);
      setNewRole(null);
      setInEditMode(false); // Exit edit mode after saving
    }
  };

  const roleOptions = ['User', 'Trainee', 'Trainer', 'Admin', 'User'];

  return (
    <div style={{ padding: '10px 0px 0px 260px' }}>
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
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users !== null ? (
                users.map((user) => (
                  <tr key={user.userId}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td className={user.enabled ? 'Online' : 'Offline'}>
                      {user.enabled ? 'Online' : 'Offline'}
                    </td>
                    <td>
                      {editingUser === user.userId ? (
                        <StyledCheckbox
                          type="checkbox"
                          checked={editingUser === user.userId} // Handle checkbox based on edit mode
                          onChange={() => handleToggleIsActive(user.userId)}
                        />
                      ) : (
                        user.enabled ? 'Active' : 'Inactive'
                      )}
                    </td>
                    <td>
                      {editingUser === user.userId ? (
                        <StyledSelect
                          value={newRole || roleOptions[user.roleId]}
                          onChange={(e) => setNewRole(e.target.value)}
                        >
                          {roleOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </StyledSelect>
                      ) : (
                        roleOptions[user.roleId]
                      )}
                    </td>
                    <td>
                      {editingUser === user.userId ? (
                        <Button onClick={() => handleSave(user.userId)}>Save</Button>
                      ) : (
                        <Button onClick={() => handleToggleIsActive(user.userId)}>Edit</Button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>Loading...</td>
                </tr>
              )}
            </tbody>
          </SessionsTable>
        </div>
      </Card>
    </div>
  );
};

export default OnlineUsersView;
