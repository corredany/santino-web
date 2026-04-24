export interface Imagen {
  id: number;
  url: string;
  publicId: string;
  orden: number;
  seccionId: number | null;
  creadoPor: number | null;
  actualizadoPor: number | null;
  creadoEn: string;
  actualizadoEn: string;
}
