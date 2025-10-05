import React, { useRef, useImperativeHandle, forwardRef, useMemo } from 'react';
import BoxRow from '../BoxRow/BoxRow';

const ColumnMethodCalculation = forwardRef(({ rowCount = 3, boxCount = 3 }, ref) => {
  const rowRefs = useMemo(
    () => Array.from({ length: rowCount }, () => React.createRef()),
    [rowCount]
  );

  useImperativeHandle(ref, () => ({
    getLastRowValue: () => {
      const lastRef = rowRefs[rowRefs.length - 1];
      return lastRef.current ? lastRef.current.getValue() : '';
    },
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {rowRefs.map((rowRef, idx) => (
        <BoxRow key={idx} count={boxCount} ref={rowRef} />
      ))}
    </div>
  );
});

export default ColumnMethodCalculation;
