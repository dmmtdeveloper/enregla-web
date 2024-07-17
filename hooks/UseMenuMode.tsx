import { useState, useEffect } from 'react';

export const UseMenuMode = () => {
  const [enabled, setEnabled] = useState(false); // Assuming initial state is false
  
  useEffect(() => {
    const bodyClass = document.body.classList;
    if (enabled) {
      bodyClass.add('yourClassName'); // Replace 'yourClassName' with your actual class name for dark mode
    } else {
      bodyClass.remove('yourClassName');
    }
  }, [enabled]);
  
  return [enabled, setEnabled];
};

