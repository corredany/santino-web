export interface Cita {
  id: number;
  clienteId: number;
  fecha: string;
  descripcion: string | null;
  estado: string;
  cliente?: {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
  };
}

export interface CrearCitaDto {
  clienteId: number;
  fecha: string;
  descripcion?: string;
}

export interface ActualizarCitaDto {
  fecha?: string;
  descripcion?: string;
  estado?: string;
}
