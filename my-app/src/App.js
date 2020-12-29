import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Home from './Components/Pages/Home';
import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
