import Search from './components/Search';
import './App.css';
import { useContext } from 'react';

const fetchUserData =  useContext('fetchUserData');


function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
    <fetchUserData.provider>
      <Search />
    </fetchUserData.provider>
    </div>
  );
}

export default App;

