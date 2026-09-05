import { Product, CategoryInfo, ClinicalProcedureRecommendation } from '../types';
import ivDressingImg from '../assets/images/fixapro_iv_dressing_1787826940251.jpg';
import iv85115Img from '../assets/images/fixapro_iv_85115_box_1788609084073.jpg';
import iv5057Img from '../assets/images/fixapro_iv_5057_box_1788609097600.jpg';
import ivChgImg from '../assets/images/fixapro_iv_chg_box_1788609590452.jpg';
import filmImg from '../assets/images/fixapro_film_catalog_1788607969207.jpg';
import film6070Img from '../assets/images/fixapro_film_6x7_box_1788608846740.jpg';
import film1012Img from '../assets/images/fixapro_film_1012_1788607998506.jpg';
import film1025Img from '../assets/images/fixapro_film_1025_1788608014213.jpg';
import tapesImg from '../assets/images/fixapro_cinta_medica_1788470942070.jpg';
import bandageImg from '../assets/images/fixapro_venda_elastica_1788470133493.jpg';
import alveosSuctionImg from '../assets/images/alveos_sonda_aspiracion_1788469371748.jpg';
import alveosNebulizerImg from '../assets/images/alveos_nebulizador_1788469487644.jpg';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    label: 'Catálogo General Genkimed SpA',
    shortLabel: 'Todos',
    iconName: 'LayoutGrid',
    description: 'Catálogo integral de insumos clínicos, líneas Fixapro® y Alveos® para instituciones de salud.'
  },
  {
    id: 'wound_care',
    label: 'Apósitos Film Fixapro® Transparentes (Gama Completa)',
    shortLabel: 'Fixapro® Film',
    iconName: 'HeartPulse',
    image: film1012Img,
    description: 'Películas de poliuretano estériles transparentes con marco tipo ventana: 10x12 cm (caja x50), 10x25 cm (caja x30) y 6x7 cm (caja x100) para heridas postoperatorias, laparotomías y protección dérmica.'
  },
  {
    id: 'iv_fixation',
    label: 'Apósitos Fixapro® IV & CVC Advanced (Gama Completa)',
    shortLabel: 'Fixapro® Advanced & CHG',
    iconName: 'ShieldCheck',
    image: iv85115Img,
    description: 'Línea institucional Fixapro® Advanced y CHG: 8.5x11.5 cm CHG Antimicrobiano (Caja x25, Cód. 55432), 8.5x11.5 cm CVC (Caja x50), 5x5.7 cm Pediátrico (Caja x100) y 6.5x7 cm CVP (Caja x100).'
  },
  {
    id: 'nebulizers',
    label: 'Kits de Micronebulización Alveos® (Adulto & Pediátrico)',
    shortLabel: 'Nebulizadores',
    iconName: 'Wind',
    image: alveosNebulizerImg,
    description: 'Kits de micronebulización completos con mascarilla ergonómica (Adulto y Pediátrico), vaso dosificador 6cc y tubo anticolapso 2.1m.'
  },
  {
    id: 'respiratory',
    label: 'Sondas de Aspiración Traqueal Alveos® (6 a 18 FR)',
    shortLabel: 'Sondas de Aspiración',
    iconName: 'Pipette',
    image: alveosSuctionImg,
    description: 'Sondas de aspiración traqueal con control de succión digital y código de color ISO.'
  },
  {
    id: 'tapes',
    label: 'Cintas Médicas y Quirúrgicas Fixapro®',
    shortLabel: 'Cintas Médicas',
    iconName: 'Bandage',
    image: tapesImg,
    description: 'Cintas de papel microporoso hipoalergénicas para fijación de apósitos y sondas.'
  },
  {
    id: 'bandages',
    label: 'Vendas Elásticas y Compresión Fixapro®',
    shortLabel: 'Vendas Elásticas',
    iconName: 'Activity',
    image: bandageImg,
    description: 'Vendas elásticas de compresión y soporte flexible con clips de sujeción para esguinces, torceduras y sujeción articular.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'fixapro-iv-adv-line',
    name: 'Apósitos Transparentes Fixapro® IV & CVC Advanced (Línea Completa)',
    subtitle: 'Formatos clínicos de 5x5.7 cm, 6.5x7 cm y 8.5x11.5 cm con marco fenestrado reforzado y tiras de sujeción',
    brand: 'Fixapro®',
    category: 'iv_fixation',
    dimensions: '8.5x11.5 cm CHG (x25), 8.5x11.5 cm (x50), 5x5.7 cm (x100), 6.5x7 cm (x100)',
    presentation: '8.5x11.5 cm CHG en caja de 25 unidades (Cód. 55432); 8.5x11.5 cm en caja de 50 unidades (REF 20-001); formatos 5x5.7 cm y 6.5x7 cm en cajas de 100 unidades',
    unitPerBox: 50,
    masterBoxUnits: 1000,
    shortDescription: 'Línea completa de apósitos estériles transparentes Fixapro® Advanced: 8.5x11.5 cm CHG antimicrobiano (Caja x25), 8.5x11.5 cm CVC (Caja x50 Uds), 5x5.7 cm (Caja x100 Uds) y 6.5x7 cm (Caja x100 Uds) con marco fenestrado reforzado y tiras de fijación vascular.',
    description: 'La gama Fixapro® IV & CVC Advanced reúne los formatos esenciales para la fijación y protección aséptica de accesos vasculares en centros hospitalarios y clínicas: apósito CHG antimicrobiano con clorhexidina al 2% (8.5 x 11.5 cm, Cód. 55432, Caja x25), formato central para catéteres CVC, PICC y líneas medias (8.5 x 11.5 cm, REF 20-001, Caja x50), formato para vías venosas periféricas estándar (6.5 x 7 cm, REF 20-005, Caja x100) y formato pediátrico/neonatal (5 x 5.7 cm, REF 20-002, Caja x100). Todos los modelos incorporan membrana de poliuretano de alta transmisión de vapor acuoso (MVTR > 3000 g/m²/24h), adhesivo acrílico hipoalergénico sensible a la presión, refuerzo perimetral no tejido que previene el despegue de bordes por tracción mecánica, ranura fenestrada que abraza el cuerpo del catéter, y tiras adhesivas de sujeción estériles independientes con área rotulable para registro clínico.',
    features: [
      'Gama integral en 4 presentaciones: 8.5x11.5 cm CHG al 2% (Cód. 55432), 8.5x11.5 cm (CVC REF 20-001), 6.5x7 cm (CVP REF 20-005) y 5x5.7 cm (Pediátrico REF 20-002)',
      'Membrana de poliuretano semipermeable de alto MVTR (> 3000 g/m²/24h) que previene maceración dérmica',
      'Marco de aplicación tipo ventana que asegura posicionamiento aséptico y libre de arrugas',
      'Borde perimetral reforzado no tejido que amortigua fuerzas mecánicas y evita levantamiento prematuro',
      'Muesca fenestrada profunda diseñada para sellar anatómicamente alrededor de las aletas y conector del catéter',
      'Incluye tiras adhesivas no tejidas estériles adicionales de sujeción y rotulación de fecha/operador',
      'Permite monitorización visual permanente del punto de punción sin levantar el apósito (prevención IAAS)',
      '100% libre de látex, esterilizado individualmente en sobre grado médico peel-open'
    ],
    clinicalIndications: [
      'Fijación y cobertura aséptica de catéteres venosos periféricos (CVP 18G a 26G) en adultos y pediatría',
      'Fijación de catéteres venosos centrales (CVC de 2 a 4 lúmenes), líneas PICC y catéteres de hemodiálisis',
      'Protección continua del sitio de inserción vascular contra bacterias, virus (≥27nm) y fluidos',
      'Servicios de Urgencia, Pabellón, Cuidados Intensivos (UCI/UTI), Oncología y Hospitalización General'
    ],
    technicalSpecs: {
      material: 'Poliuretano médico microporoso (20-25 micras) con borde reforzado no tejido de micropoliéster Spunlace',
      adhesive: 'Acrílico hipoalergénico grado médico sensible a la presión (PSA) libre de solventes y látex',
      permeability: 'MVTR > 3000 a 3400 g/m²/24h (alta transpirabilidad)',
      sterilization: 'Óxido de Etileno (EO) / Radiación Gamma según norma ISO 11135',
      shelfLife: '5 años desde fecha de fabricación',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: true
    },
    availableFormats: [
      {
        format: '8.5 cm x 11.5 cm (REF 20-001)',
        inches: '8.5 x 11.5 cm (CVC/PICC)',
        boxUnits: 50,
        refCode: 'REF 20-001',
        image: iv85115Img,
        targetArea: 'Catéteres Centrales (CVC, PICC, Líneas Medias)',
        clinicalUse: 'Accesos vasculares centrales subclavios, yugulares, braquiales y catéteres de hemodiálisis',
        technique: 'Marco reforzado de gran cobertura con 2 tiras de fijación cruzada y etiqueta de registro clínico',
        badge: 'CVC & Central • Caja x50'
      },
      {
        format: '8.5 cm x 11.5 cm CHG (Cód. 55432)',
        inches: '8.5 x 11.5 cm + CHG',
        boxUnits: 25,
        refCode: 'CÓD. 55432',
        image: ivChgImg,
        targetArea: 'Accesos Centrales de Alto Riesgo (CVC, PICC, Hemodiálisis)',
        clinicalUse: 'Prevención activa de bacteriemia (CRBSI/CLABSI) mediante almohadilla con Gluconato de Clorhexidina al 2%',
        technique: 'Almohadilla antiséptica integrada con CHG que libera protección antimicrobiana continua hasta por 7 días',
        badge: 'CHG 2% • Caja x25'
      },
      {
        format: '5.0 cm x 5.7 cm (REF 20-002)',
        inches: '5 x 5.7 cm (Pediátrico)',
        boxUnits: 100,
        refCode: 'REF 20-002',
        image: iv5057Img,
        targetArea: 'Neonatología, Pediatría y Venas Pequeñas',
        clinicalUse: 'Fijación de catéteres periféricos pequeños (22G a 26G) en neonatos, lactantes y niños',
        technique: 'Diseño anatómico reducido con muesca profunda adaptable a zonas de flexión pediátricas',
        badge: 'Pediátrico • Caja x100'
      },
      {
        format: '6.5 cm x 7.0 cm (REF 20-005)',
        inches: '6.5 x 7 cm (CVP)',
        boxUnits: 100,
        refCode: 'REF 20-005',
        image: ivDressingImg,
        targetArea: 'Vías Venosas Periféricas (CVP Adultos)',
        clinicalUse: 'Fijación y cobertura de catéteres periféricos 18G a 24G en antebrazo y dorso de mano',
        technique: 'Marco fenestrado con ranura para aletas de catéter, tira estabilizadora y tira de rotulación',
        badge: 'Estándar Adulto • Caja x100'
      }
    ],
    applicationSteps: [
      'Desinfectar la piel con solución antiséptica y asegurar el secado completo por evaporación.',
      'Seleccionar el formato Fixapro® Advanced adecuado (5x5.7 cm pediátrico, 6.5x7 cm CVP o 8.5x11.5 cm central).',
      'Retirar el papel protector inferior exponiendo la superficie adhesiva.',
      'Centrar la ventana transparente sobre el punto de punción y alinear la hendidura con el cuerpo del catéter.',
      'Presionar suavemente desde el centro hacia los extremos para una adherencia homogénea.',
      'Retirar el marco superior de papel tirando de la pestaña lateral de apoyo.',
      'Fijar las aletas con la tira estéril suministrada y rotular fecha, hora y firma del profesional.'
    ],
    removalProtocol: 'Sostener firmemente el catéter. Levantar un borde del apósito y estirarlo tangencialmente paralelo a la superficie cutánea (estiramiento horizontal longitudinal) para desadherir suavemente sin tracción dolorosa ni riesgo de desplazamiento del acceso vascular.',
    certifications: ['ISO 13485:2016', 'Certificación CE 0123', 'Aprobación FDA 510(k)', 'Libre de Látex'],
    image: iv85115Img,
    galleryImages: [iv85115Img, ivChgImg, iv5057Img, ivDressingImg],
    inStock: true,
    featured: true,
    badge: 'Línea Fixapro® • Formatos Clínicos & CHG'
  },
  {
    id: 'fixapro-film-line',
    name: 'Apósitos Film Fixapro® Transparentes (Línea Completa)',
    subtitle: 'Película estéril de poliuretano microporoso en 10x12 cm (Caja x50), 10x25 cm (Caja x30) y 6x7 cm (Caja x100) con marco tipo ventana',
    brand: 'Fixapro®',
    category: 'wound_care',
    dimensions: '10x12 cm (x50), 10x25 cm (x30), 6x7 cm (x100)',
    presentation: 'Cajas institucionales: 10x12 cm (Caja x50), 10x25 cm (Caja x30) y 6x7 cm (Caja x100) estériles individuales',
    unitPerBox: 50,
    masterBoxUnits: 1000,
    shortDescription: 'Línea completa de películas de poliuretano transparentes estériles Fixapro® Film con marco tipo ventana: 10x12 cm (caja x50), 10x25 cm (caja x30) y 6x7 cm (caja x100) para protección dérmica, heridas postoperatorias y laparotomías.',
    description: 'La gama Fixapro® Film reúne los 3 formatos quirúrgicos e institucionales oficiales de apósitos transparentes estériles de grado médico: formato quirúrgico estándar de 10 x 12 cm (REF 20-008, Caja x50 unidades), formato extendido de 10 x 25 cm para laparotomías y esternotomías (REF 20-010, Caja x30 unidades) y formato menor de 6 x 7 cm (REF 20-007, Caja x100 unidades). Su lámina ultrafina de 20 micras hidrofilizada es totalmente impermeable a bacterias, virus y fluidos externos, permitiendo al mismo tiempo una alta tasa de transmisión de vapor de agua (MVTR > 3000 g/m²/24h) que previene la maceración dérmica y promueve la cicatrización en ambiente húmedo fisiológico.',
    features: [
      'Gama oficial en 3 presentaciones: 10x12 cm (Caja x50), 10x25 cm (Caja x30) y 6x7 cm (Caja x100)',
      'Película de poliuretano microporoso de 20 micras de alta elasticidad y memoria dimensional',
      'Marco perimetral de aplicación tipo ventana con lengüeta que garantiza colocación aséptica sin arrugas',
      'Barrera microbiana estéril impermeable al agua que permite el aseo y duchas asistidas del paciente',
      'Transparencia óptica continua para inspección visual directa de la herida sin retirar el apósito',
      'Adhesivo acrílico hipoalergénico sensible a la presión con permanencia clínica de hasta 7 días',
      '100% libre de látex, esterilizado individualmente en sobre grado médico peel-open'
    ],
    clinicalIndications: [
      'Cobertura e impermeabilización de incisiones quirúrgicas postoperatorias limpias (laparotomías, cesáreas, esternotomías)',
      'Protección de piel frágil o en riesgo por fricción mecánica y cizallamiento',
      'Fijación secundaria estéril de gasas, apósitos primarios y apósitos activos',
      'Zonas donantes de injertos cutáneos, quemaduras superficiales de primer grado y abrasiones dérmicas'
    ],
    technicalSpecs: {
      material: 'Poliuretano elastomérico grado médico hidrofilizado microporoso (20 micras)',
      adhesive: 'Acrílico médico hipoalergénico sensible a la presión (PSA) libre de solventes y látex',
      permeability: 'MVTR > 2800 a 3200 g/m²/24h (alta permeabilidad al vapor acuoso)',
      sterilization: 'Óxido de Etileno (EO) conforme a ISO 11135',
      shelfLife: '5 años desde fecha de fabricación',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: true
    },
    availableFormats: [
      {
        format: '10.0 cm x 12.0 cm (REF 20-008)',
        inches: '10 x 12 cm (Quirúrgico)',
        boxUnits: 50,
        refCode: 'REF 20-008',
        image: film1012Img,
        targetArea: 'Incisiones Quirúrgicas Postoperatorias',
        clinicalUse: 'Curación de heridas limpias (cesáreas, apendicectomías, artroscopías) y cobertura impermeable',
        technique: 'Marco perimetral de centrado rápido, adaptabilidad a zonas anatómicas móviles y sellado estéril',
        badge: 'Caja x50 Uds'
      },
      {
        format: '10.0 cm x 25.0 cm (REF 20-010)',
        inches: '10 x 25 cm (Laparotomía)',
        boxUnits: 30,
        refCode: 'REF 20-010',
        image: film1025Img,
        targetArea: 'Cirugía Mayor, Laparotomías y Traumatología',
        clinicalUse: 'Incisiones quirúrgicas extensas abdominales, esternotomías, traumatología y reemplazos articulares',
        technique: 'Longitud extendida de 25 cm para cierre continuo y estéril de heridas quirúrgicas longitudinales',
        badge: 'Caja x30 Uds'
      },
      {
        format: '6.0 cm x 7.0 cm (REF 20-007)',
        inches: '6 x 7 cm (Menor)',
        boxUnits: 100,
        refCode: 'REF 20-007',
        image: film6070Img,
        targetArea: 'Heridas Menores, Abrasiones y Sitios de Punción',
        clinicalUse: 'Protección de heridas superficiales, incisiones menores, fijación de apósitos y prevención de fricción',
        technique: 'Marco perimetral tipo ventana con pestaña de desprendimiento para aplicación aséptica libre de tensión',
        badge: 'Caja x100 Uds'
      }
    ],
    applicationSteps: [
      'Limpiar y secar minuciosamente la piel perilesional garantizando hemostasia completa.',
      'Seleccionar el formato Fixapro® Film idóneo según la extensión de la herida o incisión.',
      'Retirar el papel protector inferior exponiendo la superficie adhesiva estéril.',
      'Centrar el film sobre la lesión sin estirar ni elongar mecánicamente la película.',
      'Presionar suavemente desde el centro hacia los bordes para una adhesión homogénea.',
      'Retirar el marco superior de papel tirando suavemente de la pestaña perimetral.'
    ],
    removalProtocol: 'Sostener la piel perilesional con una mano. Con la otra, levantar suavemente un extremo del film y estirar horizontalmente de forma tangencial a la superficie de la piel para romper la adherencia de forma atraumática.',
    certifications: ['ISO 13485:2016', 'Certificación CE 0123', 'Aprobación FDA 510(k)', 'Libre de Látex'],
    image: film1012Img,
    galleryImages: [film1012Img, film1025Img, film6070Img, filmImg],
    inStock: true,
    featured: true,
    badge: 'Línea Fixapro® • 3 Formatos'
  },
  {
    id: 'fixapro-micropore-25',
    name: 'Cinta Médica Fixapro® Papel Microporoso 2.5 cm x 9.1 m',
    subtitle: 'Cinta quirúrgica de papel microporoso hipoalergénico color piel',
    brand: 'Fixapro®',
    category: 'tapes',
    dimensions: '2.5 cm x 9.14 m (1 pulgada)',
    presentation: 'Caja dispensadora con 12 rollos individuales',
    unitPerBox: 12,
    masterBoxUnits: 120,
    shortDescription: 'Cinta médica de papel microporoso hipoalergénico color piel, suave y transpirable para curaciones y fijación general.',
    description: 'Cinta adhesiva quirúrgica microporosa de alta calidad en tono piel natural. Su adhesivo hipoalergénico sensible a la presión permite una fijación segura sin irritar la piel, facilitando la respiración dérmica normal y retirándose con mínima molestia.',
    features: [
      'Papel no tejido con microperforaciones que permiten el flujo de aire y humedad',
      'Tono piel discreto y estético ideal para rostro, cuello y extremidades visibles',
      'No deja residuos pegajosos en la piel ni en equipos médicos',
      'Fácil de rasgar en forma bidireccional sin necesidad de tijeras',
      'Apta para todo tipo de piel, incluyendo recién nacidos y ancianos'
    ],
    clinicalIndications: [
      'Fijación de gasas, apósitos primarios y apósitos de curación plana',
      'Aseguramiento de líneas de suero, sondas nasogástricas y tubos de drenaje livianos',
      'Uso diario en consultas médicas, dentales y enfermería'
    ],
    technicalSpecs: {
      material: 'Fibras de rayón no tejidas de alta pureza color piel',
      adhesive: 'Acrilato hipoalergénico libre de solventes agresivos',
      permeability: 'Alta microporosidad transpirable',
      sterilization: 'No estéril (apta para desinfección superficial)',
      shelfLife: '5 años',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: true
    },
    applicationSteps: [
      'Cortar la longitud deseada rasgando con los dedos.',
      'Aplicar sobre piel limpia sin estirar excesivamente.',
      'Frotar suavemente para activar el adhesivo sensible a la presión.'
    ],
    removalProtocol: 'Desprender tirando en ángulo suave hacia el crecimiento del vello.',
    certifications: ['ISO 13485:2016', 'CE Mark', 'Libre de Látex'],
    image: tapesImg,
    inStock: true,
    featured: true,
    badge: 'Básico Esencial Clínico'
  },
  {
    id: 'alveos-sonda-asp',
    name: 'Sondas de Aspiración Traqueal Alveos® (6 FR a 18 FR)',
    subtitle: 'Gama completa de calibres 6 FR a 18 FR con conector codificado por color ISO',
    brand: 'Alveos®',
    category: 'respiratory',
    dimensions: 'Calibres 6 FR a 18 FR • Largo 48 cm',
    presentation: 'Cajas con 50 unidades estériles c/u en empaque individual peel-pack',
    unitPerBox: 50,
    masterBoxUnits: 500,
    shortDescription: 'Sonda de aspiración endotraqueal estéril de PVC termosensible con conector de succión y código de colores internacional ISO en calibres desde 6 FR hasta 18 FR.',
    description: 'La línea completa de Sondas de Aspiración Traqueal Alveos® cubre todos los requerimientos clínicos desde neonatología y pediatría hasta adultos y pacientes de alto flujo (calibres 6 FR, 8 FR, 10 FR, 12 FR, 14 FR, 16 FR y 18 FR). Fabricadas en cloruro de polivinilo (PVC) termosensible y siliconado de grado médico, se ablandan a la temperatura corporal garantizando una inserción atraumática a través de tubos endotraqueales, cánulas de traqueostomía o vías aéreas naturales. Cuentan con conector ergonómico codificado por color, punta roma no cortante con dos orificios laterales contrapuestos y línea radiopaca continua.',
    features: [
      'Disponibilidad de calibres completos: 6 FR, 8 FR, 10 FR, 12 FR, 14 FR, 16 FR y 18 FR',
      'Conectores ergonómicos codificados por color según estándar internacional ISO',
      'PVC grado médico termosensible y siliconado que se suaviza a 37°C para inserción atraumática',
      'Punta roma redondeada y dos orificios laterales elípticos pulidos sin rebordes cortantes',
      'Línea radiopaca longitudinal continua para verificación inmediata en radiografía de tórax',
      'Graduación centimétrica en el cuerpo del catéter para control exacto de profundidad',
      'Esterilización individual por Óxido de Etileno (EO), 100% libre de látex'
    ],
    availableCalibers: [
      { gauge: '6 FR', colorName: 'Verde Claro', hexColor: '#86EFAC', description: 'Neonatal / Lactante menor (Largo 48 cm)' },
      { gauge: '8 FR', colorName: 'Azul', hexColor: '#60A5FA', description: 'Pediátrico (Largo 48 cm)' },
      { gauge: '10 FR', colorName: 'Negro', hexColor: '#334155', description: 'Pediátrico mayor / Adulto pequeño (Largo 48 cm)' },
      { gauge: '12 FR', colorName: 'Blanco', hexColor: '#E2E8F0', description: 'Adulto estándar (Largo 48 cm)' },
      { gauge: '14 FR', colorName: 'Verde', hexColor: '#22C55E', description: 'Adulto / Secreciones densas (Largo 48 cm)' },
      { gauge: '16 FR', colorName: 'Naranja', hexColor: '#F97316', description: 'Adulto alto flujo / Traqueostomía (Largo 48 cm)' },
      { gauge: '18 FR', colorName: 'Rojo', hexColor: '#EF4444', description: 'Alto flujo / Urgencia & Pabellón (Largo 48 cm)' }
    ],
    clinicalIndications: [
      'Aspiración de secreciones en pacientes con vía aérea artificial (TOT o Cánula de Traqueostomía)',
      'Higiene bronquial en Unidades de Paciente Crítico (UPC, UCI/UTI Adulto, Pediátrica y Neonatal)',
      'Procedimientos kinésicos de desobstrucción traqueal, orofaríngea y nasofaríngea',
      'Manejo de hipersecreción bronquial, aspiración de fluidos en pabellón quirúrgico y urgencias',
      'Compatibilidad universal con tubos endotraqueales calibres 2.5 mm a 9.0 mm'
    ],
    technicalSpecs: {
      material: 'PVC grado médico termosensible y siliconado con línea radiopaca continua',
      adhesive: 'N/A (Dispositivo de aspiración / vía aérea)',
      permeability: 'Hermético con alta resistencia estructural al colapso por presión negativa hasta -500 mmHg',
      sterilization: 'Óxido de Etileno (EO) individual estéril',
      shelfLife: '5 años desde fecha de esterilización',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: false
    },
    applicationSteps: [
      'Seleccionar el calibre adecuado de sonda (6 FR a 18 FR) de acuerdo a la edad, diámetro del tubo o características del exudado.',
      'Verificar la indemnidad del empaque estéril peel-pack individual y fecha de caducidad.',
      'Conectar el extremo cónico ergonómico al tubo del sistema de aspiración central o portátil.',
      'Introducir la sonda por la vía aérea artificial con técnica estéril sin accionar la succión.',
      'Al alcanzar la profundidad deseada, accionar la succión y retirar lentamente con giros suaves (máximo 10-15 segundos por pasada).',
      'Lavar el circuito con solución fisiológica o agua estéril y descartar el dispositivo según normativa REAS.'
    ],
    removalProtocol: 'Dispositivo descartable de un solo uso. Retirar con técnica aséptica y desechar inmediatamente en bolsa de residuos bioinfecciosos.',
    certifications: ['ISO 13485:2016', 'Certificación CE 0197', 'Aprobación FDA 510(k)', 'Libre de Látex'],
    image: alveosSuctionImg,
    inStock: true,
    featured: true,
    badge: 'Línea Alveos® • 6 a 18 FR'
  },
  {
    id: 'alveos-kit-nebulizador',
    name: 'Kit Mascarilla con Nebulizador Alveos® (Adulto y Pediátrico)',
    subtitle: 'Set completo con vaso micronebulizador 6cc, tubo anticolapso 2.1m y mascarilla ergonómica (Adulto / Pediátrico)',
    brand: 'Alveos®',
    category: 'nebulizers',
    dimensions: 'Adulto y Pediátrico / Tubo 2.1 m / Vaso 6cc',
    presentation: 'Cajas institucionales de 50 kits completos envasados individualmente (Adulto / Pediátrico)',
    unitPerBox: 50,
    masterBoxUnits: 200,
    shortDescription: 'Kit de aerosolterapia clínica Alveos® con vaso dosificador de 6cc hermético, tubo anticolapso de 2.1 metros y mascarilla facial ergonómica disponible en formato Adulto y Pediátrico (Caja x50 kits individuales).',
    description: 'La línea institucional de Kits de Mascarilla con Micronebulizador Alveos® (Adulto y Pediátrico) está formulada para la administración homogénea y eficiente de aerosoles terapéuticos (broncodilatadores, corticoides inhalados, mucolíticos y soluciones salinas) en hospitales, clínicas y salas ERA/IRA. Ambos formatos incorporan un vaso micronebulizador de alta precisión que genera una nube ultrafina con partículas respirables (MMAD < 5 micras) con mínimo volumen residual, rosca antiderrame con inclinación funcional hasta 45°, y tubo de extensión estriado interiormente con diseño estrella que previene el estrangulamiento del flujo. La versión Adulto cuenta con mascarilla ergonómica de vinilo suave con clip nasal maleable, mientras que la versión Pediátrica está contorneada específicamente para la fisonomía de lactantes y niños con bordes suaves que no ejercen presión dérmica lesiva. Totalmente libres de látex e hipoalergénicos.',
    features: [
      'Disponible en formatos Adulto (REF NEB-AD) y Pediátrico (REF NEB-PED)',
      'Vaso micronebulizador de 6cc de alta eficiencia con escala volumétrica nítida y cierre hermético antigoteo',
      'Generación de partículas respirables profundas (MMAD < 5 micras) a flujos clínicos de 6 a 8 L/min',
      'Tubo corrugado de 2.1 metros con lumen interior estrella (Star-Lumen) resistente al colapso y torsión',
      'Mascarilla de vinilo transparente grado médico hipoalergénico con banda de fijación occipital y clip nasal ajustable',
      '100% libre de látex y plastificantes nocivos, empaque higiénico individual'
    ],
    clinicalIndications: [
      'Manejo de crisis asmáticas, broncoespasmo agudo y reagudizaciones de EPOC en adultos',
      'Tratamiento de bronquiolitis, laringitis obstructiva y asma bronquial en salas IRA y pediatría',
      'Aerosolterapia con antibióticos y mucolíticos en pacientes hospitalizados y domiciliarios',
      'Servicios de Urgencia, Cuidados Intensivos (UCI/UTI), Salas ERA-IRA y Medicina Interna'
    ],
    technicalSpecs: {
      material: 'Vinilo transparente grado médico hipoalergénico + PP de alta resistencia química',
      adhesive: 'N/A',
      permeability: 'Hermético en vaso dosificador con sistema antigoteo hasta 45° de inclinación',
      sterilization: 'Empaque higiénico sellado individualmente',
      shelfLife: '5 años',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: true
    },
    availableFormats: [
      {
        format: 'Formato Adulto (REF NEB-AD)',
        inches: 'Adulto',
        boxUnits: 50,
        targetArea: 'Adultos y Adolescentes',
        clinicalUse: 'Aerosolterapia hospitalaria, EPOC, asma aguda y fluidificación bronquial',
        technique: 'Mascarilla ergonómica de vinilo suave con clip nasal maleable y banda elástica occipital regulable',
        badge: 'Línea Adulto'
      },
      {
        format: 'Formato Pediátrico (REF NEB-PED)',
        inches: 'Pediátrico',
        boxUnits: 50,
        targetArea: 'Lactantes, Niños y Población Infantil',
        clinicalUse: 'Salas IRA, Pediatría de Urgencia, bronquiolitis, laringitis y asma infantil',
        technique: 'Mascarilla contorneada con bordes redondeados atraumáticos de baja presión facial dérmica',
        badge: 'Línea Infantil'
      }
    ],
    applicationSteps: [
      'Seleccionar el kit de mascarilla según la edad y anatomía del paciente (Adulto o Pediátrico).',
      'Dosificar la solución o medicamento en el vaso micronebulizador (volumen recomendado de 3 a 5 cc).',
      'Enroscar firmemente la tapa del vaso y acoplar la mascarilla en la salida superior.',
      'Conectar el conector universal del tubo Star-Lumen a la toma de oxígeno o aire medicinal con flujo regulado a 6-8 L/min.',
      'Posicionar la mascarilla sobre nariz y boca asegurando un sellado suave con la banda elástica.',
      'Nebulizar hasta el agotamiento de la solución (aproximadamente 10 a 15 minutos).'
    ],
    removalProtocol: 'Cerrar la fuente de flujo, retirar la mascarilla, higienizar el rostro del paciente y descartar según protocolo institucional de IAAS.',
    certifications: ['ISO 13485:2016', 'CE', 'FDA 510(k)', 'Libre de Látex'],
    image: alveosNebulizerImg,
    inStock: true,
    featured: true,
    badge: 'Línea Alveos® • Adulto / Pediátrico'
  },
  {
    id: 'fixapro-vendas-elasticas',
    name: 'Vendas Elásticas Fixapro® de Compresión (Línea Completa: 2", 3", 4" y 5")',
    subtitle: 'Formatos clínicos de 5 cm, 7.5 cm, 10 cm y 12.7 cm • Caja dispensadora x12 unidades c/2 broches',
    brand: 'Fixapro®',
    category: 'bandages',
    dimensions: '5.0 cm, 7.5 cm, 10.0 cm y 12.7 cm x 4.5 m (2", 3", 4" y 5")',
    presentation: 'Cajas dispensadoras de 12 unidades individuales con 2 broches metálicos cada una',
    unitPerBox: 12,
    masterBoxUnits: 144,
    shortDescription: 'Línea hospitalaria de vendas elásticas de compresión y soporte articular Fixapro® (12% Spandex, 88% Poliéster, 100% libres de látex). Disponibles en anchos de 5 cm (2"), 7.5 cm (3"), 10 cm (4") y 12.7 cm (5") x 4.5 m estirada. Presentación en caja dispensadora institucional de 12 unidades individuales con 2 clips metálicos por rollo.',
    description: 'La línea institucional de Vendas Elásticas Fixapro® ofrece compresión continua, adaptable y de grado médico para el tratamiento integral de esguinces, torceduras, contusiones articulares, soporte postoperatorio y control del edema en traumatología y servicios de urgencia. Fabricadas con una mezcla premium de 12% Spandex y 88% Poliéster, proporcionan una fuerza de restitución elástica constante sin deformarse ni aflojarse con el movimiento del paciente. Su estructura textil porosa es 100% libre de látex e hipoalergénica, garantizando máxima tolerancia dermatológica sin riesgo de dermatitis ni maceración. Cada rollo cuenta con envoltura higiénica individual y dos broches / clips metálicos elásticos de anclaje rápido. Son lavables y reutilizables con 5 años de vida útil certificada.',
    features: [
      'Gama completa de anchos hospitalarios: 5.0 cm (2"), 7.5 cm (3"), 10.0 cm (4") y 12.7 cm (5") x 4.5 m',
      'Composición técnica: 12% Spandex y 88% Poliéster de grado médico hospitalario',
      '100% Libre de látex: hipoalergénica, previene reacciones alérgicas y dermatitis por contacto',
      'Memoria elástica prolongada: mantiene tensión uniforme y compresión graduada constante',
      'Incluye 2 broches metálicos con alma elástica por cada rollo para sujeción firme sin desplazamientos',
      'Bordes rematados de alta resistencia que evitan deshilacharse o generar efecto torniquete',
      'Tejido poroso transpirable que permite la ventilación cutánea evitando la humedad atrapada',
      'Lavable en agua tibia y reutilizable sin pérdida de propiedades elásticas',
      'Presentación institucional en caja dispensadora de 12 unidades selladas individualmente',
      'Vida útil prolongada de 5 años desde fecha de fabricación'
    ],
    clinicalIndications: [
      'Tratamiento funcional y estabilización de esguinces articulares (grados I y II) de tobillo, muñeca, codo y rodilla',
      'Control y reabsorción del edema periarticular postraumático y postquirúrgico',
      'Compresión venosa y profilaxis de éstasis en miembros inferiores tras cirugías vasculares o traumatológicas',
      'Soporte muscular en desgarros, distensiones y contracturas de gemelos, cuádriceps o isquiotibiales',
      'Inmovilización y fijación de paquetes compresivos, apósitos quirúrgicos, férulas y tablillas traumatológicas',
      'Vendaje compresivo y modelador en muñones de amputación y cirugía reconstructiva'
    ],
    technicalSpecs: {
      material: '12% Spandex y 88% Poliéster de grado médico hospitalario',
      adhesive: 'Fijación mecánica mediante 2 clips metálicos ajustables incluidos (sin adhesivo)',
      permeability: 'Estructura textil porosa de alta transpirabilidad y permeabilidad al aire',
      sterilization: 'No estéril (lavable a mano y reutilizable)',
      shelfLife: '5 años desde fecha de fabricación',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: true
    },
    availableFormats: [
      {
        format: '5.0 cm x 4.5 m (2")',
        inches: '2 Pulgadas (5.08 cm)',
        boxUnits: 12,
        targetArea: 'Muñeca, Mano, Dedos y Traumatología Pediátrica',
        clinicalUse: 'Inmovilización de articulaciones pequeñas, soporte ligamentoso de muñeca y vendajes en extremidades infantiles o de menor calibre.',
        technique: 'Técnica circular o en espiral cruzada sobre mano y muñeca con compresión elástica suave sin estrangulamiento.',
        badge: 'Pediatría & Muñeca'
      },
      {
        format: '7.5 cm x 4.5 m (3" / 7.62 cm)',
        inches: '3 Pulgadas (7.62 cm)',
        boxUnits: 12,
        targetArea: 'Tobillo, Pie, Muñeca, Codo y Antebrazo',
        clinicalUse: 'Formato estándar de alta rotación en urgencias para el manejo de esguinces de tobillo (grados I y II), contusiones y fijación de férulas.',
        technique: 'Vendaje en ocho (figura de 8) cruzando la articulación tibiotarsiana a 90° de flexión funcional con anclaje firme.',
        badge: 'Alta Rotación Urgencias'
      },
      {
        format: '10.0 cm x 4.5 m (4")',
        inches: '4 Pulgadas (10.16 cm)',
        boxUnits: 12,
        targetArea: 'Rodilla, Pantorrilla, Pierna y Extremidades Mayores',
        clinicalUse: 'Compresión postoperatoria (artroscopías de rodilla), contención de desgarros musculares, soporte venoso y grandes apósitos.',
        technique: 'Vendaje en espiga ascendente desde distal hacia proximal solapando dos tercios de la vuelta anterior sin presionar la rótula.',
        badge: 'Pabellón & Traumatología'
      },
      {
        format: '12.7 cm x 4.5 m (5" / 15 cm)',
        inches: '5 Pulgadas (12.70 cm / Formato Ancho)',
        boxUnits: 12,
        targetArea: 'Muslo, Cadera, Hombro, Tórax y Muñones',
        clinicalUse: 'Cobertura rápida de segmentos corporales extensos, vendajes compresivos torácicos, fijación de apósitos post-laparotomía y muñones.',
        technique: 'Vendaje amplio con distribución homogénea de la tensión elástica evitando pliegues en superficies cóncavas.',
        badge: 'Formato Extra Ancho'
      }
    ],
    applicationSteps: [
      '1. Limpiar y secar la superficie cutánea asegurando que no existan heridas abiertas sin apósito primario.',
      '2. Colocar la articulación o segmento corporal en posición funcional anatómica (ej. tobillo a 90° o rodilla en semiflexión).',
      '3. Seleccionar el ancho adecuado según la zona: 5 cm (muñeca/dedos), 7.5 cm (tobillo/antebrazo), 10 cm (rodilla/pierna) o 12.7 cm (muslo/tórax).',
      '4. Iniciar el vendaje desde la zona más distal con dos vueltas circulares de anclaje a tensión suave.',
      '5. Desenrollar hacia proximal superponiendo entre el 50% y 66% del ancho de la venda en cada vuelta (técnica en ocho o espiga).',
      '6. Mantener una presión elástica homogénea y continua, evitando zonas de estrangulamiento o pliegues.',
      '7. Fijar el extremo terminal enganchando con seguridad los dos clips metálicos elásticos sobre una zona muscular sin prominencia ósea.',
      '8. Verificar temperatura, sensibilidad y llenado capilar distal (< 2 segundos) tras finalizar la colocación.'
    ],
    removalProtocol: 'Desenganchar los dos broches de sujeción metálicos y desenrollar cuidadosamente sin tirones bruscos. Para su reutilización, lavar a mano con agua templada (máximo 30°C) y jabón neutro, enjuagar bien y secar extendido en plano a la sombra (no retorcer ni planchar).',
    certifications: ['ISO 13485:2016', 'Certificación CE', '100% Libre de Látex', 'Grado Médico Hospitalario'],
    image: bandageImg,
    inStock: true,
    featured: true,
    badge: 'Línea Vendas Fixapro®'
  }
];

export const CLINICAL_RECOMMENDATIONS: ClinicalProcedureRecommendation[] = [
  {
    id: 'rec-respiratory-suction',
    procedureName: 'Aspiración de Secreciones Traqueales / Manejo de Vía Aérea',
    specialty: 'Kinesiología Respiratoria / UCI / Urgencia',
    recommendedProductIds: ['alveos-sonda-asp'],
    clinicalRationale: 'La sonda de aspiración Alveos® permite realizar la desobstrucción traqueobronquial con óptima calibración de vacío protegiendo la mucosa respiratoria de microtraumatismos.',
    bestPracticeTip: 'No aplicar succión durante la introducción de la sonda; activar la succión solo durante la retirada suave con movimientos rotatorios durante un máximo de 10 a 15 segundos.'
  },
  {
    id: 'rec-nebulization-therapy',
    procedureName: 'Aerosolterapia y Nebulización Clínica',
    specialty: 'Medicina Respiratoria / Pediatría / Sala ERA-IRA',
    recommendedProductIds: ['alveos-kit-nebulizador'],
    clinicalRationale: 'El kit de nebulización Alveos® con vaso dosificador de 6cc y formatos Adulto y Pediátrico genera partículas respirables (MMAD < 5 micras) garantizando una deposición bronquial homogénea del fármaco broncodilatador.',
    bestPracticeTip: 'Asegurar que el paciente mantenga una posición semi-Fowler durante la sesión para optimizar la expansión torácica y la penetración del aerosol.'
  },
  {
    id: 'rec-cvp',
    procedureName: 'Canalización y Fijación de Vía Venosa Periférica (CVP)',
    specialty: 'Enfermería General / Urgencias / Hospitalizados',
    recommendedProductIds: ['fixapro-iv-adv-line', 'fixapro-micropore-25'],
    clinicalRationale: 'El apósito Fixapro® IV Advanced 6.5x7 cm con marco fenestrado previene el movimiento mecánico del catéter reduciendo el riesgo de flebitis y extravasación.',
    bestPracticeTip: 'Permitir el secado completo de la piel antes de aplicar el apósito transparente para maximizar la adherencia y evitar dermatitis por contacto.'
  },
  {
    id: 'rec-cvc-picc',
    procedureName: 'Curación y Fijación de Vía Central / PICC',
    specialty: 'UCI / Cuidados Intermedios / Oncología',
    recommendedProductIds: ['fixapro-iv-adv-line', 'fixapro-film-line'],
    clinicalRationale: 'Requiere el apósito reforzado Fixapro® CVC 8.5x11.5 cm con alta tasa de permeabilidad al vapor de agua (MVTR) para prevenir la humedad debajo del apósito y bacteriemias asociadas a catéter central (IAAS).',
    bestPracticeTip: 'Efectuar cambio de apósito cada 7 días o inmediatamente si se encuentra despegado, húmedo o con presencia de secreciones bajo la película.'
  },
  {
    id: 'rec-surgical-wound',
    procedureName: 'Protección y Curación de Heridas Quirúrgicas',
    specialty: 'Cirugía General / Pabellón / Maternidad',
    recommendedProductIds: ['fixapro-film-line', 'fixapro-micropore-25'],
    clinicalRationale: 'El apósito transparente Fixapro® Film (formatos 6x7, 10x12 y 10x25 cm) protege la incisión frente a patógenos externos y fluidos, permitiendo la transpiración dérmica y la inspección visual permanente sin levantar la curación.',
    bestPracticeTip: 'Aplicar sin tensión mecánica sobre la herida para evitar fuerzas de cizallamiento en los bordes suturados.'
  },
  {
    id: 'rec-sprain-compression',
    procedureName: 'Vendaje Compresivo, Inmovilización Articular y Manejo de Esguinces',
    specialty: 'Traumatología / Urgencias / Kinesiología / Policlínico de Curaciones',
    recommendedProductIds: ['fixapro-vendas-elasticas'],
    clinicalRationale: 'Las vendas elásticas Fixapro® (12% Spandex, 88% Poliéster, 100% libres de látex) proveen soporte flexible continuo para limitar el edema postraumático y estabilizar la articulación sin estrangular la extremidad ni provocar dermatitis por contacto.',
    bestPracticeTip: 'Aplicar el vendaje en posición funcional anatómica desde la porción distal hacia la proximal con técnica en espiga o en ocho; afianzar con los clips provistos evitando presionar salientes óseas y evaluar el llenado capilar distal.'
  }
];

export const CHILE_REGIONS = [
  'Región Metropolitana de Santiago',
  'Región de Arica y Parinacota',
  'Región de Tarapacá',
  'Región de Antofagasta',
  'Región de Atacama',
  'Región de Coquimbo',
  'Región de Valparaíso',
  'Región del Libertador Gral. Bernardo O’Higgins',
  'Región del Maule',
  'Región de Ñuble',
  'Región del Biobío',
  'Región de La Araucanía',
  'Región de Los Ríos',
  'Región de Los Lagos',
  'Región de Aysén del Gral. Carlos Ibáñez del Campo',
  'Región de Magallanes y de la Antártica Chilena'
];
