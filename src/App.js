import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {UserContext} from './UserContext';
import { useCookies } from 'react-cookie';



function App() {
  const [cookies] = useCookies(['user'])
  return (
  <>
    <div>Navbar Here</div>
    <UserContext.Provider value={cookies.user}>      
        <div className="App">
            <Login />
        </div>
    </UserContext.Provider>
    <div>Footer Here</div>
    
  </>
  );
}

export default App;

