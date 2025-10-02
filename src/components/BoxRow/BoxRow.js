import React, { useState, useImperativeHandle, forwardRef } from 'react';
import CharacterBox from '../CharacterBox/CharacterBox';

const BoxRow = forwardRef(({ count }, ref) => {
  const [values, setValues] = useState(Array(count).fill(''));

  useImperativeHandle(ref, () => ({
    getValue: () => values.join(''),
  }));

  const handleChange = (idx, char) => {
    setValues((prev) => {
      const next = [...prev];
      next[idx] = char;
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {values.map((val, idx) => (
        <CharacterBox key={idx} value={val} onChange={(char) => handleChange(idx, char)} />
      ))}
    </div>
  );
});

export default BoxRow;
