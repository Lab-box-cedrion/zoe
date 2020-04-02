import React from "react";
import "./Pie.css";

const Pie = () => {

  const fecha = new Date().getFullYear();

  return(
    <div className="pie">
      <p>{fecha} | Cedrion &copy;</p>
    </div>

  )
}

export default Pie