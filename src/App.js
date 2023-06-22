import logo from './logo.svg';
import './App.css';
import UseEffect1 from './hooks/UseEffect/UseEffect1';
import UseEffect2 from './hooks/UseEffect/UseEffect2';
import FetchApi from './hooks/FetchApi';
import UseRef from './hooks/UseRef';
import UseReducer from './hooks/UseReducer';
import ComA from './hooks/useContext/ComA';
import UseLocation from './hooks/UseLocation';
import { BrowserRouter } from 'react-router-dom';
import ReactToastify from './hooks/ReactToastify';

function App() {
  return (
    <div className="App">
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      {/* <FetchApi/> */}
      {/* <UseRef/> */}
      {/* <UseReducer/> */}
     {/* <ComA/> */}
     {/* <BrowserRouter>
      <UseLocation/>
     </BrowserRouter> */}
     <ReactToastify/>


    </div>
  );
}

export default App;
