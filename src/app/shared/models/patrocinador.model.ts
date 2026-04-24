export interface Patrocinador {
  id: number;
  nombre: string;
  logoUrl: string;
  logoPublicId: string;
  sitioWeb: string | null;
  activo: boolean;
  creadoPor: number | null;
  actualizadoPor: number | null;
  creadoEn: string;
  actualizadoEn: string;
}

export interface CrearPatrocinadorDto {
  nombre: string;
  sitioWeb?: string;
}
