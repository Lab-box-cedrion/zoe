import React, { Fragment, useState, useEffect } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "./Notas.css";

const Notas = () => {
  const [notas, guardarNotas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/graphic-data")
      .then(res=> res.json())
      .then(resJSON =>guardarNotas(resJSON))
      
  }, [])

  const [index, setIndex] = useState();

  const [escribiendo, setEscribiendo] = useState({
    notas: ""
  });

  console.log((notas[index] || []).id) 
  
  

  return (
    <Fragment>
      <Cabecera />

      <div className="container-primero">
        <input type="text" placeholder="Buscar" />
        <div className="item-primero">dd-mm-aa</div>
        <div className="item-primero">nombre</div>
      </div>
      <form>
        <div className="container-segundo">
          <div className="item-segundo">
            {notas.length !== 0
              ? notas.map((experimentos, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setIndex(index)}
                      className="nota"
                    >
                      <p>
                        {experimentos.experiment}-{experimentos.nombre}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          
          <textarea value={escribiendo.notas} onChange={(event)=>setEscribiendo({...escribiendo, notas: event.target.value})}>
          
            
            </textarea>
        </div>
        </form>
        <div className="container-tercero">
          <input type="submit" className="guardar-nota" value="Guardar"/>
        </div>
      
      <div className="container-tercero">
        <input
          type="submit"
          className="guardar-nota"
          value="Guardar"
          onClick={() => console.log("Nota guardada")}
        />
      </div>

      <Pie />
    </Fragment>
  );
};

export default Notas;
