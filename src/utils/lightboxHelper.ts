import { Product } from '../types';
import { LightboxImageItem } from '../components/ImageLightboxModal';

export function getProductLightboxImages(
  product: Product, 
  initialImageSrc?: string
): { images: LightboxImageItem[]; initialIndex: number } {
  const images: LightboxImageItem[] = [];

  // Base gallery images
  if (product.galleryImages && product.galleryImages.length > 0) {
    product.galleryImages.forEach((img, idx) => {
      let title = `${product.name} • Formato ${idx + 1}`;
      let subtitle = idx === 0 
        ? product.subtitle 
        : `Presentación clínica: ${product.dimensions} (${product.unitPerBox} uds/caja)`;

      if (product.brand.toLowerCase().includes('ver3') || product.id.includes('ver3') || product.category === 'ver3_spine') {
        const ver3Descriptions: Record<number, { title: string; subtitle: string }> = {
          0: {
            title: 'Sistema Ver3® Vertres: Implantes de Titanio Ti-6Al-4V ELI (Dorado REF 50-7000 & Azul REF 50-7001)',
            subtitle: 'Morfología biomecánica con trípode expansor tridimensional (150º / 105º) y canulación axial interna para cemento PMMA'
          },
          1: {
            title: 'Técnica Quirúrgica y Restauración Anatómica Vertebral MIS con Cemento PMMA',
            subtitle: 'Despliegue intracorporal del implante expansor Ver3®, restitución de altura del platillo vertebral y estabilización con PMMA'
          },
          2: {
            title: 'Caja de Instrumental Quirúrgico y Bandeja de Esterilización Autoclavable Ver3®',
            subtitle: 'Set de acero quirúrgico con mango en T micrométrico graduado, trocar transpedicular, cánulas coaxiales y dilatadores'
          },
          3: {
            title: 'Folleto Comercial y Presentación de Restauración Vertebral',
            subtitle: 'Documentación clínica oficial para neurocirugía y traumatología de columna'
          },
          4: {
            title: 'Bandejas Quirúrgicas en Pabellón / Quirófano',
            subtitle: 'Instrumentación MIS lista para procedimiento bajo control fluoroscópico'
          },
          5: {
            title: 'Infografía Médica: Despliegue Intracorporal y Soporte PMMA',
            subtitle: 'Cavitación controlada, restauración de altura corporal y consolidación por cementación'
          },
          6: {
            title: 'Implante Ti-6Al-4V ELI Tridimensional Expandido',
            subtitle: 'Geometría en trípode con anclaje biocompatible y canulación axial'
          },
          7: {
            title: 'Técnica de Aumentación Vertebral Transpedicular MIS',
            subtitle: 'Acceso percutáneo unipedicular o bipedicular entre T6 y L5'
          }
        };

        if (ver3Descriptions[idx]) {
          title = ver3Descriptions[idx].title;
          subtitle = ver3Descriptions[idx].subtitle;
        }
      } else if (product.brand.toLowerCase().includes('unomis') || product.id.includes('unomis') || product.category === 'unomis_spine') {
        const unomisDescriptions: Record<number, { title: string; subtitle: string }> = {
          0: {
            title: 'Ficha Técnica Oficial Unomis® MISS (Próximamente): Técnicas CBT o Transpedicular (MaffHealth / Ossyn)',
            subtitle: 'Catálogo de especificaciones biomecánicas, tabla oficial de referencias de tornillos Ø 5.0 a 7.0 mm, barras de 5.5 mm y tornillos de cierre'
          },
          1: {
            title: 'Tornillo Pedicular Poliaxial con Aleta Extendida de Reducción Integrada y Alambre Guía Nitinol',
            subtitle: 'Cabeza diseño en U de bajo perfil con graduación láser 40mm Ø 5.5, doble paso de rosca córtico-esponjosa y fenestraciones'
          },
          2: {
            title: 'Sistema de Fijación Posterior MISS & Técnica CBT Unomis®: Implantes de Titanio Ti-6Al-4V',
            subtitle: 'Ensamble de barras precurvadas de Ø 5.5 mm con tornillos poliaxiales y tornillos de cierre autorroscantes de doble rosca'
          },
          3: {
            title: 'Barras Pre-conformadas de Ø 5.5 mm Punta Proyectil (Bullet Tip) y Tornillos de Cierre',
            subtitle: 'Barras predobladas (40 a 100 mm) y rectas (110 a 160 mm) con extremo ranurado y tornillos de cierre autorroscantes (REF 40044005)'
          },
          4: {
            title: 'Set de Instrumental Quirúrgico Multipropósito y Caja de Esterilización Autoclavable Unomis®',
            subtitle: 'Contenedor quirúrgico rígido con bandejas modulares de silicona, mangos en T ergonómicos azul/verde, dilatadores coaxiales y trocares'
          },
          5: {
            title: 'Abordaje CBT en Línea Media y Fijación Biomecánica en Columna Lumbar L4-L5',
            subtitle: 'Trayectoria cortical medial a lateral cráneo-caudal con barras bullet de 5.5 mm y mínima incisión de 1.8 mm'
          },
          6: {
            title: 'Morfología del Tornillo Poliaxial Córtico-Esponjoso Unomis®',
            subtitle: 'Rango de poliaxialidad multidireccional hasta ±30° y rosca dual que maximiza el anclaje cortical proximal y esponjoso distal'
          },
          7: {
            title: 'Instrumental Especializado de Inserción y Alambres Guía Patentados',
            subtitle: 'Destornilladores canulados, machos de roscar y agujas guía sin interferencia radioscópica'
          },
          8: {
            title: 'Montaje Anatómico de Fijación Vertebral de 4 Tornillos y 2 Barras',
            subtitle: 'Estabilidad de alto torque para pacientes con osteopenia, estenosis multinivel o cirugía de revisión'
          },
          9: {
            title: 'Video Demostrativo de Técnica Quirúrgica Unomis® MISS MaffHealth',
            subtitle: 'Procedimiento quirúrgico completo paso a paso disponible en el visualizador interactivo con enlace oficial de YouTube'
          }
        };

        if (unomisDescriptions[idx]) {
          title = unomisDescriptions[idx].title;
          subtitle = unomisDescriptions[idx].subtitle;
        }
      } else if (product.brand.toLowerCase().includes('openped') || product.id.includes('openped')) {
        const openpedDescriptions: Record<number, { title: string; subtitle: string }> = {
          0: {
            title: 'Sistema de Fijación Pedicular Posterior OpenPed®: Implantes de Titanio Grado Médico Ti-6Al-4V',
            subtitle: 'Tornillos pediculares poliaxiales (±30°) de aleta larga de reducción, barras rectas de 5.5 mm y conector Cross Link telescópico'
          },
          1: {
            title: 'Montaje Biomecánico de Fijación Posterior OpenPed® en Cuadrilátero Rígido',
            subtitle: 'Ensamble de 4 tornillos de reducción con barras rectas de Ø 5.5 mm y estabilizador transversal Cross Link para máxima rigidez torsional'
          },
          2: {
            title: 'Macro Detalle de Tornillo Canulado de Reducción con Fenestración para Cemento PMMA',
            subtitle: 'Aletas largas integradas con ranura de ruptura precisa y canal de inyección para aumentación en pacientes con osteoporosis'
          },
          3: {
            title: 'Conector Transverso Cross Link Telescópico Preensamblado OpenPed® (40~60 mm y 60~90 mm)',
            subtitle: 'Mecanismo de traba dual de alta estabilidad angular que previene la desalineación o rotación del constructo espinal'
          },
          4: {
            title: 'Set de Instrumental Quirúrgico Modular e Inteligente OpenPed® en Bandeja Perforada Autoclavable',
            subtitle: 'Torquímetro calibrado a 8 N·m, torre reductora de aletas, destornilladores canulados y doblador anatómico de barras'
          }
        };

        if (openpedDescriptions[idx]) {
          title = openpedDescriptions[idx].title;
          subtitle = openpedDescriptions[idx].subtitle;
        }
      }

      images.push({
        src: img,
        title,
        subtitle,
        badge: product.badge,
        brand: product.brand,
        category: product.category,
      });
    });
  } else if (product.image) {
    images.push({
      src: product.image,
      title: product.name,
      subtitle: `${product.dimensions} • ${product.unitPerBox} uds/caja • ${product.subtitle}`,
      badge: product.badge,
      brand: product.brand,
      category: product.category,
    });
  }

  // Add chapter images if available
  if (product.videoInfo?.chapters) {
    product.videoInfo.chapters.forEach((chap) => {
      if (chap.image && !images.some((i) => i.src === chap.image)) {
        images.push({
          src: chap.image,
          title: `Ver3®: ${chap.title}`,
          subtitle: chap.description,
          badge: 'Técnica Quirúrgica MIS',
          brand: 'Ver3® Vertres',
          category: 'ver3_spine',
        });
      }
    });
  }

  let initialIndex = 0;
  if (initialImageSrc) {
    const found = images.findIndex((i) => i.src === initialImageSrc);
    if (found >= 0) initialIndex = found;
  }

  return { images, initialIndex };
}
