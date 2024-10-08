import { useState } from "react";

export const useCount = () => {
  const [value, setValue] = useState(0);
  
  const decrement = () =>  setValue(value - 1 > 0 ? value - 1 : 0 );
  const increment = () =>  setValue(value + 1 < 5 ? value + 1 : 5 );
  
  return {value, increment, decrement,  };
};