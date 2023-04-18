import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendorhome from "./components/Vendor/Vendorhome";
import Userhome from "./components/User/Userhome";
import Vendorreg from "./components/Vendor/Vendorreg";
import Userreg from "./components/User/Userreg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vendorhome />} />
          <Route path="/User" element={<Userhome/>}/>
          <Route path="/createvendoraccount" element={<Vendorreg/>}/>
          <Route path="/createuseraccount" element={<Userreg/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
