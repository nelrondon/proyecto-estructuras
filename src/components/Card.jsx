import "./Card.css";
import { Heart, Bed, Gps, Bath } from "./Icons.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { formatPrice } from "../libs/utils";

export function Card({ data }) {
  const [img, _setImg] = useState(() => {
    if (data.img_url) return data.img_url;
    const imgs = [
      "https://images.homify.com/v1443654352/p/photo/image/960352/Imativa_Casa_Carrasco_0013.jpg",
      "https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmFK05BuCqhmqZz6FbUQmV2vVSs7B3LGFtA&s",
      "https://d2iwr6cbo83dtj.cloudfront.net/2025/02/casa-de-campo-paisagismo-inspirado-jardins-italianos-renata-guastelli-credito-miro-martins-8.jpg?quality=90&strip=info",
    ];
    const i = Math.floor(Math.random() * imgs.length);
    return imgs[i];
  });

  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);
  const {
    id,
    title,
    city,
    price,
    square_feet,
    bathrooms,
    bedrooms,
    status = "Venta",
    state = "Anzoategui",
  } = data;

  const newStatus = status == "Ambas" ? "Alquiler / Venta" : status;

  const handleLikeButton = () => {
    setIsFavorite(!isFavorite);
  };

  const handleMoreInfo = () => {
    navigate(`/properties/${id}`);
  };

  return (
    <article className="card">
      <div className="type">
        <p>{newStatus.toUpperCase()}</p>
      </div>
      <div className="image">
        <img src={img} />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <h3 className="location">
          <Gps className="icon" />
          {`${city}, ${state}, Venezuela`}
        </h3>
        <div className="details">
          <p>
            {bedrooms} <Bed className="icon" />
          </p>
          <p>
            {bathrooms} <Bath className="icon" />
          </p>
          <p>
            {square_feet} m<sup>2</sup>
          </p>
          <button
            onClick={handleLikeButton}
            className={isFavorite ? "like active" : "like"}
          >
            <Heart className="icon lg" />
          </button>
        </div>
        <div className="buttons">
          <button className="boton" onClick={handleMoreInfo}>
            Ver Propiedad
          </button>
          <b className="price">
            {" "}
            {formatPrice(price)}$ <i>{status == "Alquiler" ? "/mes" : ""}</i>{" "}
          </b>
        </div>
      </div>
    </article>
  );
}
