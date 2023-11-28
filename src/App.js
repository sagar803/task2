import './App.css';
import { Main } from './components/Main';
import { SideMenu } from './components/SideMenu';
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="App">
      {matches && <SideMenu />}
      <Main />
    </div>
  );
}

export default App;
