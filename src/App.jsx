import { useEffect, useRef, useState } from 'react';
import { ArrowRight, List, X } from '@phosphor-icons/react';
import { divisions, equipment, services } from './content';

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const links = [['Empresa', '#empresa'], ['Qué hacemos', '#obras'], ['Divisiones', '#divisiones'], ['Fibra óptica', '#fibra-optica'], ['Equipos', '#equipos'], ['Contacto', '#contacto']];
const Arrow = () => <ArrowRight size={24} weight="light" aria-hidden="true" />;

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? 'brand--footer' : ''}`} href="#inicio" aria-label="Karpa S.A. — Inicio">
    <img src={asset('/images/ai/logo-v2.webp')} width="64" height="64" alt="" />
    <span className="brand__text"><strong>Karpa S.A.</strong><span>Ingeniería, Construcciones y Servicios</span></span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
    };
    const media = window.matchMedia('(min-width: 761px)');
    const reset = () => { if (media.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    media.addEventListener('change', reset);
    return () => { document.removeEventListener('keydown', onKey); media.removeEventListener('change', reset); };
  }, [open]);
  return <header className="site-header container">
    <Brand />
    <button ref={menuButton} className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
      {open ? <X size={29} weight="light" /> : <List size={29} weight="light" />}
    </button>
    <nav className={`navigation ${open ? 'is-open' : ''}`} id="main-navigation" aria-label="Navegación principal">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero__intro container">
      <h1 id="hero-title">Ingeniería,<br />construcciones<br />y servicios</h1>
      <div className="hero__copy">
        <p>Construimos infraestructura energética. Integramos ingeniería, construcción y fibra óptica.</p>
        <a className="button" href="#obras">Conocer nuestras capacidades <Arrow /></a>
      </div>
    </div>
    <img className="hero__image" src={asset('/images/obra-gasoducto.webp')} alt="Tendido de cañería de gasoducto con equipos de excavación e izaje" width="1600" height="1200" fetchPriority="high" />
  </section>;
}

function Company() {
  return <section className="company container section-grid" id="empresa" aria-labelledby="company-title">
    <div>
      <h2 id="company-title">Experiencia en<br className="desktop-break" /> infraestructura energética</h2>
      <p className="company__intro">Más de 40 años construyendo infraestructura, con sede en Bahía Blanca y obras en Argentina y Uruguay.</p>
      <div className="services" id="especialidades">
        {services.map(service => <details className="disclosure" key={service.title}>
          <summary>{service.title}<Arrow /></summary>
          <div className="disclosure__body">
            <p>{service.description}</p>
            <a className="text-link" href={service.title === 'Fibra óptica' ? '#fibra-optica' : '#contacto'}>{service.title === 'Fibra óptica' ? 'Ver capacidad en fibra óptica' : 'Consultar por este servicio'} <Arrow /></a>
          </div>
        </details>)}
      </div>
    </div>
    <img className="company__image" src={asset('/images/ai/planta.webp')} alt="Instalación industrial con cañerías, válvulas y equipos de regulación" width="680" height="419" loading="lazy" />
  </section>;
}

function Divisions() {
  const [desktop, setDesktop] = useState(() => window.matchMedia('(min-width: 761px)').matches);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 761px)');
    const change = () => setDesktop(media.matches);
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);
  return <section className="divisions container" id="divisiones" aria-labelledby="divisions-title">
    <div className="section-heading"><h2 id="divisions-title">Divisiones de obra</h2></div>
    <p className="divisions__intro">De la ingeniería a la ejecución.</p>
    <div className="divisions__list">
      {divisions.filter(division => division.id !== 'fibra-optica').map(division => desktop ? <article className="division division--expanded" key={division.id} id={division.id}>
        <h3>{division.title}</h3><p>{division.shortDescription || division.description}</p>
      </article> : <details className="division disclosure" key={division.id} id={division.id}>
        <summary><h3>{division.title}</h3><Arrow /></summary>
        <div className="disclosure__body"><p>{division.description}</p></div>
      </details>)}
    </div>
  </section>;
}

function FiberOptics() {
  return <section className="fiber" id="fibra-optica" aria-labelledby="fiber-title">
    <div className="container fiber__layout">
      <div className="fiber__copy">
        <h2 id="fiber-title">Fibra óptica<br />para infraestructura de gran escala</h2>
        <p>Canalización con tritubo y tendido de fibra para proyectos de infraestructura.</p>
        <p>Integramos las obras civiles y los cruces especiales que acompañan al tendido, con experiencia en proyectos de gran extensión.</p>
        <ul className="fiber__capabilities" aria-label="Capacidades de la división de fibra óptica">
          <li>Canalización y colocación de tritubo</li>
          <li>Tendido de fibra óptica</li>
          <li>Cruces especiales</li>
          <li>Obras civiles asociadas</li>
        </ul>
      </div>
      <figure className="fiber__visual">
        <img src={asset('/images/ai/fibra-obra-v3.webp')} alt="Cuadrilla instalando canalizaciones de fibra óptica en una obra de gran escala" width="1536" height="1024" loading="lazy" />
      </figure>
    </div>
  </section>;
}

function Capabilities() {
  const capabilities = [
    {
      title: 'Obras nuevas y ampliaciones',
      summary: 'Infraestructura energética ejecutada de punta a punta, desde la ingeniería y la preparación del terreno hasta el montaje y la puesta en servicio.',
      items: ['Gasoductos, redes y estaciones de regulación', 'Obras EPC, civiles y electromecánicas', 'Acueductos, redes de incendio y fibra óptica'],
      image: asset('/images/ai/obra.webp'),
      alt: 'Construcción de infraestructura energética con equipos de izaje',
    },
    {
      title: 'Mantenimiento y adecuaciones',
      summary: 'Intervenciones sobre instalaciones existentes para sostener su operación, renovar componentes y adaptar la infraestructura a nuevas necesidades.',
      items: ['Renovación y cambio de cañerías', 'Recobertura, reparación y protección catódica', 'Asistencia técnica, equipos y logística de obra'],
      image: asset('/images/ai/hero.webp'),
      alt: 'Tiendetubos y personal de Karpa durante una maniobra de izaje de cañería',
    },
    {
      title: 'Pruebas, verificaciones y certificaciones',
      summary: 'Servicios técnicos para verificar instalaciones, documentar condiciones de operación y acompañar la entrega de cada intervención.',
      items: ['Pruebas hidráulicas y secado de cañerías', 'Verificación de defectos y calibración de equipos', 'Prefabricado, inspección y certificaciones'],
      image: asset('/images/tiendetubos-en-obra.webp'),
      alt: 'Personal y equipos técnicos trabajando junto a una excavación',
    },
  ];
  return <section className="projects container" id="obras" aria-labelledby="projects-title">
    <div className="section-heading">
      <h2 id="projects-title">Qué hacemos</h2>
      <p>Capacidad para ejecutar, mantener y verificar infraestructura.</p>
    </div>
    <div className="project-stories">
      {capabilities.map((capability, index) => <article className={`project-story ${index === 1 ? 'project-story--reverse' : ''}`} key={capability.title}>
        <img src={capability.image} alt={capability.alt} width="900" height="540" loading="lazy" />
        <div className="project-story__copy">
          <hr aria-hidden="true" />
          <h3>{capability.title}</h3>
          <p>{capability.summary}</p>
          <ul className="capability-list">{capability.items.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </article>)}
    </div>
  </section>;
}

function Equipment() {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const reset = () => { document.body.style.overflow = ''; };
    element.addEventListener('close', reset);
    return () => { element.removeEventListener('close', reset); reset(); };
  }, []);
  const show = () => { dialog.current.showModal(); document.body.style.overflow = 'hidden'; };
  return <>
    <section className="equipment container" id="equipos" aria-labelledby="equipment-title">
      <div className="equipment__copy">
        <h2 id="equipment-title">Equipos propios<br />Capacidad en obra</h2>
        <p>Equipos de excavación, izaje, soldadura y transporte para acompañar cada etapa de ejecución.</p>
        <ul className="equipment__capabilities"><li>Excavación y movimiento de suelos</li><li>Izaje, montaje y transporte</li><li>Soldadura, cruces y servicios de obra</li></ul>
        <button className="button" onClick={show} type="button" aria-haspopup="dialog">Conocer nuestros equipos <Arrow /></button>
      </div>
      <img src={asset('/images/ai/flota.webp')} width="680" height="382" alt="Excavadoras de Karpa sobre un carretón de transporte" loading="lazy" />
    </section>
    <dialog ref={dialog} className="equipment-dialog" aria-labelledby="dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }}>
      <div className="equipment-dialog__inner">
        <button className="dialog-close" type="button" onClick={() => dialog.current.close()} aria-label="Cerrar detalle de equipos" autoFocus><X size={28} weight="light" /></button>
        <h2 id="dialog-title">Equipos propios</h2>
        <p>Recursos para acompañar cada etapa de ejecución.</p>
        <img className="equipment-dialog__photo" src={asset('/images/ai/tiendetubos.webp')} width="900" height="900" alt="Tiendetubos trabajando sobre una excavación" loading="lazy" />
        <dl>{equipment.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
      </div>
    </dialog>
  </>;
}

function Clients() {
  const clients = [
    { name: 'Metrogas', logo: 'metrogas.svg' },
    { name: 'TGS', logo: 'tgs.png' },
    { name: 'Camuzzi', logo: 'camuzzi.svg' },
    { name: 'BAGSA', logo: 'bagsa.png' },
    { name: 'Generación Mediterránea', logo: 'albanesi.png', alt: 'Grupo Albanesi', caption: true },
    { name: 'Central Térmica Roca', logo: 'roca.png' },
  ];
  return <section className="clients container" aria-labelledby="clients-title">
    <div className="clients__heading">
      <h2 id="clients-title">Empresas con las que trabajamos</h2>
    </div>
    <div className="clients__viewport" aria-label="Empresas que confiaron en Karpa">
      <ul className="clients__track">
      {[...clients, ...clients].map((client, index) => <li key={`${client.name}-${index}`} className={`client-logo ${index >= clients.length ? 'client-logo--duplicate' : ''}`} aria-hidden={index >= clients.length ? 'true' : undefined}>
        <img src={asset(`/images/clients/${client.logo}`)} alt={client.alt || client.name} width="220" height="100" loading="lazy" />
        {client.caption && <span>{client.name}</span>}
      </li>)}
      </ul>
    </div>
  </section>;
}

function Contact() {
  const [notice, setNotice] = useState(false);
  const submit = event => { event.preventDefault(); setNotice(true); };
  return <section className="contact container section-grid" id="contacto" aria-labelledby="contact-title">
    <div>
      <h2 id="contact-title">Hablemos de tu<br />próximo proyecto</h2>
      <address>Río Negro 1002<br />Bahía Blanca, Buenos Aires<br /><a href="tel:+542914552263">0291 455-2263</a></address>
    </div>
    <form className="contact-form" onSubmit={submit}>
      <div className="field"><label htmlFor="name">Nombre y empresa</label><input id="name" name="name" autoComplete="name" required maxLength={160} /></div>
      <div className="field"><label htmlFor="email">Correo electrónico</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} /></div>
      <div className="field"><label htmlFor="message">Mensaje</label><textarea id="message" name="message" required rows={3} maxLength={4000} /></div>
      <button className="button" type="submit">Enviar consulta <Arrow /></button>
      {notice && <p className="form-notice" role="status">El envío desde la web todavía no está habilitado. Por el momento, podés contactarnos al <a href="tel:+542914552263">0291 455-2263</a>. Tu mensaje no fue enviado.</p>}
    </form>
  </section>;
}

export function App() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const animation = entry.target.animate([{ opacity: 0.65, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 650, easing: 'cubic-bezier(.2,.7,.3,1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.company,.fiber__copy,.fiber__visual,.project-story,.divisions,.equipment,.clients,.contact').forEach(element => observer.observe(element));
    const stop = () => { if (reduced.matches) { observer.disconnect(); animations.forEach(animation => animation.cancel()); } };
    reduced.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); reduced.removeEventListener('change', stop); };
  }, []);
  return <div id="inicio">
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Header />
    <main id="contenido"><Hero /><Company /><Capabilities /><Divisions /><FiberOptics /><Equipment /><Clients /><Contact /></main>
    <footer className="site-footer container"><Brand footer /><p>Ingeniería, Construcciones y Servicios</p></footer>
  </div>;
}
