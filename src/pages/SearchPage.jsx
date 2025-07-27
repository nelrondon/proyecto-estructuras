import { useState, useEffect } from "react";
import Bar from "../components/Bar";
import { Card } from "../components/Card";

import { clearString } from "../libs/utils";
import { getProperties } from "../api/properties";
import { Loading } from "../components/Loading";
import { ToUp } from "../components/ToUp";

export const SearchPage = () => {
  const [properties, setProperties] = useState([]);
  const [propertiesRender, setPropertiesRender] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // PEDIR DATOS DE LAS PROPIEDADES
  useEffect(() => {
    let isMounted = true;

    const fetchPropertiesData = async () => {
      try {
        setLoading(true);
        const res = await getProperties();
        const apiproperties = res.data;

        if (isMounted) {
          setProperties(apiproperties);
          setPropertiesRender(apiproperties);
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

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return (
      <h1 className="main-title">
        Error al cargar las propiedades: {error.message}
      </h1>
    );
  }
  if (properties.length === 0) {
    return <h1 className="main-title">No hay propiedades disponibles.</h1>;
  }

  const handleSearch = (filterProps) => {
    const { search, state, city, type, maxPrice } = filterProps;
    const maxPriceOver = maxPrice * 1.2;
    const propertiesFiltered = properties.filter((property) => {
      const matchSearch = search
        ? property.title.toLowerCase().includes(search.toLowerCase()) ||
          property.description.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchState = state ? clearString(property.state) === state : true;
      const matchCity = city ? clearString(property.city) === city : true;
      const matchType = type ? clearString(property.status) === type : true;
      const matchPrice = maxPriceOver ? property.price <= maxPriceOver : true;

      return matchSearch && matchState && matchCity && matchType && matchPrice;
    });
    setPropertiesRender(propertiesFiltered);
  };

  return (
    <>
      <ToUp />
      <h1 className="main-title">Propiedades disponibles</h1>
      <Bar handleSearch={handleSearch} properties={properties} />
      <section className="list-cards">
        {propertiesRender.length === 0 && (
          <div style={{ textAlign: "center" }}>
            <h1>No hay propiedades con estas caracteristicas</h1>
            <p>
              Prueba modificando los parametros de filtrado, para una mejor
              busqueda
            </p>
          </div>
        )}
        {propertiesRender.length != 0 &&
          propertiesRender.map((data) => <Card key={data.id} data={data} />)}
      </section>
    </>
  );
};
