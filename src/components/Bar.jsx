import { useEffect, useState } from "react";
import "./Bar.css";
import { Load, Lupa } from "./Icons.jsx";

import { clearString, capitalize } from "../libs/utils.js";

const Select = ({ name, label, data, state, setState }) => {
  return (
    <label>
      <span>{capitalize(label)}:</span>
      <select
        name={name}
        onChange={(e) => setState(e.target.value)}
        value={state}
      >
        <option value="">-</option>
        {data.map((_) => (
          <option key={_} value={_}>
            {capitalize(_)}
          </option>
        ))}
      </select>
    </label>
  );
};

function Bar({ properties, handleSearch }) {
  const [states, _setStates] = useState(() => {
    const states = properties.map((property) => clearString(property.state));
    return [...new Set(states)];
  });

  const [cities, setCities] = useState([]);

  const [types, _setTypes] = useState(() => {
    const types = properties.map((property) => clearString(property.status));
    return [...new Set(types)];
  });
  const [search, setSearch] = useState("");
  const [stateSelect, setStateSelect] = useState("");
  const [citySelect, setCitySelect] = useState("");
  const [typeSelect, setTypeSelect] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (!stateSelect) {
      const cities = properties.map((property) => clearString(property.city));
      setCities([...new Set(cities)]);
    } else {
      const cities = properties
        .filter((property) => clearString(property.state) === stateSelect)
        .map((property) => clearString(property.city));
      setCities([...new Set(cities)]);
    }
  }, [stateSelect, properties]);

  const onSubmit = (e) => {
    e.preventDefault();
    const filterProps = {
      search,
      state: stateSelect,
      city: citySelect,
      type: typeSelect,
      maxPrice,
    };

    handleSearch(filterProps);
  };

  const handleReset = () => {
    setSearch("");
    setStateSelect("");
    setCitySelect("");
    setTypeSelect("");
    setMaxPrice(0);
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="row">
        <label>
          <span>Busqueda: (Titulo o Descripción)</span>
          <input
            type="text"
            autoComplete="off"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Busqueda..."
          />
        </label>
        <button className="boton" type="submit">
          <Lupa className="icon" /> Filtrar
        </button>
        <button className="boton ghost" onClick={handleReset}>
          <Load className="icon" /> Limpiar
        </button>
      </div>
      <div className="row">
        <Select
          name="type"
          label="Tipo de Oferta"
          state={typeSelect}
          setState={setTypeSelect}
          data={types}
        />
        <Select
          name="state"
          label="Estado"
          state={stateSelect}
          setState={setStateSelect}
          data={states}
        />
        <Select
          name="city"
          label="Ciudad"
          state={citySelect}
          setState={setCitySelect}
          data={cities}
        />

        <label>
          <span>Max Precio:</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0"
            max="1000000"
            name="price"
          />
        </label>
      </div>
    </form>
  );
}

export default Bar;
