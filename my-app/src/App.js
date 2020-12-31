import Header from './Components/Layout/Header/Header';
import Home from './Components/Layout/Forms/SearchForm/SearchForm';
import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme';
import Routes from './Routes/Routes';
import { Login } from './Components/Pages/Login';
    

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes />
      <Login />
    
      </div>
    </ThemeProvider>
  );
}

export default App;
