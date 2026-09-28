export const services = [
  { title: 'Gasoductos y redes', description: 'Construcción de gasoductos, ramales de alta presión y redes de distribución. Tendido de cañerías de acero, PVC y polietileno, con sus obras complementarias.' },
  { title: 'Tendido de tritubo', description: 'Canalización y colocación de tritubo para infraestructura de fibra óptica, con cruces especiales y obras civiles asociadas.' },
  { title: 'Obras EPC', description: 'Ingeniería, provisión y construcción de obras de infraestructura: poliductos, redes de incendio, montaje electromecánico, obras civiles y movimiento de suelos.' },
];
export const divisions = [
  { id: 'tuneleo', title: 'Tuneleo y cruces especiales' },
  { id: 'pruebas', title: 'Pruebas hidráulicas' },
  { id: 'montaje', title: 'Montaje electromecánico' },
  { id: 'poliductos', title: 'Poliductos' },
  { id: 'suelos', title: 'Movimiento de suelos' },
  { id: 'recobertura', title: 'Recobertura de cañerías' },
  { id: 'electricas', title: 'Obras eléctricas' },
  { id: 'civiles', title: 'Obras civiles complementarias' },
];
// Selección provisional: pendiente de validación de obras, fechas y fotografías por el cliente.
export const projects = [
  { title: 'Segundo Anillo Sur', client: 'Metrogas', description: 'Obra de gasoducto Segundo Anillo Sur. Antecedente incluido en la presentación corporativa de Karpa.', image: '/images/segundo-anillo-sur.webp', imageAlt: 'Obra Segundo Anillo Sur, incluida en la presentación corporativa de Karpa', referenceImage: false },
  { image: '/images/obra-gasoducto.webp', imageAlt: 'Obra de cañerías de Karpa', referenceImage: true, title: 'Gas natural para Mones Cazón y Salazar', summary: 'Gasoducto, redes de distribución y estaciones de medición y regulación.', client: 'BAGSA', location: 'Mones Cazón y Salazar, Buenos Aires', description: 'Construcción de gasoducto, redes de polietileno y estaciones de medición y regulación para el suministro de gas natural a ambas localidades.' },
  { image: '/images/karpa-montaje-industrial.jpeg', imageAlt: 'Montaje industrial de cañería', referenceImage: true, title: 'Central Térmica Ezeiza', summary: 'Montaje de cañerías y equipos, aislación térmica y red de incendio.', client: 'Generación Mediterránea', location: 'Ezeiza, Buenos Aires', description: 'Obra mecánica con cañerías de acero y PEAD, montaje de bombas, chillers, compresores, pasarelas, aislación térmica y red de incendio.' },
  { image: '/images/tiendetubos-en-obra.webp', imageAlt: 'Equipos de izaje sobre una excavación', referenceImage: true, title: 'Adecuación de gasoducto y loop', summary: 'Adecuación de gasoducto y loop de 36 y 30 pulgadas.', client: 'TGS', location: 'General Las Heras – General Rodríguez, Buenos Aires', description: 'Adecuación de gasoducto y loop de 36 y 30 pulgadas.' },
  { image: '/images/planta-reguladora.webp', imageAlt: 'Instalación industrial de Karpa', referenceImage: true, title: 'Acueducto principal de General Roca', summary: 'Acueducto, toma de agua, cruces especiales y tendido de fibra óptica.', client: 'Central Térmica Roca', location: 'General Roca, Río Negro', description: 'Cañerías, cruces especiales, toma de agua, obra civil y electromecánica, con tendido de tritubo y fibra óptica.' },
  { image: '/images/izaje-de-caneria.webp', imageAlt: 'Maniobra de izaje de cañería', referenceImage: true, title: 'Loop de gasoducto a Leleque', summary: 'Terminación de un loop de 6 pulgadas y 4.000 metros de extensión.', client: 'Camuzzi Gas Pampeana', location: 'Leleque, Chubut', description: 'Terminación del loop de gasoducto de 6 pulgadas y 4.000 metros de extensión.' },
];
export const equipment = [
  ['Equipo humano y talleres', 'Personal propio capacitado, con talleres de prefabricados y pintura. Trabajo con criterios de seguridad, higiene y calidad.'],
  ['Excavación y movimiento de suelos', 'Retroexcavadoras, pala cargadora, excavadoras sobre orugas, retrocargadoras, minicargadoras, motoniveladora y equipos de compactación.'],
  ['Izaje y transporte', 'Tiendetubos, hidrogrúas, camiones, carretones y semirremolques.'],
  ['Soldadura y montaje', 'Motosoldadoras, soldadoras eléctricas, termofusionadoras y equipos de prefabricado.'],
  ['Cruces y servicios de obra', 'Tuneleras dirigibles, compresores, motobombas y grupos electrógenos.'],
];
