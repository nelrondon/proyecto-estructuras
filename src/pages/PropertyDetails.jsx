import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Bath } from "../components/icons/Bath";
import { Bed } from "../components/icons/Bed";
import { Gps } from "../components/icons/Gps";

import { getPropertyById } from "../api/propierties";

import { formatPrice } from "../libs/utils";

import "./PropertyDetails.css"

export const PropertyDetails = () => {
  const { id } = useParams();
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchPropertyData = async ()=>{
      try {
        setLoading(true);
        const res = await getPropertyById(id);
        setData(res.data.property);
      } catch (e) {
        if (isMounted){
          setError(e.message);
        }
      }finally{
        if (isMounted){
          setLoading(false);
        }
      }
    }
    fetchPropertyData();
    return () => {
      isMounted = false;
    }
  }, [id]);

  if(loading){{
    return <h1 className="main-title">Cargando...</h1>
  }}
  if(error){{
    return <h1 className="main-title">Error al cargar la propiedad: {error}</h1>
  }}
  
  return(
    <>
      <h1 className="main-title">Detalles de la propiedad</h1>
      <section className="property-details">
        <div className="image">
          <img src="https://images.homify.com/v1443654352/p/photo/image/960352/Imativa_Casa_Carrasco_0013.jpg" alt="" />

          <div className="info">
            <h2 className="title">{data.title}</h2>
            <p className="description">{data.description}</p>
            <div>
              <p className="location">{data.city}, {data.state} <Gps className="icon"/></p>
              <p>Publicado el: {data.listing_date}</p>
            </div>
          </div>
        </div>
        <div className="details">
          <div>
            <p>{data.bedrooms} Habitaciones <Bed className="icon"/></p>
            <p>{data.bathrooms} Cuartos de Baño <Bath className="icon"/></p> 
            <p>Superficie {data.square_feet} <span>m<sup>2</sup></span></p>
          </div>

          <div>
            <p>Tipo de Propiedad: {data.property_type}</p>
            <p>Tipo de Oferta: {data.status}</p>
          </div>

          <div>
            <p>{formatPrice(data.price)}$</p>
          </div>
          {/* <p>Publicado por: {data.user_id}</p> */}
        </div>
      </section>
    </>
  )
}