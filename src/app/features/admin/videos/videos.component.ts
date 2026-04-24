import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../../../core/services/video.service';
import { SeccionService } from '../../../core/services/seccion.service';
import type { Video } from '../../../shared/models/video.model';
import type { Seccion } from '../../../shared/models/seccion.model';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent implements OnInit {
  private readonly service = inject(VideoService);
  private readonly seccionService = inject(SeccionService);

  videos: Video[] = [];
  secciones: Seccion[] = [];
  cargando = true;
  archivoSeleccionado: File | null = null;
  seccionId: number | undefined;
  orden: number | undefined;
  subiendo = false;

  ngOnInit() {
    this.seccionService.listar().subscribe((s) => (this.secciones = s));
    this.cargar();
  }

  cargar() {
    this.cargando = true;
    this.service.listar(this.seccionId).subscribe({
      next: (data) => { this.videos = data; this.cargando = false; },
      error: () => { this.cargando = false; },
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.archivoSeleccionado = input.files?.[0] ?? null;
  }

  subir() {
    if (!this.archivoSeleccionado) return;
    this.subiendo = true;
    this.service.subir(this.archivoSeleccionado, this.seccionId, this.orden).subscribe({
      next: () => { this.subiendo = false; this.archivoSeleccionado = null; this.cargar(); },
      error: () => { this.subiendo = false; },
    });
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar este video?')) return;
    this.service.eliminar(id).subscribe({ next: () => this.cargar() });
  }
}
