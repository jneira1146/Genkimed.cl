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
      } else if (product.brand.toLowerCase().includes('openped') || product.id.includes('openped') || product.category === 'openped_spine') {
        const openpedDescriptions: Record<number, { title: string; subtitle: string }> = {
          0: {
            title: 'Sistema OpenPed®: Tornillos Poliaxiales de Reducción en Titanio Ti-6Al-4V (Próximamente)',
            subtitle: 'Doble rosca córtico-esponjosa, aleta extendida de reducción desmontable y canulación fenestrada para inyección de PMMA'
          },
          1: {
            title: 'Montaje Anatómico Biomecánico de Fijación Lumbar Posterior con Barras Ø 5.5 mm y Cross Link',
            subtitle: 'Estabilidad tridimensional rígida con tornillos poliaxiales (±30°), puente transversal Cross Link y barras de titanio grado médico'
          },
          2: {
            title: 'Detalle Macro: Aleta de Reducción, Ranura para Aumentación de Cemento y Huella Anti-trasroscado',
            subtitle: 'Reducción controlada y progresiva de la barra mediante aletas largas y anclaje superior en hueso con osteoporosis'
          },
          3: {
            title: 'Conector Transverso Cross Link Preensamblado Telescópico y Barras Rectas de Titanio',
            subtitle: 'Bloqueo transversal antirrotatorio en rangos 40-60 mm y 60-90 mm para barras de Ø 5.5 mm'
          },
          4: {
            title: 'Set de Instrumental Quirúrgico Modular Inteligente OpenPed®',
            subtitle: 'Contenedor de esterilización con bandejas de silicona, torquímetro dinamométrico regulado a 8 N·m, torres de reducción y destornilladores canulados'
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
