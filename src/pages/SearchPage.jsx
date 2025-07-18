import { useState, useEffect } from "react"
import Bar from "../components/Bar"
import { Card } from "../components/Card"

import { getProperties } from "../api/propierties"

export const SearchPage = ()=>{
  const [propierties, setPropierties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  
  // PEDIR DATOS DE LAS PROPIEDADES
  useEffect(() => {
    const datos = [
        {id:"4f823724-4c6e-4870-8289-ffbeb72b601c", title: "Casa de Eric y Maria", bathrooms: 4, bedrooms: 6, city: "El Saman", price: 6000, square_feet: 220 },
        {id:"2ee00d92-c0d6-408c-b50e-612886580357", title: "Casa de Alejandro", bathrooms: 4, bedrooms: 6, city: "Puerto la Cruz", price: 1500, square_feet: 75, status: "Alquiler"},
        {id:"0e8415f9-0e29-4057-a89f-e513874031aa", title: "Casa de Chuchu ", bathrooms: 4, bedrooms: 6, city: "Puerto la Cruz", price: 2000, square_feet: 100 },
        {id:"1c8238db-2c2f-4141-a992-a862d3171b0e", title: "UDO", bathrooms: 4, bedrooms: 6, city: "Barcelona", price: 3000, square_feet: 120, status: "Alquiler" },
        {id:"ea8c4ce8-71be-41a0-9ad5-0a66b9eb226b", title: "Casa de Christian & Oriana", bathrooms: 4, bedrooms: 6, city: "Barcelona", price: 3700, square_feet: 150 },
        {id:"0264b3d4-fab0-4b57-92a4-7513c3f867e6", title: "Casa de Clichita", bathrooms: 4, bedrooms: 6, city: "Los Cerezos", price: 7000, square_feet: 150 },
    ]
    let isMounted = true; 

    const fetchPropertiesData = async () => {
      try {
        setLoading(true);
        const res = await getProperties();
        const apiPropierties = res.data;

        if (isMounted) {
          setPropierties([
            ...apiPropierties, // Datos de la API
            ...datos,          // Datos locales
          ]);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          console.error("Error al cargar las propiedades:", err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPropertiesData();
    // setLoading(false);
    // setPropierties(datos);

    return () => {
      isMounted = false; 
    };
  }, [search]);

  if (loading) {
    return (
      <h1 className="main-title">Cargando propiedades...</h1>
    )
  }
  if (error) {
    return (
      <h1 className="main-title">Error al cargar las propiedades: {error.message}</h1>
    )
  }
  if (propierties.length === 0) {
    return (
      <h1 className="main-title">No hay propiedades disponibles.</h1>
    )
  }

  return (
    <>
      <h1 className="main-title">Propiedades disponibles</h1>
      <Bar search={search} setSearch={setSearch}/>
      <section className='list-cards'>
        {propierties.map(
          (data) => (
            <Card key={data.id} data={data}/>
          )
        )}
      </section>
    </>
  )
}