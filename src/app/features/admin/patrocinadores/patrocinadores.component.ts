import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatrocinadorService } from '../../../core/services/patrocinador.service';
import type { Patrocinador } from '../../../shared/models/patrocinador.model';

@Component({
  selector: 'app-patrocinadores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patrocinadores.component.html',
  styleUrl: './patrocinadores.component.css',
})
export class PatrocinadoresComponent implements OnInit {
  private readonly service = inject(PatrocinadorService);

  patrocinadores: Patrocinador[] = [];
  cargando = true;
  archivo: File | null = null;
  nombre = '';
  sitioWeb = '';
  subiendo = false;

  ngOnInit() { this.cargar(); }

  cargar() {
    this.cargando = true;
    this.service.listar().subscribe({
      next: (data) => { this.patrocinadores = data; this.cargando = false; },
      error: () => { this.cargando = false; },
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.archivo = input.files?.[0] ?? null;
  }

  crear() {
    if (!this.archivo || !this.nombre) return;
    this.subiendo = true;
    this.service.crear(this.archivo, { nombre: this.nombre, sitioWeb: this.sitioWeb }).subscribe({
      next: () => { this.subiendo = false; this.archivo = null; this.nombre = ''; this.sitioWeb = ''; this.cargar(); },
      error: () => { this.subiendo = false; },
    });
  }

  toggleActivo(p: Patrocinador) {
    this.service.toggleActivo(p.id).subscribe({ next: () => this.cargar() });
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar este patrocinador?')) return;
    this.service.eliminar(id).subscribe({ next: () => this.cargar() });
  }
}
