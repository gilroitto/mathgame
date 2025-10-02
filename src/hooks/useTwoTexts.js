import { useState } from 'react';

export function useTwoTexts() {
  const [texts] = useState(['First text goes here.', 'Second text goes here.']);
  return texts;
}
