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
  FileSpreadsheet
} from 'lucide-react';
import { formatRut, validateRut } from '../utils/formatters';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    rut: '',
    email: '',
    phone: '',
    institution: '',
    subject: 'consulta_comercial',
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

  return (
    <section id="contacto" className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold">
            <MessageCircle className="w-3.5 h-3.5 text-cyan-600" />
            Canales de Atención Institucional
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contacto Comercial & <span className="text-cyan-700">Atención Institucional</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Comuníquese con nuestra mesa de ejecutivos para requerimientos de suministro, licitaciones de Mercado Público o solicitud de muestras clínicas y fichas técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white font-black">
                  GM
                </div>
                <div>
                  <h3 className="font-extrabold text-base">Genkimed SpA</h3>
                  <p className="text-xs text-cyan-300">Distribución de Insumos Médicos</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">WhatsApp Comercial & Asistencia:</p>
                    <a 
                      href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20solicito%20información%20comercial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      +56 9 3253 9584
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Correo de Contacto:</p>
                    <a href="mailto:contacto@genkimed.cl" className="text-cyan-300 hover:underline">
                      contacto@genkimed.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Casa Matriz & Bodega Central:</p>
                    <p>Santiago, Región Metropolitana, Chile.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Horario de Atención:</p>
                    <p>Lunes a Viernes: 08:30 a 18:30 hrs.</p>
                  </div>
                </div>

              </div>

              {/* Fast WhatsApp Box */}
              <div className="pt-2">
                <a
                  href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20atención%20comercial%20para%20compra%20de%20insumos%20Fixapro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Directo por WhatsApp</span>
                </a>
              </div>

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
                  ¡Mensaje Recibido Correctamente!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Gracias por contactar a Genkimed SpA. Un asesor del área comercial de insumos médicos Fixapro® le responderá a la brevedad al correo <strong>{form.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', rut: '', email: '', phone: '', institution: '', subject: 'consulta_comercial', message: '' });
                  }}
                  className="mt-4 px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Formulario de Contacto & Solicitud de Información
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Complete el formulario y le responderemos con la información o ficha técnica requerida.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Dr. Andrés Soto / Enf. Carolina Paz"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Institución / Clínica / Empresa *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Hospital Regional, Clínica Los Andes"
                      value={form.institution}
                      onChange={(e) => setForm({ ...form, institution: e.target.value })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">RUT Empresa / Institucional</label>
                    <input
                      type="text"
                      placeholder="76.123.456-7"
                      value={form.rut}
                      onChange={handleRutChange}
                      className={`w-full p-2.5 bg-white border rounded-xl focus:outline-none focus:ring-2 ${
                        rutError ? 'border-red-500' : 'border-slate-200 focus:ring-cyan-500'
                      }`}
                    />
                    {rutError && <span className="text-[10px] text-red-500">{rutError}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Teléfono / Celular *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="font-bold text-slate-700">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="correo@institucion.cl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="font-bold text-slate-700">Motivo del Contacto</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="consulta_comercial">Consulta Comercial e Información de Insumos</option>
                      <option value="licitacion">Licitación Pública / Compra Ágil (Mercado Público)</option>
                      <option value="muestras">Solicitud de Muestras Clínicas para Evaluación</option>
                      <option value="suministro">Contrato de Suministro Periódico / Venta Directa</option>
                      <option value="otro">Consulta Técnica o Certificaciones de Calidad</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="font-bold text-slate-700">Mensaje / Detalle de Requerimiento *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describa los productos Fixapro de su interés, volúmenes estimados o código de licitación pública..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje a Genkimed SpA</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
