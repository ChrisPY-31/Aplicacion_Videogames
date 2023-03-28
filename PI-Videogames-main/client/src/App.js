import "./App.css";
import { Route , Routes } from 'react-router-dom'
import {LandingPage} from './componentes/LandingPage/LandingPage'
import { Home } from "./componentes/Home/Home";
import {DetailPage} from './componentes/DetailPage/DetailPage'
import {FormPage} from './componentes/FormPage/FormPage'
import { Navigate } from "./componentes/Navigate/Navigate";
import { useState } from "react";


function App() {
  const [isNavigate, setisNavigate] = useState(false)
  const [image , setImage ] = useState('')
  return (
    <div className="App">
      {isNavigate && <Navigate/>}
      <Routes>
        <Route path="/" element={<LandingPage setisNavigate={setisNavigate}/>}/>
        <Route path="/home" element={<Home setImage={setImage} />}/>
        <Route path='/detail/:id' element={<DetailPage imageInfo={image}/>}/>
        <Route path='/Form' element={<FormPage />}/>
      </Routes>
    </div>
  );
}

export default App;
