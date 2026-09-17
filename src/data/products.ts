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
import ver3ExpansionTechImg from '../assets/images/ver3_implant_gold_blue_1789393297131.jpg';
import ver3CatalogSpecImg from '../assets/images/ver3_procedure_spine_1789393307797.jpg';
import ver3SurgicalBoxImg from '../assets/images/ver3_tray_set_1789393321448.jpg';
import ver3BrochureSheetRender from '../assets/images/ver3_brochure_sheet_1789315268176.jpg';
import ver3SurgicalTrayRealRender from '../assets/images/ver3_surgical_tray_real_1789315283694.jpg';
import ver3ExpansionRender from '../assets/images/ver3_expansion_diagram_1789315307326.jpg';
import ver3ImplantRender from '../assets/images/ver3_implant_render_1789171932391.jpg';
import ver3ProcedureRender from '../assets/images/ver3_vertebra_procedure_1789171950061.jpg';
import ver3FluoroscopyRender from '../assets/images/ver3_fluoroscopy_xray_1789171966544.jpg';
import ver3InstrumentTrayRender from '../assets/images/ver3_instrument_set_1789171983847.jpg';
import unomisScrewsCbtImg from '../assets/images/unomis_screws_cbt_1789393571531.jpg';
import unomisTraySetImg from '../assets/images/unomis_tray_set_1789393584375.jpg';
import unomisScrewImg from '../assets/images/unomis_screw_system_1789392871757.jpg';
import unomisInstrumentImg from '../assets/images/unomis_instrument_set_1789392884900.jpg';
import unomisSpineImg from '../assets/images/unomis_cbt_spine_1789392897207.jpg';
import unomisVideoThumbImg from '../assets/images/unomis_video_thumbnail.jpg';
import unomisBrochureSheetImg from '../assets/images/unomis_brochure_official_sheet_1789394025044.jpg';
import unomisScrewReductionMacroImg from '../assets/images/unomis_screw_reduction_macro_1789394040018.jpg';
import unomisRodsAndSetscrewsImg from '../assets/images/unomis_rods_and_setscrews_1789394053076.jpg';
import unomisCbtSpineTechniqueImg from '../assets/images/unomis_cbt_spine_technique_1789394066752.jpg';
import openpedScrewSystemImg from '../assets/images/openped_screw_system_1789647805973.jpg';
import openpedSpineConstructImg from '../assets/images/openped_spine_construct_1789647817689.jpg';
import openpedCrosslinkMacroImg from '../assets/images/openped_crosslink_macro_1789647829791.jpg';
import openpedSurgicalTrayImg from '../assets/images/openped_surgical_tray_1789647844191.jpg';
import openpedReductionScrewImg from '../assets/images/openped_reduction_screw_1789647857074.jpg';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    label: 'Catálogo General Genkimed SpA',
    shortLabel: 'Todos',
    iconName: 'LayoutGrid',
    description: 'Catálogo integral de insumos clínicos, líneas Fixapro®, Alveos®, Ver3®, Unomis® y OpenPed® para instituciones de salud.'
  },
  {
    id: 'spine_surgery',
    label: 'Ossyn',
    shortLabel: 'Ossyn',
    iconName: 'Activity',
    image: openpedSpineConstructImg,
    badge: 'Próximamente • 3 Sistemas',
    comingSoon: true,
    description: 'Categoría Quirúrgica de Columna Ossyn: Soluciones avanzadas de alta tecnología que comprenden el Sistema de Restauración Vertebral Expansible Ver3® Vertres, el Sistema de Fijación Pedicular Percutánea y CBT Unomis® MISS, y el Sistema de Fijación Pedicular Posterior OpenPed® con tornillos de reducción y aumentación PMMA.'
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
  },
  {
    id: 'ver3-vertres-mis',
    name: 'Sistema MIS para Restauración de Fracturas Vertebrales y Aumentación Ver3® Vertres',
    subtitle: 'Implante intracorporal de titanio Ti-6Al-4V ELI expansible tridimensional con técnica de aumentación PMMA (T6-L5)',
    brand: 'Línea Columna MIS • Ver3® Vertres',
    category: 'spine_surgery',
    dimensions: 'Ø 5.0 mm (Dorado) & Ø 5.8 mm (Azul) • Altura 15-17 mm',
    presentation: 'Implante estéril de titanio Ti-6Al-4V ELI en sobre sellado grado médico + Set de instrumental quirúrgico autoclavable',
    unitPerBox: 1,
    masterBoxUnits: 10,
    shortDescription: 'Sistema MIS (Mínimamente Invasivo) intracorporal y controlable para restauración anatómica de altura vertebral y aumentación con cemento óseo PMMA. Especial para fracturas por compresión y osteoporosis.',
    description: 'El Sistema Ver3® Vertres (MaffHealth / Ossyn) es una solución quirúrgica mínimamente invasiva (MIS) intracorporal y controlable, cuyo diseño de expansión tridimensional restaura anatómicamente el cuerpo vertebral y su altura original en el segmento raquídeo comprendido entre T6 y L5.\n\nVertres crea un espacio óptimo y seguro en el cuerpo vertebral colapsado para la técnica de aumentación en su uso previsto con cemento óseo de PMMA. Brinda una distribución homogénea y contenida del cemento, generando un soporte biomecánico estable para máxima funcionalidad y alivio rápido y duradero del dolor en pacientes con fracturas vertebrales dolorosas por compresión (según clasificación de Magerl de tipo A1, A2 y A3), fragilidad ósea generada por osteoporosis severa, lesiones traumáticas o patologías tumorales osteolíticas metastásicas y mieloma.\n\nDisponible en dos referencias codificadas por color: REF 50-7000 (Color Dorado, Ø 5.0 mm sin expandir, longitud 25 mm, altura total expandida 15.0 mm, canal pedicular mín. 6.1 mm) y REF 50-7001 (Color Azul, Ø 5.8 mm sin expandir, longitud 28 mm, altura total expandida 17.0 mm, canal pedicular mín. 6.4 mm).',
    features: [
      'Procedimiento mínimamente invasivo (MIS) con abordaje transpedicular guiado por fluoroscopía',
      'Despliegue mecánico del implante completamente controlable, milimétrico y reversible',
      'Mecanismo de expansión tridimensional (brazos a 150°, 105° y 105°) que restaura activamente la altura del cuerpo vertebral colapsado',
      'Fabricado en aleación de titanio Ti-6Al-4V ELI (Extra Low Interstitial) de máxima biocompatibilidad y resistencia a la fatiga',
      'Diseño con canulación interna patentada para técnica de aumentación gradual y segura con cemento óseo PMMA',
      'Dos presentaciones codificadas por color: Dorado (Ø 5.0 mm / Altura 15 mm) y Azul (Ø 5.8 mm / Altura 17 mm)',
      'Set completo de instrumental quirúrgico ergonómico en caja de esterilización (trocares, dilatadores, cánulas de trabajo, aplicadores y mangos en T)',
      'Minimiza sustancialmente el riesgo de extravasación de cemento óseo hacia el canal raquídeo o plexos venosos'
    ],
    clinicalIndications: [
      'Tratamiento de fracturas dolorosas por compresión según clasificación de Magerl (de tipo A1, A2 y A3)',
      'Hundimiento y colapso de cuerpo vertebral en pacientes con fragilidad ósea por osteoporosis',
      'Fracturas vertebrales por lesiones traumáticas sin disrupción del muro posterior',
      'Patologías tumorales osteolíticas metastásicas o mieloma múltiple con inestabilidad focal',
      'Segmento raquídeo aplicable: columna torácica y lumbar desde T6 hasta L5'
    ],
    technicalSpecs: {
      material: 'Aleación de Titanio Grado Médico Ti-6Al-4V ELI (ASTM F136)',
      adhesive: 'Fijación mecánica osteo-estructural asistida por Cemento Óseo PMMA',
      permeability: 'Canulación interna axial para inyección controlada de cemento',
      sterilization: 'Rayos Gamma / Óxido de Etileno (Implante en doble barrera estéril)',
      shelfLife: '5 años desde fecha de esterilización',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: false
    },
    applicationSteps: [
      '1. Abordaje y toma pedicular: Punción transpedicular bajo visión radioscópica biplanar hasta alcanzar el tercio anterior del cuerpo vertebral.',
      '2. Preparación del canal para la implantación: Introducción de aguja guía, dilatadores seriados y cánula de trabajo coaxial.',
      '3. Implantación Vertres: Inserción del implante cerrado en la posición anatómica predeterminada.',
      '4. Expansión tridimensional segura y progresiva: Accionamiento del mecanismo mecánico de despliegue para restaurar la altura vertebral y crear la cavidad.',
      '5. Preparación e inyección de cemento óseo PMMA: Inyección a baja presión a través de la canulación interna para bañar y estabilizar el implante.',
      '6. Liberación del Vertres: Desacople del instrumental aplicador tras la polimerización del cemento y retiro atraumático de cánulas.'
    ],
    removalProtocol: 'Dispositivo permanente osteo-integrado. El instrumental quirúrgico reutilizable se desmonta, lava con detergente enzimático neutro y autoclaviza a 134°C conforme a norma hospitalaria.',
    certifications: [
      'Certificación ISO 13485 (Sistemas de Gestión de Dispositivos Médicos)',
      'Marcado de Conformidad CE (MaffHealth / Ossyn)',
      'Fabricación Grado Médico Ti-6Al-4V ELI',
      'En proceso de incorporación a Convenio Marco / Mercado Público'
    ],
    image: ver3ExpansionTechImg,
    inStock: false,
    featured: true,
    badge: 'Próximamente',
    hasVideo: true,
    videoInfo: {
      title: 'Vertres - Sistema de Expansión Tridimensional Intracorporal MIS',
      subtitle: 'Video quirúrgico oficial y técnica de restauración anatómica de fracturas por compresión vertebral (VCF)',
      duration: 'Video Oficial',
      author: 'MaffHealth / Ossyn',
      videoUrl: 'https://youtu.be/obF2R_95aLo',
      chapters: [
        {
          time: '00:00 - 00:06',
          seconds: 0,
          title: 'Fase 1: Morfología & Expansión Tridimensional',
          description: 'Estructura biomecánica en titanio Ti-6Al-4V ELI con trípode expansor retráctil (150º / 105º) y apertura axial controlada.',
          image: ver3ExpansionTechImg
        },
        {
          time: '00:06 - 00:12',
          seconds: 6,
          title: 'Fase 2: Instrumental y Acceso Transpedicular MIS',
          description: 'Punción percutánea bajo escopía con aguja trocar ergonómica y cánula dilatadora coaxial hacia T6-L5 en bandejas de esterilización.',
          image: ver3SurgicalBoxImg
        },
        {
          time: '00:12 - 00:18',
          seconds: 12,
          title: 'Fase 3: Elevación Activa y Restauración Anatómica',
          description: 'Despliegue milimétrico con mango graduado en T: restauración de altura vertebral y corrección de cifosis.',
          image: ver3ExpansionRender
        },
        {
          time: '00:18 - 00:24',
          seconds: 18,
          title: 'Fase 4: Control Fluoroscópico C-Arm y Cemento PMMA',
          description: 'Inyección contenida de cemento óseo interbloqueando la jaula y consolidación de la vértebra.',
          image: ver3FluoroscopyRender
        }
      ]
    },
    galleryImages: [
      ver3ExpansionTechImg,
      ver3CatalogSpecImg,
      ver3SurgicalBoxImg,
      ver3BrochureSheetRender,
      ver3SurgicalTrayRealRender,
      ver3ExpansionRender,
      ver3ImplantRender,
      ver3ProcedureRender
    ],
    availableFormats: [
      {
        format: 'Referencia 50-7000 (Color Dorado)',
        inches: 'Ø 5.0 mm x L 25 mm',
        boxUnits: 1,
        targetArea: 'Vértebras Toracolumbares (T6 - L2) / Pedículos estándar',
        clinicalUse: 'Diámetro sin expandir: 5.0 mm | Altura expandida: 15.0 mm | Canal pedicular mín: 6.1 mm',
        technique: 'Abordaje MIS transpedicular unipedicular o bipedicular + Cemento PMMA',
        badge: 'REF 50-7000 (Dorado)',
        refCode: '50-7000',
        image: ver3ExpansionTechImg
      },
      {
        format: 'Referencia 50-7001 (Color Azul)',
        inches: 'Ø 5.8 mm x L 28 mm',
        boxUnits: 1,
        targetArea: 'Vértebras Lumbares (L1 - L5) / Cuerpos vertebrales mayores',
        clinicalUse: 'Diámetro sin expandir: 5.8 mm | Altura expandida: 17.0 mm | Canal pedicular mín: 6.4 mm',
        technique: 'Abordaje MIS transpedicular + Expansión tridimensional 17 mm + Cemento PMMA',
        badge: 'REF 50-7001 (Azul)',
        refCode: '50-7001',
        image: ver3CatalogSpecImg
      }
    ]
  },
  {
    id: 'unomis-spine-system',
    name: 'Sistema de Fijación Pedicular Posterior MISS Unomis®',
    subtitle: 'Fijación Pedicular Mínimamente Invasiva con Trayectoria Cortical CBT y Percutánea en Aleación Ti-6Al-4V (MaffHealth / Ossyn)',
    brand: 'Línea Columna MIS • Unomis® MISS',
    category: 'spine_surgery',
    dimensions: 'Tornillos Ø 5.0 a 7.0 mm (L 30-60 mm) | Barras Bullet Ø 5.5 mm | Poliaxialidad ±30°',
    presentation: 'Sistema Completo de Implantes Estériles Ti-6Al-4V + Set Instrumental Multipropósito Autoclavable',
    unitPerBox: 1,
    masterBoxUnits: 1,
    shortDescription: 'Sistema de concepto MIS (Mínimamente Invasivo) para fijación posterior del segmento raquídeo (T6-L5). Permite técnicas CBT (Trayectoria de Hueso Cortical) o Transpedicular tradicional, con incisión de tan solo 1.8 mm para 4 tornillos, 2 barras y 4 tuercas de cierre. Tornillos canulados y fenestrados con dos pasos de rosca diferentes para fijación mejorada en hueso cortical y esponjoso.',
    description: 'El Sistema de Fijación Pedicular UNOMIS® de MaffHealth y Ossyn es una solución quirúrgica flexible de concepto MIS (Mínimamente Invasivo) para una óptima fijación posterior del segmento raquídeo entre T6 y L5. Permite al cirujano utilizarlo indistintamente en la Técnica CBT (Trayectoria de Hueso Cortical) o en la técnica Transpedicular percutánea.\n\nEn la Trayectoria Cortical (CBT) se incrementa significativamente la fijación debido al mayor contacto en la interface implante-hueso en la zona densa del arco posterior de la columna. El diseño especializado del tornillo Unomis cuenta con dos pasos de rosca diferentes: uno más fino para hueso cortical denso y uno más amplio para hueso esponjoso, maximizando la fuerza de fijación y el torque de inserción.\n\nSu abordaje mínimamente invasivo permite una incisión de apenas 1.8 mm para implantar 4 tornillos, 2 barras y 4 tuercas. Los tornillos cuentan con bajo perfil, cabeza con diseño en U, poliaxialidad de hasta ±30°, aletas extendidas con reducción integrada, canulación axial y fenestración distal para alambre guía flexible de aleación níquel-titanio (Nitinol). Las barras preconformadas de 5.5 mm incorporan punta tipo proyectil (bullet tip) para un deslizamiento subfascial suave, y los tornillos de cierre ofrecen rosca autorroscante doble anti-trasroscado.',
    features: [
      'Concepto MIS (Mínimamente Invasivo): permite incisión de tan solo 1.8 mm para implantar 4 tornillos, 2 barras y 4 tuercas',
      'Diseño especial del tornillo para técnica Trayectoria de Hueso Cortical / CBT (Cortical Bone Trajectory) y Transpedicular (T6-L5)',
      'Mayor contacto en la interfaz de hueso cortical en la zona densa del arco posterior de la columna vertebral',
      'Dos pasos de rosca diferentes: uno más fino para hueso cortical denso y uno más amplio para hueso esponjoso',
      'Material: Aleación de Titanio Grado Médico Ti-6Al-4V de máxima resistencia a la fatiga y biocompatibilidad',
      'Bajo perfil anatómico con cabeza en diseño en U para evitar conflictos facetarios',
      'Tornillos en diámetros Ø 5.0, 5.5, 6.0, 6.5 y 7.0 mm con longitudes de 30 mm a 60 mm',
      'Canulados y fenestrados, autorroscantes para avance atraumático y seguro',
      'Tornillo poliaxial con rango de angulación multidireccional de hasta ± 30°',
      'Aletas extendidas con reducción integrada para descenso percutáneo directo de la barra sin torres voluminosas',
      'Alambre guía flexible en aleación níquel y titanio (Nitinol) sin memoria ni efecto rebote',
      'Barras pre-conformadas de Ø 5.5 mm con diseño MIS y punta tipo proyectil (bullet tip) para inserción subfascial suave',
      'Tornillos de cierre autorroscante y doble rosca (Ref 40044005) para bloqueo confiable y rápido en un solo paso',
      'Set Instrumental Multipropósito en caja rígida perforada autoclavable con 2 bandejas modulares de silicona'
    ],
    clinicalIndications: [
      'Pacientes con osteoporosis y osteopenia con necesidad de anclaje óseo superior',
      'Enfermedades degenerativas de un único nivel (espondilolistesis, inestabilidad raquídea)',
      'Estenosis del canal multinivel lumbar y toracolumbar',
      'Cirugías de revisión y rescate de instrumentaciones previas',
      'Enfermedad del segmento adyacente post-artrodesis',
      'Fijación complementaria en artrodesis intersomática (TLIF, PLIF) con abordaje de línea media MIS'
    ],
    technicalSpecs: {
      material: 'Titanio Grado Médico Ti-6Al-4V (ASTM F136 / ISO 5832-3)',
      adhesive: 'No aplica (Implante osteo-integrable permanente)',
      permeability: 'Canulado y Fenestrado para aguja guía e inyección de cemento si se requiere',
      sterilization: 'Implantes en empaque estéril por radiación Gamma / Instrumental Autoclavable a 134°C',
      shelfLife: '5 años en empaque estéril indemne',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: false
    },
    applicationSteps: [
      '1. Planificación & Marcación: Identificación radioscópica biplanar de los pedículos y selección de técnica (CBT línea media o percutánea).',
      '2. Punción Percutánea & Aguja Guía: Inserción del trocar ergonómico con mango en T y avance del alambre guía de aleación níquel-titanio (Nitinol).',
      '3. Dilatación Coaxial & Preparación: Paso de dilatadores coaxiales seriados y macholado córtico-esponjoso guiado.',
      '4. Inserción de Tornillos Unomis: Inserción del tornillo autorroscante fenestrado guiado por aleta de reducción con verificación visual clara.',
      '5. Paso de Barra Bullet 5.5 mm: Deslizamiento subfascial guiado de la barra de punta proyectil a través de las aletas de reducción.',
      '6. Reducción & Bloqueo en 1 Paso: Descenso activo de la barra en la cabeza poliaxial (±30°) y apriete definitivo del tornillo de cierre autorroscante y doble rosca.'
    ],
    removalProtocol: 'Implante permanente osteo-integrado. El set instrumental reutilizable se procesa en central de esterilización hospitalaria (lavado enzimático y autoclave a 134°C).',
    certifications: [
      'Certificación ISO 13485 (Sistemas de Gestión de Calidad en Dispositivos Médicos)',
      'Marcado CE de Conformidad Médica Quirúrgica (MaffHealth / Ossyn)',
      'Fabricación Grado Médico Ti-6Al-4V (ASTM F136 / ISO 5832-3)',
      'En proceso de incorporación a Convenio Marco / Mercado Público'
    ],
    image: unomisBrochureSheetImg,
    inStock: false,
    featured: true,
    badge: 'Próximamente',
    hasVideo: true,
    videoInfo: {
      title: 'Sistema de Fijación UNOMIS® - Fijación Pedicular Posterior MISS & Técnica CBT',
      subtitle: 'Video oficial de GENKIMED SpA y MaffHealth: abordaje percutáneo, técnica de trayectoria cortical (CBT) y set instrumental multipropósito.',
      duration: 'Video Oficial',
      author: 'GENKIMED / MaffHealth',
      videoUrl: 'https://youtu.be/QdgECEaHqFI',
      chapters: [
        {
          time: '00:00 - 00:30',
          seconds: 0,
          title: 'Fase 1: Trayectoria Cortical (CBT) vs Técnica Tradicional',
          description: 'Comparación anatómica y ventajas biomecánicas del abordaje en línea media CBT para mayor anclaje en hueso cortical denso.',
          image: unomisCbtSpineTechniqueImg
        },
        {
          time: '00:30 - 01:00',
          seconds: 30,
          title: 'Fase 2: Punción Percutánea, Agujas Guía y Canulación Pedicular',
          description: 'Inserción del trocar con mango en T, avance del alambre Kirschner de Nitinol y preparación con cánula coaxial.',
          image: unomisTraySetImg
        },
        {
          time: '01:00 - 01:45',
          seconds: 60,
          title: 'Fase 3: Tornillos Córtico-Esponjosos y Aletas de Reducción',
          description: 'Colocación del tornillo autorroscante fenestrado (Ø 5.0-7.0 mm) con poliaxialidad ±30° y captura directa de la barra.',
          image: unomisScrewReductionMacroImg
        },
        {
          time: '01:45 - 02:30',
          seconds: 105,
          title: 'Fase 4: Paso de Barras Bullet 5.5 mm y Bloqueo en 1 Paso',
          description: 'Inserción de la barra precurvada con punta proyectil y apriete del tornillo de cierre autorroscante de doble rosca.',
          image: unomisRodsAndSetscrewsImg
        }
      ]
    },
    galleryImages: [
      unomisBrochureSheetImg,
      unomisScrewReductionMacroImg,
      unomisScrewsCbtImg,
      unomisRodsAndSetscrewsImg,
      unomisTraySetImg,
      unomisCbtSpineTechniqueImg,
      unomisScrewImg,
      unomisInstrumentImg,
      unomisSpineImg,
      unomisVideoThumbImg
    ],
    availableFormats: [
      {
        format: 'Ficha Técnica Oficial Unomis® MISS (MaffHealth / Ossyn)',
        inches: 'Catálogo de Especificaciones y Tabla de Referencias',
        boxUnits: 1,
        targetArea: 'Información Técnica Oficial para Cirujanos de Columna',
        clinicalUse: 'Brochure clínico oficial que detalla la biomecánica CBT, dos pasos de rosca cortical/esponjosa, tabla de referencias completas y códigos de producto.',
        technique: 'Documento técnico oficial con tablas dimensionales completas',
        badge: 'Folleto Oficial',
        refCode: 'CAT-UNOMIS-2026',
        image: unomisBrochureSheetImg
      },
      {
        format: 'Tornillos UNOMIS Ø 5.0 mm (L: 30, 35, 40, 45 mm)',
        inches: 'Ø 5.0 mm x L 30 - 45 mm • Poliaxial ±30°',
        boxUnits: 1,
        targetArea: 'Pedículos Toracolumbares y Vértebras Lumbares Altas',
        clinicalUse: 'Tornillos córtico-esponjosos autorroscantes, canulados y fenestrados con aletas de reducción integrada y diseño de cabeza en U de bajo perfil.',
        technique: 'Técnica CBT o abordaje percutáneo transpedicular',
        badge: 'REF 40315030 - 45',
        refCode: '40315030-45',
        image: unomisScrewReductionMacroImg
      },
      {
        format: 'Tornillos UNOMIS Ø 5.5 mm (L: 30, 35, 40, 45, 50 mm)',
        inches: 'Ø 5.5 mm x L 30 - 50 mm • Poliaxial ±30°',
        boxUnits: 1,
        targetArea: 'Segmento Lumbar L1 - L4 en Técnica CBT / Transpedicular',
        clinicalUse: 'Calibre más utilizado en técnica CBT. Dos pasos de rosca: fino en cortical posterior y amplio en esponjosa para máximo pull-out.',
        technique: 'Abordaje de línea media con incisión de 1.8 mm',
        badge: 'REF 40315530 - 50',
        refCode: '40315530-50',
        image: unomisScrewReductionMacroImg
      },
      {
        format: 'Tornillos UNOMIS Ø 6.0 mm (L: 30, 35, 40, 45, 50, 55 mm)',
        inches: 'Ø 6.0 mm x L 30 - 55 mm • Poliaxial ±30°',
        boxUnits: 1,
        targetArea: 'Vértebras Lumbares L3 - L5 y Cirugías de Revisión',
        clinicalUse: 'Mayor diámetro para anclaje superior en hueso osteoporótico y vértebras lumbares bajas.',
        technique: 'Técnica CBT o fijación percutánea posterior',
        badge: 'REF 40316030 - 55',
        refCode: '40316030-55',
        image: unomisScrewsCbtImg
      },
      {
        format: 'Tornillos UNOMIS Ø 6.5 & Ø 7.0 mm (L: 30 a 60 mm)',
        inches: 'Ø 6.5 & 7.0 mm x L 30 - 60 mm • Poliaxial ±30°',
        boxUnits: 1,
        targetArea: 'Vértebra L5, Sacro S1 y Casos de Revisión / Osteoporosis Severa',
        clinicalUse: 'Calibres mayores para máxima estabilidad y torque de fijación en hueso de baja densidad.',
        technique: 'Fijación lumbosacra de alta resistencia biomecánica',
        badge: 'REF 40316530 - 40317050',
        refCode: '403165-70',
        image: unomisScrewsCbtImg
      },
      {
        format: 'Barras Predobladas Ø 5.5 mm Punta Proyectil (L: 40 a 100 mm)',
        inches: 'Ø 5.5 mm x L 40, 45, 50, 60, 70, 80, 90, 100 mm',
        boxUnits: 1,
        targetArea: 'Fijación Uninivel y Multinivel Lumbar',
        clinicalUse: 'Curvatura lordótica preformada y punta tipo proyectil (bullet tip) con extremo ranurado para inserción subfascial percutánea suave.',
        technique: 'Inserción subfascial guiada a través de aletas de reducción',
        badge: 'REF 41003040 - 100',
        refCode: '41003040-100',
        image: unomisRodsAndSetscrewsImg
      },
      {
        format: 'Barras Rectas Ø 5.5 mm Punta Cónica (L: 110 a 160 mm)',
        inches: 'Ø 5.5 mm x L 110, 120, 130, 140, 150, 160 mm',
        boxUnits: 1,
        targetArea: 'Construcciones Multinivel y Corrección de Deformidades',
        clinicalUse: 'Barras rectas de titanio con punta cónica y extremo ranurado para construcciones multinivel.',
        technique: 'Paso percutáneo o mini-open',
        badge: 'REF 410006110 - 160',
        refCode: '410006110-160',
        image: unomisRodsAndSetscrewsImg
      },
      {
        format: 'Tornillos de Cierre Autorroscante y Doble Rosca (Set Screws)',
        inches: 'Rosca Métrica Especial con Huella Hexalobular Anti-trasroscado',
        boxUnits: 1,
        targetArea: 'Bloqueo Definitivo de Barra en Tulipán Poliaxial',
        clinicalUse: 'Bloqueo seguro en un solo paso con rosca inversa y doble paso que evita el trasroscado accidental.',
        technique: 'Apriete final controlado con limitador de torque dinamométrico',
        badge: 'REF 40044005',
        refCode: '40044005',
        image: unomisRodsAndSetscrewsImg
      },
      {
        format: 'Set Instrumental Multipropósito Autoclavable Unomis®',
        inches: 'Caja Contenedor Rígido + 2 Bandejas Modulares de Silicona',
        boxUnits: 1,
        targetArea: 'Pabellón Quirúrgico de Columna / Instrumental de Cirujano',
        clinicalUse: 'Set completo: mangos en T ergonómicos verde y azul, destornilladores canulados, trocar, dilatadores coaxiales, alambres guía Nitinol y llave dinamométrica.',
        technique: 'Esterilización en autoclave a 134°C. Instrumental ergonómico y de precisión',
        badge: 'Set Instrumental',
        refCode: 'UNOMIS-SET',
        image: unomisTraySetImg
      }
    ]
  },
  {
    id: 'openped-spine-system',
    name: 'Sistema de Fijación Pedicular Posterior OpenPed®',
    subtitle: 'Sistema de tornillos poliaxiales de titanio Ti-6Al-4V con aleta de reducción, canulación para aumentación PMMA, barras 5.5 mm y conector transverso Cross Link',
    brand: 'OpenPed®',
    category: 'spine_surgery',
    dimensions: 'Tornillos Ø 4.5 - 6.0 mm (L: 30 - 50 mm) • Barras Ø 5.5 mm • Cross Link 40-90 mm',
    presentation: 'Sistema Quirúrgico Modular de Columna • Implantes de Titanio Grado Médico + Set Instrumental Inteligente',
    unitPerBox: 1,
    masterBoxUnits: 1,
    shortDescription: 'Sistema de fijación pedicular posterior de aleación Ti-6Al-4V con tornillos poliaxiales (±30°) de aleta larga de reducción, versiones canuladas con ranura distal para aumentación con PMMA y no canuladas, barras rectas de Ø 5.5 mm y conector transverso Cross Link telescópico.',
    description: 'El Sistema de Fijación Pedicular Posterior de Columna OpenPed® (MaffHealth / Ossyn) constituye una plataforma quirúrgica integral y de alta resistencia biomecánica, desarrollada específicamente para procedimientos de artrodesis y estabilización torácica, lumbar y sacra en pacientes esqueléticamente maduros.\n\nConstruido en aleación de Titanio Grado Médico (Ti-6Al-4V según normativas internacionales ASTM F136 e ISO 5832-3), el sistema incorpora tornillos pediculares autorroscantes de perfil optimizado con aletas integradas de reducción, concebidos para facilitar el descenso progresivo y controlado de la barra sin forzar la interfase hueso-implante en espondilolistesis y fracturas complejas.\n\nLa versión canulada dispone de una fenestración lateral distal especialmente diseñada para la inyección segura y controlada de cemento óseo biocompatible (PMMA), brindando un anclaje superior y minimizando el riesgo de aflojamiento o pull-out en pacientes con densidad mineral ósea disminuida (osteopenia u osteoporosis severa). Su poliaxialidad multidireccional de hasta ± 30° agiliza la captura de las barras rectas de Ø 5.5 mm (disponibles en longitudes de 60 a 400 mm).\n\nPara maximizar la estabilidad torsional y rigidez transversal de montajes uni y multinivel, el sistema incorpora conectores transversos preensamblados Cross Link en dos rangos telescópicos (40–60 mm y 60–90 mm) junto a tornillos de cierre autorroscantes de rosca inversa y doble paso que suprimen el trasroscado accidental.',
    features: [
      'Aleación de Titanio Grado Médico Ti-6Al-4V de máxima resistencia a fatiga y biocompatibilidad (ASTM F136 / ISO 5832-3).',
      'Tornillos poliaxiales autorroscantes con aletas extendidas de reducción para reducción anatómica progresiva de la barra.',
      'Versión Canulada con fenestración distal para inyección controlada de cemento óseo PMMA (Aumentación en osteoporosis).',
      'Versión No Canulada (Sólida) de alto torque de inserción para hueso cortical y esponjoso estándar.',
      'Doble rosca con paso fino proximal para anclaje cortical superior y paso amplio distal para soporte esponjoso.',
      'Cabezal poliaxial esférico con ángulo de articulación multidireccional de hasta ± 30° para fácil alineación con la barra.',
      'Conectores transversos Cross Link preensamblados telescópicos en 40~60 mm (REF 40050000) y 60~90 mm (REF 40057000).',
      'Barras rectas de Titanio Ø 5.5 mm en longitudes estándar (60 a 120 mm) y extendidas (200 a 400 mm) para deformidades y trauma.',
      'Tornillo de cierre (Set Screw) con rosca métrica especial y huella hexagonal/torx anti-trasroscado (REF 40044005).',
      'Set instrumental inteligente autoclavable con mango dinamométrico regulado a 8 N·m, destornilladores canulados y torre reductora.'
    ],
    clinicalIndications: [
      'Espondilolistesis ístmica, degenerativa o traumática que requiera reducción progresiva de la traslación vertebral.',
      'Estenosis del canal lumbar con inestabilidad biomecánica o espondilosis sintomática multinivel.',
      'Fracturas y luxaciones toracolumbares y lumbosacras con compromiso de muro medio o posterior.',
      'Deformidades del raquis (escoliosis del adulto, cifosis degenerativa y desbalance sagital).',
      'Cirugía de revisión por falla o aflojamiento de instrumentaciones previas (re-operaciones).',
      'Pseudoartrosis y fallas de fusión intersomática previa en segmento toracolumbar.',
      'Inestabilidades post-descompresión, laminectomía extensa o discectomía amplia.',
      'Pacientes con osteoporosis u osteopenia documentada candidatos a aumentación cementada con PMMA mediante tornillo canulado.'
    ],
    technicalSpecs: {
      material: 'Aleación de Titanio Ti-6Al-4V Grado Médico (ASTM F136 / ISO 5832-3)',
      adhesive: 'No aplica (Implante osteointegrable de fijación interna rígida)',
      permeability: 'Implante biocompatible, no magnético, químicamente inerte y compatible con RMN postquirúrgica',
      sterilization: 'Implantes provistos estériles o no estériles en empaque individual / Instrumental autoclavable a 134°C',
      shelfLife: '5 años para implantes en empaque estéril indemnne',
      latexFree: true,
      hypoallergenic: true,
      radiotransparent: false
    },
    applicationSteps: [
      'Posicionamiento del paciente en decúbito prono sobre marco radiotransparente y comprobación radioscópica AP y Lateral.',
      'Abordaje posterior estándar o mini-open hasta exponer los puntos de entrada anatómicos pediculares.',
      'Apertura del punto de entrada cortical con punzón o gubia, seguida del sondaje pedicular con palpador táctil.',
      'En pacientes con osteopenia, inserción de tornillo pedicular canulado de reducción OpenPed® guiado sobre K-wire.',
      'Para casos que requieran aumentación, conexión de cánula dosificadora de cemento e inyección lenta de PMMA bajo fluoroscopía continua.',
      'Modelado sagital de la barra recta Ø 5.5 mm adaptando la lordosis lumbar anatómica e inserción en el canal en U.',
      'Descenso gradual de la barra mediante tornillo de cierre a través de las aletas de reducción hasta el asiento definitivo.',
      'Ajuste final del conector transverso Cross Link con torquímetro dinamométrico calibrado y separación limpia de las aletas de reducción.'
    ],
    removalProtocol: 'Dispositivo osteointegrado permanente. Retiro indicado únicamente bajo criterio clínico calificado (infección profunda tardía, reintervención o indicación expresa del especialista). Instrumental quirúrgico reutilizable procesable en central de esterilización hospitalaria.',
    certifications: [
      'Certificación ISO 13485 (Sistemas de Gestión de Calidad para Dispositivos Médicos)',
      'Marcado CE de Conformidad Médica para Implantes Quirúrgicos (MaffHealth / Ossyn)',
      'Aleación Ti-6Al-4V según normas ASTM F136 e ISO 5832-3',
      'Cumplimiento de Estándar de Biocompatibilidad ISO 10993',
      'En proceso de homologación técnica para Mercado Público / Cenabast'
    ],
    image: openpedScrewSystemImg,
    inStock: false,
    featured: true,
    badge: 'Próximamente',
    hasVideo: false,
    galleryImages: [
      openpedScrewSystemImg,
      openpedSpineConstructImg,
      openpedReductionScrewImg,
      openpedCrosslinkMacroImg,
      openpedSurgicalTrayImg
    ],
    availableFormats: [
      {
        format: 'Tornillo Canulado con Aleta de Reducción Ø 4.5 mm (L: 30, 35, 40 mm)',
        inches: 'Ø 4.5 mm x Longitudes 30, 35, 40 mm • Poliaxial ±30° • Ranura Aumentación PMMA',
        boxUnits: 1,
        targetArea: 'Pedículos Torácicos Medios e Inferiores / Columna Pediátrica y del Adulto',
        clinicalUse: 'Tornillo canulado autorroscante con aleta larga separable y orificio para K-wire o cemento PMMA.',
        technique: 'Inserción transpedicular con aleta reductora y opción de cementación distal',
        badge: 'REF 40184530 - 40',
        refCode: '40184530-40',
        image: openpedReductionScrewImg
      },
      {
        format: 'Tornillo Canulado con Aleta de Reducción Ø 5.0 mm (L: 30, 35, 40, 45, 50 mm)',
        inches: 'Ø 5.0 mm x Longitudes 30, 35, 40, 45, 50 mm • Poliaxial ±30° • Con Aumentación',
        boxUnits: 1,
        targetArea: 'Vértebras Torácicas Bajas (T9-T12) y Lumbares Altas (L1-L2)',
        clinicalUse: 'Calibre intermedio de alta versatilidad clínica para osteosíntesis toracolumbar y fracturas por compresión.',
        technique: 'Reducción progresiva de la barra mediante aleta extendida y fijación fenestrada',
        badge: 'REF 40185030 - 50',
        refCode: '40185030-50',
        image: openpedReductionScrewImg
      },
      {
        format: 'Tornillo Canulado con Aleta de Reducción Ø 6.0 mm (L: 35, 40, 45, 50 mm)',
        inches: 'Ø 6.0 mm x Longitudes 35, 40, 45, 50 mm • Poliaxial ±30° • Aumentable PMMA',
        boxUnits: 1,
        targetArea: 'Vértebras Lumbares Medias y Bajas (L3-L5) y Promontorio Sacro S1',
        clinicalUse: 'Máximo diámetro y agarre en cuerpos vertebrales de gran volumen. Ranura para cementación en hueso osteopénico.',
        technique: 'Anclaje de alta resistencia para espondilolistesis y fusiones lumbosacras',
        badge: 'REF 40186035 - 50',
        refCode: '40186035-50',
        image: openpedReductionScrewImg
      },
      {
        format: 'Tornillo Sólido (No Canulado) con Aleta de Reducción Ø 4.5 mm (L: 30, 35, 40 mm)',
        inches: 'Ø 4.5 mm x Longitudes 30, 35, 40 mm • Titanio Sólido Ti-6Al-4V • Poliaxial ±30°',
        boxUnits: 1,
        targetArea: 'Raquis Torácico y Vértebras con Morfología Estrecha',
        clinicalUse: 'Estructura sólida maciza de titanio para soporte estricto sin necesidad de paso de alambre guía o cemento.',
        technique: 'Inserción directa previa preparación de trayecto con punzón y macho',
        badge: 'REF 40174530 - 40',
        refCode: '40174530-40',
        image: openpedScrewSystemImg
      },
      {
        format: 'Tornillo Sólido (No Canulado) con Aleta de Reducción Ø 5.0 mm (L: 30, 35, 40, 45, 50 mm)',
        inches: 'Ø 5.0 mm x Longitudes 30, 35, 40, 45, 50 mm • Titanio Sólido • Aleta Desmontable',
        boxUnits: 1,
        targetArea: 'Transición Toracolumbar T11 - L2 y Deformidades del Adulto',
        clinicalUse: 'Excelente rigidez torsional y resistencia a fuerzas de cizallamiento con aletas para reducción de deformidad.',
        technique: 'Guía de barra asistida por aletas largas con ruptura limpia posterior',
        badge: 'REF 40175030 - 50',
        refCode: '40175030-50',
        image: openpedScrewSystemImg
      },
      {
        format: 'Tornillo Sólido (No Canulado) con Aleta de Reducción Ø 6.0 mm (L: 35, 40, 45, 50 mm)',
        inches: 'Ø 6.0 mm x Longitudes 35, 40, 45, 50 mm • Titanio Sólido • Poliaxial ±30°',
        boxUnits: 1,
        targetArea: 'Vértebras Lumbares y Fijación Sacra en Hueso de Buena Densidad',
        clinicalUse: 'Diseñado para pacientes sin necesidad de aumentación que requieran alta solidez en artrodesis lumbar.',
        technique: 'Fijación transpedicular rígida de alta estabilidad biomecánica',
        badge: 'REF 40176035 - 50',
        refCode: '40176035-50',
        image: openpedScrewSystemImg
      },
      {
        format: 'Conector Transverso Cross Link Preensamblado (Rango 40 ~ 60 mm)',
        inches: 'Extensión Telescópica 40 a 60 mm • Compatible Barras Ø 5.5 mm',
        boxUnits: 1,
        targetArea: 'Puente Transversal en Construcciones Torácicas y Lumbares Cortas',
        clinicalUse: 'Conector preensamblado que une rígidamente ambas barras longitudinales para evitar rotación y aumentar la rigidez torsional.',
        technique: 'Bloqueo rápido con prisionero central y mordazas con tornillos de apriete',
        badge: 'REF 40050000',
        refCode: '40050000',
        image: openpedCrosslinkMacroImg
      },
      {
        format: 'Conector Transverso Cross Link Preensamblado (Rango 60 ~ 90 mm)',
        inches: 'Extensión Telescópica 60 a 90 mm • Compatible Barras Ø 5.5 mm',
        boxUnits: 1,
        targetArea: 'Puente Transversal en Raquis Lumbar Ancho y Zona Lumbosacra',
        clinicalUse: 'Diseño extendido para fijaciones amplias o cuando la separación interpendicular es superior a 60 mm.',
        technique: 'Fijación transversal en cuadrilátero biomecánico',
        badge: 'REF 40057000',
        refCode: '40057000',
        image: openpedCrosslinkMacroImg
      },
      {
        format: 'Barras Rectas de Titanio Ø 5.5 mm (L: 60, 80, 100, 120 mm)',
        inches: 'Ø 5.5 mm x Longitudes 60, 80, 100, 120 mm • Ti-6Al-4V',
        boxUnits: 1,
        targetArea: 'Fijaciones Uninivel y Binivel Lumbar y Torácico',
        clinicalUse: 'Barras cilíndricas de titanio grado médico con acabado pulido, moldeables con curvador in-situ o bender de mesa.',
        technique: 'Fijación longitudinal sagital con perfiles de lordosis anatómica',
        badge: 'REF 40047060 - 120',
        refCode: '40047060-120',
        image: openpedCrosslinkMacroImg
      },
      {
        format: 'Barras Rectas de Titanio Ø 5.5 mm (L: 200, 250, 300, 350, 400 mm)',
        inches: 'Ø 5.5 mm x Longitudes 200, 250, 300, 350, 400 mm • Construcción Larga',
        boxUnits: 1,
        targetArea: 'Construcciones Multinivel, Escoliosis, Cifosis y Trauma Extenso',
        clinicalUse: 'Barras de gran longitud para corrección de deformidades tridimensionales del raquis.',
        technique: 'Corrección secuencial de deformidad con moldeado multiaxial',
        badge: 'REF 40040200 - 400',
        refCode: '40040200-400',
        image: openpedCrosslinkMacroImg
      },
      {
        format: 'Tornillo de Cierre Autorroscante (Set Screw OpenPed®)',
        inches: 'Rosca Inversa Métrica Especial y Huella Hexalobular Anti-splay',
        boxUnits: 1,
        targetArea: 'Bloqueo Definitivo de Barra en Tulipán Poliaxial de Reducción',
        clinicalUse: 'Bloqueo seguro que previene la apertura de los brazos del cabezal y garantiza compresión uniforme sobre la barra.',
        technique: 'Apriete final con limitador de torque dinamométrico a 8 N·m',
        badge: 'REF 40044005',
        refCode: '40044005',
        image: openpedReductionScrewImg
      },
      {
        format: 'Set Instrumental Quirúrgico Modular e Inteligente OpenPed®',
        inches: 'Caja Contenedor de Aluminio Anodizado + Bandejas con Silicona Perforada',
        boxUnits: 1,
        targetArea: 'Pabellón Quirúrgico de Columna / Instrumental de Cirujano',
        clinicalUse: 'Set completo con torquímetro dinamométrico calibrado, destornilladores canulados, torre reductora, sonda pedicular, macho de rosca y modelador de barras.',
        technique: 'Esterilización en autoclave a 134°C. Instrumental ergonómico de alta precisión',
        badge: 'Set Instrumental',
        refCode: 'OPENPED-SET',
        image: openpedSurgicalTrayImg
      }
    ]
  }
];

export const CLINICAL_RECOMMENDATIONS: ClinicalProcedureRecommendation[] = [
  {
    id: 'rec-openped-spine',
    procedureName: 'Fijación Pedicular Posterior de Columna con Tornillos de Reducción y Aumentación (OpenPed®)',
    specialty: 'Cirugía de Columna / Traumatología Raquídea / Neurocirugía',
    recommendedProductIds: ['openped-spine-system'],
    clinicalRationale: 'El sistema OpenPed® proporciona una solución versátil y robusta para la estabilización toracolumbar y lumbosacra en pacientes esqueléticamente maduros. Sus tornillos con aletas de reducción facilitan el descenso atraumático de la barra en espondilolistesis y fracturas, mientras que la canulación con fenestraciones distales permite aumentación con cemento PMMA en pacientes con calidad ósea comprometida. El conector transverso Cross Link confiere máxima rigidez torsional en montajes uni y multinivel.',
    bestPracticeTip: 'En pacientes con osteopenia u osteoporosis, utilizar la versión canulada de OpenPed® con inyección de cemento PMMA de viscosidad media-alta bajo control radioscópico continuo para prevenir fugas y asegurar un anclaje óptimo.'
  },
  {
    id: 'rec-unomis-cbt-spine',
    procedureName: 'Fijación Pedicular Posterior Mínimamente Invasiva MISS (CBT y Percutánea)',
    specialty: 'Cirugía de Columna / Neurocirugía / Traumatología / Pabellón Central',
    recommendedProductIds: ['unomis-spine-system'],
    clinicalRationale: 'El sistema Unomis® permite estabilización pedicular posterior con abordaje en línea media mediante técnica CBT (Trayectoria Cortical), maximizando el contacto con hueso cortical de alta densidad en pacientes osteopénicos o con cirugías previas, complementado con tornillos de reducción integrada y barras bullet de 5.5 mm.',
    bestPracticeTip: 'Aprovechar las aletas con agujas guías patentadas para verificar bajo radioscopía la correcta orientación transpedicular sin generar sombra ni interferencia en el campo quirúrgico.'
  },
  {
    id: 'rec-vertebral-fracture',
    procedureName: 'Restauración de Fracturas Vertebrales y Cifoplastia MIS (T6-L5)',
    specialty: 'Traumatología de Columna / Neurocirugía / Pabellón de Especialidades',
    recommendedProductIds: ['ver3-vertres-mis'],
    clinicalRationale: 'El sistema Ver3® Vertres restaura mecánicamente la altura del cuerpo vertebral mediante expansión tridimensional controlable de titanio Ti-6Al-4V ELI, creando una cavidad confinada que optimiza la distribución de cemento óseo PMMA y alivia el dolor de inmediato.',
    bestPracticeTip: 'Comprobar la indemnidad del muro posterior mediante TC o radioscopía previa para prevenir extravasación del cemento hacia el canal raquídeo.'
  },
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
