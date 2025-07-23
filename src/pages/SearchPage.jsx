import { useState, useEffect } from "react";
import Bar from "../components/Bar";
import { Card } from "../components/Card";

import { getProperties } from "../api/properties";
import { Loading } from "../components/Loading";

export const SearchPage = () => {
  const [properties, setproperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  // PEDIR DATOS DE LAS PROPIEDADES
  useEffect(() => {
    let isMounted = true;

    const fetchPropertiesData = async () => {
      try {
        setLoading(true);
        const res = await getProperties();
        const apiproperties = res.data;

        if (isMounted) {
          setproperties(apiproperties);
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
  }, [search]);

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

  return (
    <>
      <h1 className="main-title">Propiedades disponibles</h1>
      <Bar search={search} setSearch={setSearch} />
      <section className="list-cards">
        {properties.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </section>
    </>
  );
};
