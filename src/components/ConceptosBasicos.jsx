import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";

/*const Inicio = () => {
    return(
        <>
        <h3>Home</h3>
        <p>Bienvenid@s al tema de las Rutas en React</p>
        </>
    )
}

const About = () => {
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
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario/:username" element={<Usuario/>} />
          {/* /: son parámetros que react dinámicamente podrá cambiar */}
          <Route path="*" element={<Error404 />} />
          {/* El error siempre va posicionado último por tema cascada */}
        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
