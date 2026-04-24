export interface Seccion {
  id: number;
  nombre: string;
  descripcion: string | null;
  visible: boolean;
  orden: number;
  creadoPor: number | null;
  actualizadoPor: number | null;
  creadoEn: string;
  actualizadoEn: string;
}

export interface CrearSeccionDto {
  nombre: string;
  descripcion?: string;
  visible?: boolean;
  orden?: number;
}

export interface ActualizarSeccionDto {
  nombre?: string;
  descripcion?: string;
  visible?: boolean;
  orden?: number;
}
