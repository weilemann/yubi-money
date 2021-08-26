import React, { createContext, useState } from 'react';

type PropsThemeContext = {
    onOff: boolean;
    setOnOff: React.Dispatch<React.SetStateAction<boolean>>;
}

type ThemeProviderProps = {
  children: JSX.Element[],
}

export const ThemeContext = createContext<PropsThemeContext>({
    onOff: false,
    setOnOff: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [onOff, setOnOff] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{onOff, setOnOff}}>
      {children}
    </ThemeContext.Provider>
  )
}