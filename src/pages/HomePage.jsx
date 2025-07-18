import './HomePage.css'
import { Dollar, Building, Engine, Briefcase } from '../components/Icons'
import { useNavigate } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'


const SectionPage = ({ id, children, ghost })=>{
  return (
    <section className={ghost ? "section-page ghost" : "section-page"} id={id} style={ghost ? {
     background: "white",
     backgroundImage: `
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     `,
     backgroundSize: "32px 32px, 32px 32px, 100% 100%",
   } : {}}>
      <div className="content">
        {children}
      </div>
    </section>
  )
}

const Adventage = ({ children, icon, title })=>{
  return (
    <li className='adventage'>
      <div className="front">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="back">
        {children}
      </div>
    </li>
  )
}

const ListAdventages = ({ children })=>{
  return (
    <ul className='list-adventages'>
      {children}
    </ul>
  )
}

export const HomePage = ()=>{
  const navigate = useNavigate()

  return (
    <>
      <SectionPage id="hero">
        <img src={logoSvg} className='logo'/>
        <h1 className='main-title'>Vende tu propiedad o encuentra tu hogar ideal con precios que te encantarán.</h1>
        <p className='description'>Facilitamos la compra y venta de propiedades en todo el territorio nacional con un enfoque en tu presupuesto y comodidad</p>
        <div className="buttons">
          <button className='boton' onClick={()=>navigate('/search-page')}>Buscar Propiedades</button>
          <button className='boton ghost'>Vender Mi Propiedad</button>
        </div>
      </SectionPage>

      <SectionPage id="value-proposition" ghost>
        <h1 className='main-title'>¿Por qué elegir INMOBI-UDO?</h1>
        <ListAdventages>
          <Adventage 
            title="Precios Amigables" 
            icon={<Dollar className="icon lg"/>}>
            Encuentra propiedades que se ajustan a tu presupuesto sin sacrificar calidad.
          </Adventage>
          <Adventage
            title="Variedad de Opciones" 
            icon={<Building className="icon lg"/>}>
            Amplio catálogo de casas, apartamentos, terrenos y más.
          </Adventage>
          <Adventage 
            title="Proceso Sencillo" 
            icon={<Engine className="icon lg"/>}>
            Te acompañamos en cada paso, desde la búsqueda hasta la firma.
          </Adventage>
          <Adventage 
            title="Asesoría Experta" 
            icon={<Briefcase className="icon lg"/>}>
            Profesionales dedicados a resolver tus dudas y ayudarte a tomar la mejor decisión.
          </Adventage>
        </ListAdventages>
        
      </SectionPage>
      <SectionPage id="how-it-works">

      </SectionPage>
      <SectionPage id="testimonials">

      </SectionPage>
      <SectionPage id="final-cta">

      </SectionPage>
    </>
  )
}