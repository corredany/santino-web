import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  readonly accesos = [
    { label: 'Secciones', ruta: '/admin/secciones', icono: '📂' },
    { label: 'Imágenes', ruta: '/admin/imagenes', icono: '🖼️' },
    { label: 'Videos', ruta: '/admin/videos', icono: '🎬' },
    { label: 'Materiales', ruta: '/admin/materiales', icono: '📄' },
    { label: 'Patrocinadores', ruta: '/admin/patrocinadores', icono: '🏷️' },
    { label: 'Usuarios', ruta: '/admin/usuarios', icono: '👤' },
    { label: 'Citas', ruta: '/admin/citas', icono: '📅' },
  ];
}
