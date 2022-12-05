import { Link, Outlet} from "react-router-dom";

const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Manejo del Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componentes</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default ReactTopics;
