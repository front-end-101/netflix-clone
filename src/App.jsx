import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/player" element={<Player/>}/>
      </Routes>
    </>
  );
}

export default App;
