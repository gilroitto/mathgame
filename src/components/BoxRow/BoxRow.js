import React, { useState, useImperativeHandle, forwardRef } from 'react';
import CharacterBox from '../CharacterBox/CharacterBox';

const BoxRow = forwardRef(({ count, characters='' }, ref) => {
  const [values, setValues] = useState(Array.from({ length: count }, (_, i) => 
    i < count - characters.length ? '' : characters[i - (count - characters.length)]
  ));

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
