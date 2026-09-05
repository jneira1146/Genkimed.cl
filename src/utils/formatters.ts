/**
 * Utility functions for Genkimed SpA application
 */

// Format Chilean Pesos (CLP)
export function formatCLP(amount: number, includeSign: boolean = true): string {
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return includeSign ? `$${formatted} CLP` : `$${formatted}`;
}

// Format Chilean RUT (e.g. 77123456K -> 77.123.456-K)
export function formatRut(rut: string): string {
  // Clean all non-alphanumeric chars
  const clean = rut.replace(/[^0-9kK]/g, '').toUpperCase();
  if (clean.length <= 1) return clean;

  const dv = clean.slice(-1);
  const cuerpo = clean.slice(0, -1);

  let formattedCuerpo = '';
  let count = 0;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    formattedCuerpo = cuerpo[i] + formattedCuerpo;
    count++;
    if (count % 3 === 0 && i !== 0) {
      formattedCuerpo = '.' + formattedCuerpo;
    }
  }

  return `${formattedCuerpo}-${dv}`;
}

// Basic Chilean RUT verification
export function validateRut(rut: string): boolean {
  const clean = rut.replace(/[^0-9kK]/g, '').toUpperCase();
  if (clean.length < 8) return false;

  const dv = clean.slice(-1);
  const cuerpo = clean.slice(0, -1);

  let suma = 0;
  let multiplo = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * multiplo;
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }

  const dvEsperado = 11 - (suma % 11);
  let dvCalculado = '';
  if (dvEsperado === 11) dvCalculado = '0';
  else if (dvEsperado === 10) dvCalculado = 'K';
  else dvCalculado = dvEsperado.toString();

  return dv === dvCalculado;
}
