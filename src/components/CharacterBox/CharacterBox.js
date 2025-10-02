import React, { useState } from 'react';

const boxStyle = {
  width: '48px',
  height: '48px',
  display: 'inline-block',
  textAlign: 'center',
  fontSize: '2rem',
  border: '2px solid #333',
  borderRadius: '8px',
  outline: 'none',
  boxSizing: 'border-box',
};

function CharacterBox({ value, onChange }) {
  const handleChange = (e) => {
    const char = e.target.value;
    if (char.length <= 1) {
      onChange(char);
    }
  };

  return (
    <input
      type="text"
      maxLength={1}
      value={value}
      onChange={handleChange}
      style={boxStyle}
      aria-label="Character input box"
    />
  );
}

export default CharacterBox;
