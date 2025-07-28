import { Star } from "./Icons";
import "./Testimonial.css";

export const Testimonial = ({
  name = "Jhon Doe",
  description = "Texto de prueba para el testimonial",
  stars = 0,
}) => {
  const starsFilled = stars;
  const starsEmpty = 5 - starsFilled;

  return (
    <article className="testimonial">
      <div className="img"></div>
      <div className="content">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="stars">
          {Array.from({ length: starsFilled }).map((_, i) => (
            <Star className="icon" key={i} fill />
          ))}
          {Array.from({ length: starsEmpty }).map((_, i) => (
            <Star className="icon" key={i} />
          ))}
        </div>
      </div>
    </article>
  );
};
