import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import type { Patrocinador, CrearPatrocinadorDto } from '../../shared/models/patrocinador.model';

@Injectable({ providedIn: 'root' })
export class PatrocinadorService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.contenidoApi}/patrocinadores`;

  listar() {
    return this.http.get<Patrocinador[]>(this.url);
  }

  crear(archivo: File, dto: CrearPatrocinadorDto) {
    const form = new FormData();
    form.append('archivo', archivo);
    form.append('nombre', dto.nombre);
    if (dto.sitioWeb) form.append('sitioWeb', dto.sitioWeb);
    return this.http.post<Patrocinador>(this.url, form);
  }

  toggleActivo(id: number) {
    return this.http.patch<Patrocinador>(`${this.url}/${id}/activo`, {});
  }

  eliminar(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
