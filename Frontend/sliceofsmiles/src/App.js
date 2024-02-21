import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./componants/Login";
import Register from "./componants/Register";
import MouseParticles from 'react-mouse-particles'
import Dashbord from "./componants/Dashbord";

function App() {
  return (
    <div className="App">
      {/* <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} /> */}
      <Routes>
        <Route path="" element={<Dashbord></Dashbord>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
