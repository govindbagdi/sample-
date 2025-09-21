import logo from './logo.svg';
import './App.css';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Routing></Routing>
     </BrowserRouter>
    </div>
  );
}

export default App;
