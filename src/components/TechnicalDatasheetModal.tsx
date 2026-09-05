import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  Building2, 
  FileCheck2, 
  CheckCircle2,
  AlertTriangle,
  Layers,
  Calendar,
  Barcode,
  Info
} from 'lucide-react';
import { Product } from '../types';
import { Logo } from './Logo';

interface TechnicalDatasheetModalProps {
  product: Product | null;
  onClose: () => void;
}

export const TechnicalDatasheetModal: React.FC<TechnicalDatasheetModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-slate-300 print:max-w-none print:m-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Toolbar (Hidden in print) */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Ficha Técnica Oficial • Genkimed Medical Solutions
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white text-xs font-bold transition-all shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Technical Document Body */}
        <div className="p-6 sm:p-10 space-y-6 text-slate-800 text-xs font-sans">
          
          {/* Official Document Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b-2 border-slate-900 gap-4">
            <div className="flex items-center gap-3">
              <Logo size="md" showSubtitle={true} />
            </div>

            <div className="sm:text-right bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px]">
              <span className="font-bold text-slate-900 block">DOCUMENTO TÉCNICO OFICIAL</span>
              <span className="font-mono text-purple-900 font-bold block">FT-GENKIMED-2026</span>
              <span className="text-slate-500 text-[10px]">Vigencia: 2026 - 2028</span>
            </div>
          </div>

          {/* Product Identification Section */}
          <div className="space-y-3">
            <div className="bg-cyan-50/80 border border-cyan-200 p-4 rounded-xl">
              <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block">
                Nombre del Dispositivo Médico
              </span>
              <h2 className="text-lg font-black text-slate-900">
                {product.name}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {product.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Marca Oficial</span>
                <span className="font-bold text-slate-900">{product.brand}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Dimensiones Nominales</span>
                <span className="font-bold font-mono text-purple-900">{product.dimensions}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Formato de Presentación</span>
                <span className="font-bold text-slate-800">{product.presentation || `Caja x${product.unitPerBox} uds`}</span>
              </div>
            </div>

            {/* Referential Image & Packaging Advisory */}
            {(product.category === 'iv_fixation' || product.category === 'wound_care') && (
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 text-[11px] text-amber-900 leading-snug">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Nota técnica institucional:</strong> Las imágenes y fotografías asociadas a los apósitos y cajas son de carácter estrictamente referencial e ilustrativo. Prevalecen las especificaciones técnicas dimensionales, esterilización y materiales certificados consignados en este documento oficial.
                </span>
              </div>
            )}
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-700" />
              Especificaciones Físicas y Químicas
            </h3>
            
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
              <div className="grid grid-cols-12 p-2.5 bg-slate-50 text-[11px] font-bold text-slate-700">
                <div className="col-span-5">Parámetro Técnico</div>
                <div className="col-span-7">Especificación / Valor Nominal</div>
              </div>
              <div className="grid grid-cols-12 p-2.5 text-[11px]">
                <div className="col-span-5 font-semibold text-slate-600">Dimensiones Nominales</div>
                <div className="col-span-7 font-bold text-slate-900">{product.dimensions}</div>
              </div>
              <div className="grid grid-cols-12 p-2.5 text-[11px] bg-slate-50/50">
                <div className="col-span-5 font-semibold text-slate-600">Estructura del Material</div>
                <div className="col-span-7 text-slate-800">{product.technicalSpecs.material}</div>
              </div>
              <div className="grid grid-cols-12 p-2.5 text-[11px]">
                <div className="col-span-5 font-semibold text-slate-600">Tipo de Adhesivo Médico</div>
                <div className="col-span-7 text-slate-800">{product.technicalSpecs.adhesive}</div>
              </div>
              <div className="grid grid-cols-12 p-2.5 text-[11px] bg-slate-50/50">
                <div className="col-span-5 font-semibold text-slate-600">Permeabilidad / Hermeticidad</div>
                <div className="col-span-7 text-slate-800">{product.technicalSpecs.permeability}</div>
              </div>
              <div className="grid grid-cols-12 p-2.5 text-[11px]">
                <div className="col-span-5 font-semibold text-slate-600">Método de Esterilización</div>
                <div className="col-span-7 font-bold text-emerald-800">{product.technicalSpecs.sterilization}</div>
              </div>
              <div className="grid grid-cols-12 p-2.5 text-[11px] bg-slate-50/50">
                <div className="col-span-5 font-semibold text-slate-600">Vida Útil (Vencimiento)</div>
                <div className="col-span-7 text-slate-800">{product.technicalSpecs.shelfLife}</div>
              </div>
              <div className="grid grid-cols-12 p-2.5 text-[11px]">
                <div className="col-span-5 font-semibold text-slate-600">Biocompatibilidad & Alergias</div>
                <div className="col-span-7 text-slate-800">
                  {product.technicalSpecs.latexFree ? '100% Libre de Látex' : 'Contiene látex'} • {product.technicalSpecs.hypoallergenic ? 'Hipoalergénico Comprobado' : 'Estándar'} • Radiotransparente
                </div>
              </div>
            </div>
          </div>

          {/* Calibers Table if Available (6 FR to 18 FR) */}
          {product.availableCalibers && (
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Barcode className="w-3.5 h-3.5 text-[#A8287F]" />
                Cuadro Oficial de Calibres Disponibles (6 FR a 18 FR)
              </h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                <div className="grid grid-cols-12 p-2.5 bg-slate-100 text-[10px] font-bold text-slate-800">
                  <div className="col-span-3">Calibre</div>
                  <div className="col-span-3">Código Color ISO</div>
                  <div className="col-span-6">Destino Clínico / Población</div>
                </div>
                {product.availableCalibers.map((c) => (
                  <div key={c.gauge} className="grid grid-cols-12 p-2 text-[10px] items-center">
                    <div className="col-span-3 font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: c.hexColor }}
                      />
                      {c.gauge}
                    </div>
                    <div className="col-span-3 text-slate-600 font-medium">
                      {c.colorName}
                    </div>
                    <div className="col-span-6 text-slate-700">
                      {c.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Formats Table if Available (Vendas Elásticas & Nebulizadores Alveos®) */}
          {product.availableFormats && (
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Barcode className={`w-3.5 h-3.5 ${product.brand === 'Alveos®' ? 'text-[#2066BA]' : 'text-[#A8287F]'}`} />
                {product.category === 'nebulizers' 
                  ? 'Gama Oficial de Formatos Clínicos (Adulto & Pediátrico)' 
                  : product.category === 'iv_fixation'
                  ? 'Gama Oficial de Formatos Fixapro® IV Advanced (CVP, CVC & Pediátrico)'
                  : product.category === 'wound_care'
                  ? 'Gama Oficial de Formatos Fixapro® Film (6x7, 10x12 y 10x25 cm)'
                  : 'Gama Oficial de Formatos y Técnicas de Vendaje'}
              </h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                <div className="grid grid-cols-12 p-2.5 bg-slate-100 text-[10px] font-bold text-slate-800">
                  <div className="col-span-3">
                    {product.category === 'nebulizers' 
                      ? 'Formato / Modelo' 
                      : product.category === 'iv_fixation' || product.category === 'wound_care'
                      ? 'Medida / Referencia'
                      : 'Medida / Ancho'}
                  </div>
                  <div className="col-span-3">
                    {product.category === 'nebulizers' 
                      ? 'Población Objetivo' 
                      : product.category === 'iv_fixation'
                      ? 'Acceso Vascular / Indicación'
                      : product.category === 'wound_care'
                      ? 'Herida / Zona Quirúrgica'
                      : 'Segmento Anatómico'}
                  </div>
                  <div className="col-span-6">
                    {product.category === 'nebulizers' 
                      ? 'Indicación & Especificación de Uso' 
                      : product.category === 'iv_fixation'
                      ? 'Compatibilidad de Catéter & Técnica de Fijación'
                      : product.category === 'wound_care'
                      ? 'Indicación Clínica & Cobertura Quirúrgica'
                      : 'Indicación & Técnica de Vendaje'}
                  </div>
                </div>
                {product.availableFormats.map((f) => (
                  <div key={f.format} className="grid grid-cols-12 p-2.5 text-[10px] items-center gap-1">
                    <div className="col-span-3 font-extrabold text-slate-900">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={product.brand === 'Alveos®' ? 'text-blue-700 font-bold' : 'text-pink-700'}>{f.inches}</span>
                        {f.refCode && (
                          <span className="text-[8px] font-mono font-bold bg-slate-100 text-slate-700 px-1 py-0.2 rounded border border-slate-200">
                            {f.refCode}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 font-mono text-[9px]">{f.format}</p>
                    </div>
                    <div className="col-span-3 text-slate-700 font-medium">
                      {f.targetArea}
                    </div>
                    <div className="col-span-6 text-slate-600 space-y-0.5">
                      <p className="font-medium text-slate-800">{f.clinicalUse}</p>
                      <p className="text-slate-500 text-[9px]">
                        <strong className={product.brand === 'Alveos®' ? 'text-[#2066BA]' : 'text-[#7B37A0]'}>
                          {product.category === 'nebulizers' 
                            ? 'Técnica/Diseño:' 
                            : product.category === 'iv_fixation'
                            ? 'Técnica/Fijación:'
                            : product.category === 'wound_care'
                            ? 'Técnica/Aplicación:'
                            : 'Técnica:'}
                        </strong> {f.technique}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clinical Indications & Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">
                Indicaciones de Uso Clínico
              </h4>
              <ul className="space-y-1 text-[11px] text-slate-600">
                {product.clinicalIndications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">
                Normativas y Certificaciones
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.certifications.map((cert, i) => (
                  <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-700">
                    {cert}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 pt-1">
                Cumple con las directrices de control de IAAS del Ministerio de Salud de Chile (MINSAL).
              </p>
            </div>
          </div>

          {/* Storage & Handling Conditions */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-[11px]">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] block">
              Condiciones de Almacenamiento & Transporte:
            </span>
            <p className="text-slate-600">
              Conservar en lugar limpio, fresco y seco entre 5°C y 30°C, alejado de la luz solar directa y fuentes de humedad extrema. No utilizar si el envase individual primario estéril se encuentra abierto, perforado o dañado.
            </p>
          </div>

          {/* Official Footer Sign-off */}
          <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-3">
            <div>
              <p className="font-bold text-slate-800">GENKIMED SpA • Departamento de Asuntos Regulatorios y Calidad</p>
              <p>Representante y Distribuidor Mayorista de la Línea Fixapro® en Chile</p>
            </div>
            <div className="text-right font-mono">
              <span>Aprobación Técnica: Grado Médico Certificado</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
