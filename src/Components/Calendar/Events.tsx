// CalendarEvent.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

const EventWrapper = styled.div`
  background-color: rgb(159, 49, 255);
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
`;

const EditableEvent = ({ event, onUpdateEvent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newEventText, setNewEventText] = useState(event.text);

  const handleSave = () => {
    onUpdateEvent({ ...event, text: newEventText });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newEventText}
            onChange={(e) => setNewEventText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <EventWrapper onClick={() => setIsEditing(true)}>
          {event.text}
        </EventWrapper>
      )}
    </div>
  );
};

export default EditableEvent;
