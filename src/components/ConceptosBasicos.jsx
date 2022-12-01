import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";

const Home = () => {
    return(
        <>
        <h3>Home</h3>
        <p>Bienvenid@s al tema de las Rutas en React</p>
        </>
    )
}

/*const About = () => {
    return(
        <>
        <Acerca/>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem deleniti facilis fuga ipsum quaerat laudantium architecto earum ullam natus tempore fugit, velit impedit non. Numquam molestias placeat omnis vel?</p>
        </>
    )
}

const Contact = () => {
    return(
        <>
        <Contacto/>
        <h3>Contacto</h3>
        <p>Contenido de contacto</p>
        </>
    )
}*/


const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/acerca" element={<Acerca/>}/>
          <Route path="/contacto" element={<Contacto/>} />

        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
