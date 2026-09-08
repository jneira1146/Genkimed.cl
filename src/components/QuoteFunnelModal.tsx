import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Building2, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft,
  FileCheck2, 
  ShieldCheck, 
  Clock, 
  Send,
  Package,
  AlertCircle
} from 'lucide-react';
import { QuoteItem, Product } from '../types';
import { formatRut, validateRut } from '../utils/formatters';

interface QuoteFunnelModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteItems: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
  onAddQuickProduct?: (product: Product) => void;
  allProducts: Product[];
}

export const QuoteFunnelModal: React.FC<QuoteFunnelModalProps> = ({
  isOpen,
  onClose,
  quoteItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote,
  onAddQuickProduct,
  allProducts,
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [freeTextRequirement, setFreeTextRequirement] = useState('');
  
  // Lead info
  const [formData, setFormData] = useState({
    contactName: '',
    role: '',
    institution: '',
    institutionType: 'hospital_publico',
    email: '',
    phone: '',
    rut: '',
    city: '',
    urgency: 'normal',
    notes: '',
  });

  const [rutError, setRutError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedFolio, setGeneratedFolio] = useState('');

  if (!isOpen) return null;

  const totalBoxes = quoteItems.reduce((acc, item) => acc + item.quantityBoxes, 0);

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRut(e.target.value);
    setFormData({ ...formData, rut: formatted });
    if (formatted.length >= 8) {
      if (!validateRut(formatted)) {
        setRutError('RUT no válido');
      } else {
        setRutError(null);
      }
    } else {
      setRutError(null);
    }
  };

  const generateWhatsAppMessage = () => {
    let msg = `*SOLICITUD DE COTIZACIÓN INSTITUCIONAL - GENKIMED SpA*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `*Institución:* ${formData.institution || 'No especificada'}\n`;
    msg += `*Solicitante:* ${formData.contactName || 'No especificado'}${formData.role ? ` (${formData.role})` : ''}\n`;
    if (formData.rut) msg += `*RUT:* ${formData.rut}\n`;
    if (formData.city) msg += `*Ciudad/Comuna:* ${formData.city}\n`;
    if (formData.email) msg += `*Email:* ${formData.email}\n`;
    if (formData.phone) msg += `*Teléfono:* ${formData.phone}\n`;
    msg += `*Prioridad:* ${formData.urgency === 'urgente' ? '🚨 URGENTE (Despacho 24h)' : 'Estándar'}\n\n`;

    msg += `*DETALLE DE INSUMOS SOLICITADOS:*\n`;
    if (quoteItems.length > 0) {
      quoteItems.forEach((item, index) => {
        msg += `${index + 1}. *${item.productName}* (${item.dimensions})\n`;
        msg += `   └ Marca: ${item.brand} | Cantidad: *${item.quantityBoxes} Cajas* (x${item.unitPerBox} u/caja)\n`;
      });
    }

    if (freeTextRequirement.trim()) {
      msg += `\n*Requerimientos adicionales / Notas:*\n${freeTextRequirement.trim()}\n`;
    }

    if (formData.notes.trim()) {
      msg += `\n*Observaciones:* ${formData.notes.trim()}\n`;
    }

    msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Solicito confirmación de stock, valor formal unitario por caja y plazo de entrega.`;
    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = () => {
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/56932539584?text=${encoded}`;
    window.open(url, '_blank');
    setIsSuccess(true);
    setGeneratedFolio(`COT-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  const handleSubmitFormalEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rut && !validateRut(formData.rut)) {
      setRutError('RUT no válido');
      return;
    }
    const folio = `COT-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedFolio(folio);
    setIsSuccess(true);
  };

  const popularSuggestions = allProducts.filter(p => p.featured).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with Progress Steps */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-5 py-4 sm:px-8 sm:py-5 border-b border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#A8287F] to-[#2066BA] flex items-center justify-center text-white font-black text-xs shadow-md">
                GM
              </span>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                  Embudo de Cotización Rápida
                </h3>
                <p className="text-xs text-slate-400">
                  Genkimed SpA • Insumos Fixapro® & Alveos®
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper indicators */}
          {!isSuccess && (
            <div className="grid grid-cols-3 gap-2 pt-1">
              <button 
                onClick={() => setCurrentStep(1)}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  currentStep === 1 
                    ? 'bg-[#7B37A0] text-white shadow-sm' 
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">1</span>
                <span className="truncate">Insumos ({quoteItems.length})</span>
              </button>

              <button 
                onClick={() => {
                  if (quoteItems.length > 0 || freeTextRequirement.trim()) setCurrentStep(2);
                }}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  currentStep === 2 
                    ? 'bg-[#7B37A0] text-white shadow-sm' 
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</span>
                <span className="truncate">Institución</span>
              </button>

              <button 
                onClick={() => {
                  if (formData.institution || formData.contactName) setCurrentStep(3);
                }}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  currentStep === 3 
                    ? 'bg-[#7B37A0] text-white shadow-sm' 
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">3</span>
                <span className="truncate">Canal y Envío</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-grow">
          
          {/* SUCCESS SCREEN */}
          {isSuccess ? (
            <div className="text-center py-6 sm:py-10 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black border border-emerald-200 font-mono">
                  FOLIO #{generatedFolio}
                </span>
                <h4 className="text-2xl font-black text-slate-900">
                  ¡Solicitud Recibida con Éxito!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Su requerimiento para <strong className="text-slate-900">{formData.institution || 'su institución'}</strong> ha ingresado a nuestra mesa de abastecimiento clínico.
                </p>
              </div>

              {/* Guarantees Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Clock className="w-4 h-4 text-[#7B37A0]" />
                  <span>Tiempo de respuesta garantizado: &lt; 2 horas hábiles</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Fichas técnicas y certificados ISO adjuntos en la cotización</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>Acreditados en Mercado Público y Facturación a 30 días</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/56932539584?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Revisar por WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClearQuote();
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
                >
                  Cerrar y Seguir Navegando
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: PRODUCTS SELECTION */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">
                        Paso 1: Insumos Seleccionados para Cotizar
                      </h4>
                      <p className="text-xs text-slate-500">
                        Ajuste la cantidad de cajas deseadas o agregue insumos adicionales.
                      </p>
                    </div>

                    {quoteItems.length > 0 && (
                      <button
                        onClick={onClearQuote}
                        className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-semibold"
                        title="Vaciar lista"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Vaciar</span>
                      </button>
                    )}
                  </div>

                  {/* Empty state or Items List */}
                  {quoteItems.length === 0 ? (
                    <div className="text-center py-6 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 text-[#7B37A0] flex items-center justify-center mx-auto">
                        <Package className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-sm text-slate-800">
                          Aún no ha seleccionado productos del catálogo
                        </p>
                        <p className="text-xs text-slate-500 max-w-sm mx-auto">
                          Puede elegir entre los insumos hospitalarios más solicitados a continuación, o escribir su requerimiento directamente:
                        </p>
                      </div>

                      {/* Quick Suggestions */}
                      {popularSuggestions.length > 0 && onAddQuickProduct && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-left">
                          {popularSuggestions.map((prod) => (
                            <div 
                              key={prod.id}
                              className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs hover:border-[#7B37A0] transition-colors flex flex-col justify-between"
                            >
                              <div className="space-y-1">
                                <span className="text-[10px] font-bold text-[#A8287F] uppercase block">
                                  {prod.brand}
                                </span>
                                <h5 className="font-bold text-xs text-slate-900 line-clamp-1">
                                  {prod.name}
                                </h5>
                                <p className="text-[11px] text-slate-500">
                                  {prod.dimensions} • Caja x{prod.unitPerBox}
                                </p>
                              </div>
                              <button
                                onClick={() => onAddQuickProduct(prod)}
                                className="mt-2.5 w-full py-1 px-2 rounded-lg bg-purple-50 hover:bg-[#7B37A0] text-[#7B37A0] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Agregar</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                      {quoteItems.map((item) => (
                        <div
                          key={item.productId}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 gap-3"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {item.image && (
                              <img 
                                src={item.image} 
                                alt={item.productName} 
                                className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-100 shrink-0" 
                              />
                            )}
                            <div className="min-w-0">
                              <span className="text-[10px] font-bold text-[#A8287F] uppercase tracking-wider block">
                                {item.brand} • {item.dimensions}
                              </span>
                              <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                                {item.productName}
                              </h5>
                              <p className="text-[11px] text-slate-500">
                                Presentación: Caja x{item.unitPerBox} uds
                              </p>
                            </div>
                          </div>

                          {/* Controls */}
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.productId, item.quantityBoxes - 1)}
                                className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                                title="Reducir cantidad"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-9 text-center font-bold text-xs text-slate-900">
                                {item.quantityBoxes}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.productId, item.quantityBoxes + 1)}
                                className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                                title="Aumentar cantidad"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.productId)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                              title="Eliminar producto"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Free text requirement option */}
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      ¿Necesita otros códigos, medidas o tiene una lista de licitación? (Opcional):
                    </label>
                    <textarea
                      rows={2}
                      value={freeTextRequirement}
                      onChange={(e) => setFreeTextRequirement(e.target.value)}
                      placeholder="Ej: Requiero además 200 cajas de apósitos hidrocoloides, 100 sondas Nelaton..."
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#7B37A0] focus:ring-1 focus:ring-[#7B37A0] outline-none"
                    />
                  </div>

                  {/* Step 1 Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      Total Cajas: <strong className="text-slate-900 font-bold">{totalBoxes}</strong>
                    </div>

                    <button
                      onClick={() => setCurrentStep(2)}
                      disabled={quoteItems.length === 0 && !freeTextRequirement.trim()}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#7B37A0] hover:bg-[#682c89] disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <span>Siguiente: Datos Institución</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: INSTITUTION & LEAD DATA */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2">
                    <h4 className="font-extrabold text-slate-900 text-base">
                      Paso 2: Datos de la Institución Solicitante
                    </h4>
                    <p className="text-xs text-slate-500">
                      Permite que nuestro ejecutivo emita la cotización con valores preferenciales y condiciones de pago.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Nombre de la Institución / Empresa *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="Ej: Hospital San Juan de Dios / Clínica Alemana"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#7B37A0] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Tipo de Entidad
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] outline-none"
                      >
                        <option value="hospital_publico">Hospital Público / Red Asistencial</option>
                        <option value="cesfam_salud_primaria">CESFAM / Salud Primaria Municipal</option>
                        <option value="clinica_privada">Clínica Privada / Centro Médico</option>
                        <option value="mutualidad">Mutualidad / IST / ACHS / ISL</option>
                        <option value="distribuidor">Distribuidor Mayorista / Farmacia</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Nombre del Contacto / Solicitante *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="Ej: Dra. Camila Rojas / Enf. Marcos Torres"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#7B37A0] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Cargo / Área (Opcional)
                      </label>
                      <input 
                        type="text"
                        placeholder="Ej: Jefatura de Abastecimiento / Pabellón"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#7B37A0] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Teléfono / WhatsApp de Contacto *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="Ej: +56 9 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#7B37A0] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Correo Electrónico Institucional *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="Ej: compras@hospital.cl"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#7B37A0] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        RUT Institución (Opcional para Facturación)
                      </label>
                      <input 
                        type="text"
                        placeholder="Ej: 76.123.456-7"
                        value={formData.rut}
                        onChange={handleRutChange}
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#7B37A0] outline-none"
                      />
                      {rutError && <p className="text-[11px] text-rose-500 mt-0.5">{rutError}</p>}
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Ciudad / Región de Despacho
                      </label>
                      <input 
                        type="text"
                        placeholder="Ej: Santiago / Valparaíso / Concepción"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#7B37A0] outline-none"
                      />
                    </div>
                  </div>

                  {/* Step 2 Footer Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Volver a Insumos</span>
                    </button>

                    <button
                      onClick={() => setCurrentStep(3)}
                      disabled={!formData.institution.trim() || !formData.contactName.trim() || !formData.phone.trim()}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#7B37A0] hover:bg-[#682c89] disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <span>Siguiente: Elegir Canal de Envío</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONVERSION CHANNELS */}
              {currentStep === 3 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-2">
                    <h4 className="font-extrabold text-slate-900 text-base">
                      Paso 3: ¿Por qué canal prefiere recibir su cotización?
                    </h4>
                    <p className="text-xs text-slate-500">
                      Elija la vía más ágil según el procedimiento de compras de su institución.
                    </p>
                  </div>

                  {/* Summary recap badge */}
                  <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-3.5 flex items-center justify-between text-xs text-slate-800">
                    <div>
                      <span className="font-bold text-[#7B37A0] block">
                        Institución: {formData.institution}
                      </span>
                      <span className="text-slate-600">
                        {quoteItems.length} insumo(s) • Total {totalBoxes} cajas solicitadas
                      </span>
                    </div>
                    <button 
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-[#7B37A0] underline font-bold"
                    >
                      Modificar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    
                    {/* PRIMARY CONVERSION OPTION: WHATSAPP */}
                    <div className="p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50/40 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all relative overflow-hidden group">
                      <div className="absolute top-2.5 right-2.5">
                        <span className="bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                          MÁS RÁPIDO ⚡
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <h5 className="font-black text-slate-900 text-sm">
                          Cotizar Inmediato por WhatsApp
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Conecta directo con un ejecutivo de ventas médicas. Reciba respuesta en minutos con disponibilidad de bodega y precios.
                        </p>
                      </div>

                      <button
                        onClick={handleSendWhatsApp}
                        className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Abrir WhatsApp con Cotización</span>
                      </button>
                    </div>

                    {/* SECONDARY CONVERSION OPTION: FORMAL EMAIL */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                          <Mail className="w-5 h-5" />
                        </div>
                        <h5 className="font-black text-slate-900 text-sm">
                          Solicitud Formal por Correo
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Ideal para compras públicas, órdenes de compra y licitaciones. Emitiremos una cotización formal membretada en PDF.
                        </p>
                      </div>

                      <button
                        onClick={handleSubmitFormalEmail}
                        className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitud Formal</span>
                      </button>
                    </div>

                  </div>

                  {/* Trust guarantees bar */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Datos 100% confidenciales
                    </span>
                    <span className="flex items-center gap-1">
                      <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                      Facturación a 30 días disponible
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-600" />
                      Respuesta en menos de 2 horas
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Volver al paso anterior</span>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
};
