import React, { useState } from 'react';

const PopUpWatch = ({ onSetTime, onSetEvent }) => {
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');

  const handleSetEvent = () => {
    // Combine selected hour and minute into a time string
    const selectedTime = `${selectedHour}:${selectedMinute}`;
    onSetTime(selectedTime); // Emit selected time back to parent component
    onSetEvent(); // Call the event creation function in the parent component
  };

  return (
    <div className="popup-watch">
      <h2>Select Time</h2>
      <div className="time-inputs">
        <input
          type="number"
          min="0"
          max="23"
          placeholder="Hour"
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
        />
        <span>:</span>
        <input
          type="number"
          min="0"
          max="59"
          placeholder="Minute"
          value={selectedMinute}
          onChange={(e) => setSelectedMinute(e.target.value)}
        />
      </div>
      <button onClick={handleSetEvent}>Set Event</button>
    </div>
  );
};

export default PopUpWatch;
