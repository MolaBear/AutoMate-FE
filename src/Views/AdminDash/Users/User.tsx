// src/components/User.tsx
import React from 'react';

interface UserProps {
  user: {
    id: number;
    name: string;
    online: boolean;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className={`user ${user.online ? 'online' : 'offline'}`}>
      <span>{user.name}</span>
      {user.online ? <span className="status">Online</span> : null}
    </div>
  );
};

export default User;
