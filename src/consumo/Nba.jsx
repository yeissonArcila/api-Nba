import'./estilo.css'
import axios from "axios";
import React, { useState, useEffect } from "react";

export const Nba = () => {
  const [consumo, setConsumo] = useState([]);
  const datos = async () => {
    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
    console.log(response)
    setConsumo(response.data.data);
  };

  useEffect(() => {
    datos();
  }, []);

  return (
    
      

    <div id='todo'>
      {consumo.map((mostrarDatos, index) => {
        return (
            <table class="table">
              <tr  className='card'>
                <th>ID: {mostrarDatos.id}</th>
                <th>Abbreviation: {mostrarDatos.abbreviation}</th>
                <th>City: {mostrarDatos.city} </th>
                <th>Conference: {mostrarDatos.conference} </th>
                <th>Division: {mostrarDatos.division}</th>
                <th>Full_name: {mostrarDatos.full_name}</th>
                <th>Name: {mostrarDatos.name}</th>
              </tr>
              <tr className='card'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
        );
      })}
    </div>
  );
};
export default Nba;
