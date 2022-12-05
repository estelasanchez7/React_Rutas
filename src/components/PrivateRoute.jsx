import { Navigate, Outlet } from "react-router-dom";

//Simular Autenticación
const PrivateRoute = ({ private: Private }) => {
  let auth;
  auth = true;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

/*
El componente <Outlet>
Este elemento es usado dentro del componente declarado en la ruta padre para renderizar sus elementos <Route> hijos. Esto permite a la interfaz anidada mostrar las rutas hijas cuando son renderizadas. Si la ruta seleccionada es la raíz, se renderizará la <Route index> hija. Si la ruta no está mapeada, se renderizará la <Route path='*'> hija.
 */
