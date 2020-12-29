import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Home from './Components/Layout/Forms/SearchForm';
import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme';
import Routes from './Routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
