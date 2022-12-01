import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
    return(
        <>
        <h3>Home</h3>
        <p>Bienvenid@s al tema de las Rutas en React</p>
        </>
    )
}

const Acerca = () => {
    return(
        <>
        <h3>Acerca</h3>
        <p>Contenido de Acerca</p>
        </>
    )
}

const Contacto = () => {
    return(
        <>
        <h3>Contacto</h3>
        <p>Contenido de contacto</p>
        </>
    )
}


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
