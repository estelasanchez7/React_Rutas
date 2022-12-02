import { useNavigate, useLocation } from "react-router-dom";

const Productos = () => {
  /*let location = useLocation();
  console.log(location);*/

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  //console.log(query);


  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  //console.log(start, end)
 
  let navigate = useNavigate();

  const handlePrev = (e) => {
    navigate({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`})
    if(start > 0){

    }
  }
  const handleNext = (e) => {
    navigate({search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
  }

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Contenido de productos del <b>{start}</b> al <b>{end}</b> .
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
