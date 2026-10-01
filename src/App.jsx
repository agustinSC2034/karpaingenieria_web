import { useEffect, useRef, useState } from 'react';
import { ArrowRight, List, X } from '@phosphor-icons/react';
import { divisions, equipment, services, projects } from './content';

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const links = [['Empresa', '#empresa'], ['Qué hacemos', '#obras'], ['Experiencia', '#experiencia'], ['Contacto', '#contacto']];
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
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReducedMotion(media.matches);
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero__intro container">
      <h1 id="hero-title">Ingeniería e<br />infraestructura<br />energética</h1>
      <div className="hero__copy">
        <p>Desarrollamos obras EPC, tendido de ductos y piping, integrando ingeniería, provisión y construcción.</p>
        <a className="button" href="#obras">Conocé nuestras capacidades <Arrow /></a>
      </div>
    </div>
    {reducedMotion
      ? <img className="hero__image" src={asset('/images/karpa-planta-industrial-aerea.jpeg')} alt="Vista aérea de una instalación industrial con cañerías y equipos de montaje" width="1600" height="1066" fetchPriority="high" />
      : <video className="hero__image" src={asset('/images/karpa-video-institucional.mp4')} poster={asset('/images/karpa-planta-industrial-aerea.jpeg')} width="1920" height="1080" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />}
  </section>;
}

function Company() {
  return <section className="company container section-grid" id="empresa" aria-labelledby="company-title">
    <div>
      <h2 id="company-title">Más de 45 años<br className="desktop-break" /> ejecutando obras</h2>
      <p className="company__intro">Desde Bahía Blanca, desarrollamos proyectos de infraestructura con alcance nacional e internacional, en Argentina y Uruguay.</p>
      <div className="services" id="especialidades">
        {services.map(service => <details className="disclosure" key={service.title}>
          <summary>{service.title}<Arrow /></summary>
          <div className="disclosure__body">
            <p>{service.description}</p>
            <a className="text-link" href="#contacto">Consultar por este servicio <Arrow /></a>
          </div>
        </details>)}
      </div>
    </div>
    <img className="company__image" src={asset('/images/karpa-planta-industrial-aerea.jpeg')} alt="Vista aérea de una instalación industrial con cañerías y equipos de montaje" width="1600" height="1066" loading="lazy" />
  </section>;
}

function Divisions() {
  return <section className="work-services container" id="divisiones" aria-labelledby="divisions-title">
    <div className="section-heading"><h2 id="divisions-title">Servicios asociados</h2><p>Capacidades que acompañan cada proyecto.</p></div>
    <ul>{divisions.map(division => <li key={division.id}>{division.title}</li>)}</ul>
  </section>;
}

function Experience() {
  const [selected, setSelected] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const previousOverflow = useRef('');
  useEffect(() => {
    if (!selected) return;
    previousOverflow.current = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow.current; };
  }, [selected]);
  const reset = () => { setSelected(null); trigger.current?.focus(); };
  return <section className="experience container" id="experiencia" aria-labelledby="experience-title">
    <div className="section-heading"><h2 id="experience-title">Nuestra experiencia</h2><p>Obras de infraestructura en distintos sectores y territorios.</p></div>
    <div className="experience__grid">
      {projects.map(project => <button type="button" className="experience__project" key={project.id} aria-haspopup="dialog" onClick={event => { trigger.current = event.currentTarget; setPhotoIndex(0); setSelected(project); }}>
        {project.image && <img src={asset(project.image)} alt="" width="900" height="600" loading="lazy" />}
        <span className="experience__title">{project.title}<Arrow /></span>
      </button>)}
    </div>
    <dialog ref={dialog} className="equipment-dialog experience-dialog" aria-labelledby="experience-detail-title" onClose={reset} onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }}>
      {selected && <div className="equipment-dialog__inner">
        <button className="dialog-close" type="button" aria-label="Cerrar detalle de obra" autoFocus onClick={() => dialog.current.close()}><X size={28} weight="light" /></button>
        <h2 id="experience-detail-title">{selected.title}</h2>
        {selected.images.length > 0 && <>
          <figure className="experience-dialog__visual"><img src={asset(selected.images[photoIndex])} alt={`${selected.imageAlt}. Fotografía ${photoIndex + 1} de ${selected.images.length}`} width="900" height="600" />{selected.imageCaption && <figcaption>{selected.imageCaption}</figcaption>}</figure>
          {selected.images.length > 1 && <div className="experience-dialog__thumbnails" role="group" aria-label="Fotografías de la obra">
            {selected.images.map((photo, index) => <button type="button" key={photo} aria-label={`Ver fotografía ${index + 1} de ${selected.images.length}`} aria-pressed={photoIndex === index} onClick={() => setPhotoIndex(index)}><img src={asset(photo)} alt="" width="100" height="70" loading="lazy" /></button>)}
          </div>}
        </>}
        <dl><div><dt>Cliente</dt><dd>{selected.client}</dd></div>{selected.location && <div><dt>Ubicación</dt><dd>{selected.location}</dd></div>}{selected.period && <div><dt>Período</dt><dd>{selected.period}</dd></div>}<div><dt>Alcance de los trabajos</dt><dd>{selected.description}</dd></div></dl>
      </div>}
    </dialog>
  </section>;
}

function Capabilities() {
  const capabilities = [
    {
      title: 'Obras nuevas y ampliaciones',
      summary: 'Integramos ingeniería, provisión y construcción en obras EPC. Ejecutamos piping y tendido de ductos, con montaje, mantenimiento y adecuaciones de infraestructura energética.',
      items: ['Gasoductos, poliductos y piping industrial', 'Acueductos, redes de incendio y estaciones de regulación', 'Tendido de tritubo y CCTV'],
      image: asset('/images/karpa-montaje-industrial.jpeg'),
      alt: 'Montaje industrial de una pieza de cañería suspendida mediante grúa',
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
        <h2 id="equipment-title">Nuestro equipo</h2>
        <p>Contamos con personal capacitado para desarrollar los diferentes proyectos, priorizando las normas de Calidad y SSHH&amp;MA.</p>
        <ul className="equipment__capabilities"><li>Amplia flota de equipos y maquinarias</li><li>Base operativa con talleres propios de prefabricados y pintura</li></ul>
        <button className="button" onClick={show} type="button" aria-haspopup="dialog">Conocé nuestros recursos <Arrow /></button>
      </div>
      <img src={asset('/images/equipos-propios.webp')} width="680" height="382" alt="Excavadoras de Karpa sobre un carretón de transporte" loading="lazy" />
    </section>
    <dialog ref={dialog} className="equipment-dialog" aria-labelledby="dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }}>
      <div className="equipment-dialog__inner">
        <button className="dialog-close" type="button" onClick={() => dialog.current.close()} aria-label="Cerrar detalle de equipos" autoFocus><X size={28} weight="light" /></button>
        <h2 id="dialog-title">Nuestros recursos</h2>
        <p>Recursos para acompañar cada etapa de ejecución.</p>
        <img className="equipment-dialog__photo" src={asset('/images/tiendetubos-en-obra.webp')} width="900" height="900" alt="Tiendetubos trabajando sobre una excavación" loading="lazy" />
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
      <address>Río Negro 1002<br />Bahía Blanca, Buenos Aires<br /><a href="tel:+542914552263">0291 455-2263</a><br /><a href="mailto:info@karpaingenieria.com.ar">info@karpaingenieria.com.ar</a></address>
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
    document.querySelectorAll('.company,.project-story,.experience,.work-services,.equipment,.clients,.contact').forEach(element => observer.observe(element));
    const stop = () => { if (reduced.matches) { observer.disconnect(); animations.forEach(animation => animation.cancel()); } };
    reduced.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); reduced.removeEventListener('change', stop); };
  }, []);
  return <div id="inicio">
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Header />
    <main id="contenido"><Hero /><Company /><div className="section-muted"><Capabilities /></div><Experience /><Divisions /><div className="section-muted"><Equipment /></div><Clients /><Contact /></main>
    <footer className="site-footer container"><Brand footer /><p>Ingeniería, Construcciones y Servicios</p></footer>
  </div>;
}
