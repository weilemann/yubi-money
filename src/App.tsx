import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}