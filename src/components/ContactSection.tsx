import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Building2, 
  ShieldCheck,
  FileSpreadsheet,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { formatRut, validateRut } from '../utils/formatters';
import { QuoteItem } from '../types';

interface ContactSectionProps {
  quoteItems?: QuoteItem[];
  onOpenQuickQuote?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  quoteItems = [],
  onOpenQuickQuote,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    rut: '',
    email: '',
    phone: '',
    institution: '',
    subject: 'cotizacion_institucional',
    message: ''
  });
  const [rutError, setRutError] = useState<string | null>(null);

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRut(e.target.value);
    setForm({ ...form, rut: formatted });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rut && !validateRut(form.rut)) {
      setRutError('RUT no válido');
      return;
    }
    setSubmitted(true);
  };

  const generateDirectWhatsApp = () => {
    let msg = `*CONSULTA / COTIZACIÓN GENKIMED SpA*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `*Institución:* ${form.institution || 'No especificada'}\n`;
    msg += `*Solicitante:* ${form.name || 'No especificado'}\n`;
    if (form.rut) msg += `*RUT:* ${form.rut}\n`;
    if (form.email) msg += `*Email:* ${form.email}\n`;
    if (form.phone) msg += `*Teléfono:* ${form.phone}\n`;
    if (quoteItems.length > 0) {
      msg += `\n*Insumos de Interés (${quoteItems.length}):*\n`;
      quoteItems.forEach((it, idx) => {
        msg += `${idx + 1}. ${it.productName} (${it.dimensions}) - ${it.quantityBoxes} cajas\n`;
      });
    }
    if (form.message.trim()) {
      msg += `\n*Mensaje:* ${form.message.trim()}\n`;
    }
    msg += `\nSolicito contacto y cotización formal.`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="contacto" className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#7B37A0] text-xs font-bold">
            <MessageCircle className="w-3.5 h-3.5 text-[#7B37A0]" />
            Atención Inmediata & Cotizaciones
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mesa de Abastecimiento & <span className="bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent">Cotizaciones Formales</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Respuesta comercial garantizada en menos de 2 horas para hospitales, clínicas, mutualidades y proveedores de salud de todo Chile.
          </p>
        </div>

        {/* Floating Quote Active Banner if user has items */}
        {quoteItems.length > 0 && onOpenQuickQuote && (
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-purple-500/30">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm">
                  Tiene {quoteItems.length} insumo(s) listos para cotizar
                </h4>
                <p className="text-xs text-purple-200">
                  {quoteItems.map(i => i.productName).join(', ')}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenQuickQuote}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white font-extrabold text-xs shadow-md transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>Abrir Resumen y Cotizar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#A8287F] to-[#2066BA] flex items-center justify-center text-white font-black">
                  GM
                </div>
                <div>
                  <h3 className="font-extrabold text-base">Genkimed SpA</h3>
                  <p className="text-xs text-purple-300">Distribución de Insumos Médicos</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">WhatsApp Directo Ejecutivo:</p>
                    <a 
                      href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20solicito%20cotización%20inmediata%20de%20insumos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      +56 9 3253 9584
                    </a>
                    <span className="block text-[10px] text-slate-400">Respuesta promedio: &lt; 15 min</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Correos Institucionales:</p>
                    <a href="mailto:compras@genkimed.cl" className="text-purple-300 hover:underline block">
                      compras@genkimed.cl
                    </a>
                    <a href="mailto:ventas@genkimed.cl" className="text-slate-400 hover:underline block">
                      ventas@genkimed.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Bodega Central & Despacho:</p>
                    <p>Santiago, Región Metropolitana, Chile.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Horario de Operaciones:</p>
                    <p>Lunes a Viernes: 08:30 a 18:30 hrs.</p>
                  </div>
                </div>

              </div>

              {/* Fast WhatsApp Box */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/56932539584?text=${generateDirectWhatsApp()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Cotización por WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Quick Guarantees Badge */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2 text-slate-600">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Condiciones de Venta Institucional</span>
              </div>
              <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-500">
                <li>Facturación a 30 días para instituciones con OC</li>
                <li>Fichas técnicas oficiales y resoluciones ISP</li>
                <li>Despacho a bodegas de farmacia en todo Chile</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
            
            {submitted ? (
              <div className="text-center py-12 space-y-3 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ¡Requerimiento Recibido con Éxito!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Gracias por contactar a Genkimed SpA. Un asesor del área comercial emitirá la cotización formal a la brevedad al correo <strong>{form.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', rut: '', email: '', phone: '', institution: '', subject: 'cotizacion_institucional', message: '' });
                    }}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all"
                  >
                    Enviar otra cotización
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Solicitud de Cotización Formal Membretada
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Complete los datos y le remitiremos la cotización con valores y plazos de entrega.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Institución / Clínica / Hospital *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Hospital Clínico / Clínica Santa María"
                      value={form.institution}
                      onChange={(e) => setForm({ ...form, institution: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] focus:ring-1 focus:ring-[#7B37A0] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Nombre del Solicitante *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Claudia Morales (Abastecimiento)"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] focus:ring-1 focus:ring-[#7B37A0] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ej: adquisiciones@hospital.cl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] focus:ring-1 focus:ring-[#7B37A0] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: +56 9 1234 5678"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] focus:ring-1 focus:ring-[#7B37A0] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      RUT Institución (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 76.543.210-K"
                      value={form.rut}
                      onChange={handleRutChange}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] focus:ring-1 focus:ring-[#7B37A0] outline-none"
                    />
                    {rutError && <p className="text-[11px] text-rose-500 mt-0.5">{rutError}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Tipo de Solicitud
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] outline-none"
                    >
                      <option value="cotizacion_institucional">Cotización Formal de Insumos</option>
                      <option value="licitacion_chilecompra">Licitación / Compra Ágil Mercado Público</option>
                      <option value="muestras_clinicas">Solicitud de Muestras Clínicas</option>
                      <option value="fichas_tecnicas">Fichas Técnicas y Resoluciones</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Detalle de Insumos o Requerimiento *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Indique los insumos, medidas (ej. Fixapro 10x12, Alveos nebulizador...) y cantidad estimada de cajas..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#7B37A0] focus:ring-1 focus:ring-[#7B37A0] outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Requerimiento Formal</span>
                  </button>

                  <a
                    href={`https://wa.me/56932539584?text=${generateDirectWhatsApp()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>O Enviar por WhatsApp Inmediato</span>
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
