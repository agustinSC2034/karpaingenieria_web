import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, List, Pause, Play, X } from '@phosphor-icons/react';
import { divisions, equipment, projects, services } from './content';

const links = [['Empresa', '#empresa'], ['Fibra óptica', '#fibra-optica'], ['Divisiones', '#divisiones'], ['Obras', '#obras'], ['Equipos', '#equipos'], ['Contacto', '#contacto']];
const Arrow = () => <ArrowRight size={24} weight="light" aria-hidden="true" />;

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? 'brand--footer' : ''}`} href="#inicio" aria-label="Karpa S.A. — Inicio">
    <img src="/images/ai/logo-v2.webp" width="64" height="64" alt="" />
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
      <h1 id="hero-title">Ingeniería,<br />construcciones<br />y servicios.</h1>
      <div className="hero__copy">
        <p>Construimos infraestructura energética. Integramos ingeniería, construcción y servicios especializados.</p>
        <a className="button" href="#obras">Conocer nuestras obras <Arrow /></a>
      </div>
    </div>
    <img className="hero__image" src="/images/ai/hero.webp" alt="Tiendetubos y personal de Karpa durante una maniobra de izaje de cañería" width="1600" height="1200" fetchPriority="high" />
  </section>;
}

function Company() {
  return <section className="company container section-grid" id="empresa" aria-labelledby="company-title">
    <div>
      <h2 id="company-title">Experiencia en<br className="desktop-break" /> infraestructura energética.</h2>
      <p className="company__intro">Más de 40 años construyendo infraestructura, con sede en Bahía Blanca y obras en Argentina y Uruguay.</p>
      <div className="services" id="especialidades">
        {services.map(service => <details className="disclosure" key={service.title}>
          <summary>{service.title}<Arrow /></summary>
          <div className="disclosure__body">
            <p>{service.description}</p>
            {service.title === 'Servicios especializados' && <div className="workshop-photos">
              <img src="/images/ai/vertical.webp" alt="Equipo industrial vertical en taller" width="455" height="607" loading="lazy" />
              <img src="/images/ai/horizontal.webp" alt="Equipo industrial horizontal en taller" width="455" height="607" loading="lazy" />
            </div>}
            <a className="text-link" href="#contacto">Consultar por este servicio <Arrow /></a>
          </div>
        </details>)}
      </div>
    </div>
    <img className="company__image" src="/images/ai/planta.webp" alt="Instalación industrial con cañerías, válvulas y equipos de regulación" width="680" height="419" loading="lazy" />
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
    <div className="section-heading"><h2 id="divisions-title">Divisiones de obra.</h2></div>
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
        <h2 id="fiber-title">Fibra óptica.<br />Infraestructura para conectar.</h2>
        <p>Canalización con tritubo y tendido de fibra para proyectos de infraestructura.</p>
        <p>Integramos las obras civiles y los cruces especiales que acompañan al tendido, con experiencia en proyectos de gran extensión.</p>
      </div>
      <figure className="fiber__visual">
        <img src="/images/ai/fibra-obra-v3.webp" alt="Escena ilustrativa de una cuadrilla instalando canalizaciones de fibra óptica en una obra de gran escala" width="1536" height="1024" loading="lazy" />
      </figure>
      <div className="fiber__experience">
        <div><h3>Experiencia en General Roca.</h3><p>Acueducto principal · Central Térmica Roca</p></div>
        <dl><div><dt>Tritubo instalado</dt><dd>17.000 <span>m</span></dd></div><div><dt>Fibra óptica tendida</dt><dd>20.000 <span>m</span></dd></div></dl>
      </div>
    </div>
  </section>;
}

function Projects() {
  return <section className="projects container" id="obras" aria-labelledby="projects-title">
    <div className="section-heading">
      <h2 id="projects-title">Nuestra experiencia, en obra.</h2>
      <p>Gas, energía e infraestructura.</p>
    </div>
    <article className="project-showcase">
      <img src="/images/ai/obra.webp" alt="Bajada de cañería en la obra Segundo Anillo Sur para Metrogas" width="823" height="493" loading="lazy" />
      <div className="project-showcase__caption">
        <h3>Segundo Anillo Sur</h3>
        <p>San Vicente, Buenos Aires<br />Metrogas</p>
        <p>Construcción de ramales de alta presión y obras civiles complementarias.</p>
      </div>
    </article>
    <div className="works-index" id="project-list">
      {projects.map(project => <article className="work-entry" key={project.title}>
        <p className="work-entry__client">{project.client} · {project.location}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
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
        <h2 id="equipment-title">Equipos propios.<br />Capacidad en obra.</h2>
        <p>Equipos de excavación, izaje, soldadura y transporte para acompañar cada etapa de ejecución.</p>
        <ul className="equipment__capabilities"><li>Excavación y movimiento de suelos</li><li>Izaje, montaje y transporte</li><li>Soldadura, cruces y servicios de obra</li></ul>
        <button className="button" onClick={show} type="button" aria-haspopup="dialog">Conocer nuestros equipos <Arrow /></button>
      </div>
      <img src="/images/ai/flota.webp" width="680" height="382" alt="Excavadoras de Karpa sobre un carretón de transporte" loading="lazy" />
    </section>
    <dialog ref={dialog} className="equipment-dialog" aria-labelledby="dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }}>
      <div className="equipment-dialog__inner">
        <button className="dialog-close" type="button" onClick={() => dialog.current.close()} aria-label="Cerrar detalle de equipos" autoFocus><X size={28} weight="light" /></button>
        <h2 id="dialog-title">Equipos propios.</h2>
        <p>Recursos para acompañar cada etapa de ejecución.</p>
        <img className="equipment-dialog__photo" src="/images/ai/tiendetubos.webp" width="900" height="900" alt="Tiendetubos trabajando sobre una excavación" loading="lazy" />
        <dl>{equipment.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
      </div>
    </dialog>
  </>;
}

function Clients() {
  const track = useRef(null);
  const interacting = useRef(false);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [position, setPosition] = useState({ start: true, end: false });
  const clients = [
    { name: 'Metrogas', logo: 'metrogas.svg' },
    { name: 'TGS', logo: 'tgs.png' },
    { name: 'Camuzzi', logo: 'camuzzi.svg' },
    { name: 'BAGSA', logo: 'bagsa.png' },
    { name: 'Generación Mediterránea', logo: 'albanesi.png', alt: 'Grupo Albanesi', caption: true },
    { name: 'Central Térmica Roca', logo: 'roca.png' },
  ];
  useEffect(() => {
    const element = track.current;
    const update = () => setPosition({ start: element.scrollLeft <= 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => { resize.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => { if (preference.matches) setPaused(true); };
    preference.addEventListener('change', change);
    return () => preference.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    if (paused) return;
    const element = track.current;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.5 });
    observer.observe(element);
    const timer = window.setInterval(() => {
      if (!visible || document.hidden || interacting.current || element.closest('section').matches(':hover, :focus-within')) return;
      const end = element.scrollLeft + element.clientWidth >= element.scrollWidth - 2;
      element.scrollTo({ left: end ? 0 : element.scrollLeft + element.querySelector('li').getBoundingClientRect().width, behavior: 'smooth' });
    }, 4000);
    return () => { window.clearInterval(timer); observer.disconnect(); };
  }, [paused]);
  const move = direction => {
    const element = track.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollBy({ left: direction * element.clientWidth, behavior: reduced ? 'instant' : 'smooth' });
  };
  return <section className="clients container" aria-labelledby="clients-title">
    <div className="clients__heading">
      <h2 id="clients-title">Empresas con las que trabajamos.</h2>
      <div className="clients__controls">
        <button type="button" aria-label={paused ? 'Reanudar carrusel' : 'Pausar carrusel'} onClick={() => setPaused(!paused)}>{paused ? <Play size={20} aria-hidden="true" /> : <Pause size={20} aria-hidden="true" />}</button>
        <button type="button" aria-label="Clientes anteriores" aria-controls="client-carousel" disabled={position.start} onClick={() => move(-1)}><ArrowLeft size={24} aria-hidden="true" /></button>
        <button type="button" aria-label="Clientes siguientes" aria-controls="client-carousel" disabled={position.end} onClick={() => move(1)}><Arrow /></button>
      </div>
    </div>
    <ul ref={track} id="client-carousel" className="clients__track" tabIndex={0} onPointerDown={() => { interacting.current = true; }} onPointerUp={() => { interacting.current = false; }} onPointerCancel={() => { interacting.current = false; }} onPointerLeave={() => { interacting.current = false; }} aria-label="Logos de clientes. Deslizá o usá las flechas para recorrerlos." onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
      if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); track.current.scrollTo({ left: event.key === 'Home' ? 0 : track.current.scrollWidth, behavior: 'instant' }); }
    }}>
      {clients.map(client => <li key={client.name} className="client-logo">
        <img src={`/images/clients/${client.logo}`} alt={client.alt || client.name} width="220" height="100" loading="lazy" />
        {client.caption && <span>{client.name}</span>}
      </li>)}
    </ul>
  </section>;
}

function Contact() {
  const [notice, setNotice] = useState(false);
  const submit = event => { event.preventDefault(); setNotice(true); };
  return <section className="contact container section-grid" id="contacto" aria-labelledby="contact-title">
    <div>
      <h2 id="contact-title">Hablemos de tu<br />próximo proyecto.</h2>
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
    document.querySelectorAll('.company,.fiber__copy,.fiber__visual,.divisions,.project-showcase,.work-entry,.equipment,.clients,.contact').forEach(element => observer.observe(element));
    const stop = () => { if (reduced.matches) { observer.disconnect(); animations.forEach(animation => animation.cancel()); } };
    reduced.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); reduced.removeEventListener('change', stop); };
  }, []);
  return <div id="inicio">
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Header />
    <main id="contenido"><Hero /><Company /><FiberOptics /><Divisions /><Projects /><Equipment /><Clients /><Contact /></main>
    <footer className="site-footer container"><Brand footer /><p>Ingeniería, Construcciones y Servicios</p></footer>
  </div>;
}
