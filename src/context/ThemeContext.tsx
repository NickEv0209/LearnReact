import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const themeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
})

interface ThemeProviderProps {
  children: React.ReactNode;
}

type ThemeType = 'light' | 'dark';

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export function UseTheme() {
  const context = useContext(themeContext);
  return context;
}
