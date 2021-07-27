import React, { createContext, useState } from 'react';

type PropsThemeContext = {
    onOff: boolean;
    setOnOff: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<PropsThemeContext>({
    onOff: false,
    setOnOff: () => {},
});

export function ThemeProvider({ children }: any) {
  const [onOff, setOnOff] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{onOff, setOnOff}}>
      {children}
    </ThemeContext.Provider>
  )
}