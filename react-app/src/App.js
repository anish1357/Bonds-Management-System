import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Trades from './components/Trades';
import Securities from './components/Securities';
import SecurityDetail from './components/SecurityDetail';
import TradeDetail from './components/TradeDetail';
import Tradeedit from './components/Tradeedit';
import About from './components/About';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  return (
    <>
    <>
      <BrowserRouter>
        <Navbar/>
        <Alert alert={alert} />
        
        <div className="container my-5">
          <Routes>
            <Route  path="/" element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path="/dashboard" element={<Securities showAlert={showAlert}/>}></Route>
            <Route exact path="/trades" element={<Trades showAlert={showAlert}/>}></Route>
            <Route exact path="/security/:id" element={<SecurityDetail/>} />
            <Route exact path="/trades/:id" element={<TradeDetail/>} />
            <Route exact path="/modify-trade/:id" element={<Tradeedit/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
    </>
  );
}

export default App;

//blah blah blah