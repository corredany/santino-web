export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rolId: number;
  creadoPor: number | null;
  actualizadoPor: number | null;
  creadoEn: string;
  actualizadoEn: string;
}

export interface CrearUsuarioDto {
  nombre: string;
  email: string;
  password: string;
  rolId: number;
}

export interface ActualizarUsuarioDto {
  nombre?: string;
  email?: string;
  rolId?: number;
}
