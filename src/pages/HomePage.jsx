import "./HomePage.css";
import { Dollar, Building, Engine, Briefcase } from "../components/Icons";
import { useNavigate } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import { Testimonial } from "../components/Testimonial";

const SectionPage = ({ id, children, ghost }) => {
  return (
    <section className={ghost ? "section-page ghost" : "section-page"} id={id}>
      <div className="content">{children}</div>
    </section>
  );
};

const Advantage = ({ children, icon, title }) => {
  return (
    <li className="advantage">
      <div className="front">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="back">{children}</div>
    </li>
  );
};

const ListAdvantages = ({ children }) => {
  return <ul className="list-advantages">{children}</ul>;
};

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SectionPage id="hero">
        <img src={logoSvg} className="logo" />
        <h1 className="main-title">
          Vende tu propiedad o encuentra tu hogar ideal con precios que te
          encantarán.
        </h1>
        <p className="description">
          Facilitamos la compra y venta de propiedades en todo el territorio
          nacional con un enfoque en tu presupuesto y comodidad.
        </p>
        <div className="buttons">
          <button className="boton ghost" onClick={() => navigate("/explore")}>
            Buscar Propiedades
          </button>
          <button className="boton ghost" onClick={() => navigate("/sell")}>
            Vender Mi Propiedad
          </button>
        </div>
      </SectionPage>

      <SectionPage id="value-proposition" ghost>
        <h1 className="main-title">¿Por qué elegir INMOBI-UDO?</h1>
        <ListAdvantages>
          <Advantage
            title="Precios Amigables"
            icon={<Dollar className="icon lg" />}
          >
            Encuentra propiedades que se ajustan a tu presupuesto sin sacrificar
            calidad.
          </Advantage>
          <Advantage
            title="Variedad de Opciones"
            icon={<Building className="icon lg" />}
          >
            Amplio catálogo de casas, apartamentos, terrenos y más.
          </Advantage>
          <Advantage
            title="Proceso Sencillo"
            icon={<Engine className="icon lg" />}
          >
            Te acompañamos en cada paso, desde la búsqueda hasta la firma.
          </Advantage>
          <Advantage
            title="Asesoría Experta"
            icon={<Briefcase className="icon lg" />}
          >
            Profesionales dedicados a resolver tus dudas y ayudarte a tomar la
            mejor decisión.
          </Advantage>
        </ListAdvantages>
      </SectionPage>
      <SectionPage id="how-it-works">
        <h1 className="main-title">
          ¿Cómo Funciona?
          <span className="subtitle">(Para Compradores y Vendedores)</span>
        </h1>
        <section className="list-articles">
          <article>
            <span>Para Compradores</span>
            <h1>Tu Camino hacia el Hogar Ideal</h1>
            <ol>
              <h3>Pasos Sencillos</h3>
              <li>
                <b>Explora:</b>
                "Usa nuestro buscador para encontrar la propiedad perfecta."
              </li>
              <li>
                <b>Contacta:</b>
                "Programa una visita o resuelve dudas con nuestros asesores."
              </li>
              <li>
                <b>Adquiere:</b>
                "Te guiamos en el proceso de compra."
              </li>
            </ol>
            <button className="boton" onClick={() => navigate("/explore")}>
              Explora el Mercado
            </button>
          </article>
          <article>
            <span>Para Vendedores</span>
            <h1>¿Quieres Vender tu Propiedad?</h1>
            <ol>
              <h3>Pasos Sencillos</h3>
              <li>
                <b>Publica:</b>
                "Envíanos los detalles de tu propiedad fácilmente."
              </li>
              <li>
                <b>Conecta:</b>
                "Te ayudamos a llegar a compradores interesados."
              </li>
              <li>
                <b>Vende:</b>
                "Te asistimos en todo el proceso de venta."
              </li>
            </ol>
            <button className="boton" onClick={() => navigate("/sell")}>
              Comienza Publicando
            </button>
          </article>
        </section>
      </SectionPage>
      <SectionPage id="testimonials" ghost>
        <h1 className="main-title">Testimonios de nuestros Clientes</h1>
        <section className="testimonials-container">
          <Testimonial
            name="Nel Rondón"
            stars={4}
            description="Muy buen servicio! Muy recomendable."
          />
          <Testimonial
            name="Luis Fuentes"
            stars={5}
            description="Los mejores en el mercado. Gracias a INMOBI-UDO hoy tengo mi hogar ideal."
          />
          <Testimonial
            name="Christián Rodríguez"
            stars={4}
            description="Pude concretar una venta importante con toda la confianza de INMOBI-UDO."
          />
          <Testimonial
            name="Placido Malavé"
            stars={5}
            description="El mejor equipo y la mejor asistencia en cada paso, responsabilidad absoluta."
          />
        </section>
      </SectionPage>
    </>
  );
};
