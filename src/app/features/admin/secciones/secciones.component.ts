import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeccionService } from '../../../core/services/seccion.service';
import type { Seccion, CrearSeccionDto } from '../../../shared/models/seccion.model';

@Component({
  selector: 'app-secciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './secciones.component.html',
  styleUrl: './secciones.component.css',
})
export class SeccionesComponent implements OnInit {
  private readonly service = inject(SeccionService);

  secciones: Seccion[] = [];
  cargando = true;
  error: string | null = null;

  mostrarForm = false;
  editandoId: number | null = null;
  form: CrearSeccionDto = { nombre: '', descripcion: '', visible: true, orden: 0 };

  ngOnInit() { this.cargar(); }

  cargar() {
    this.cargando = true;
    this.service.listar().subscribe({
      next: (data) => { this.secciones = data; this.cargando = false; },
      error: () => { this.error = 'Error al cargar secciones'; this.cargando = false; },
    });
  }

  abrirNuevo() {
    this.editandoId = null;
    this.form = { nombre: '', descripcion: '', visible: true, orden: 0 };
    this.mostrarForm = true;
  }

  abrirEditar(s: Seccion) {
    this.editandoId = s.id;
    this.form = { nombre: s.nombre, descripcion: s.descripcion ?? '', visible: s.visible, orden: s.orden };
    this.mostrarForm = true;
  }

  guardar() {
    const op = this.editandoId
      ? this.service.actualizar(this.editandoId, this.form)
      : this.service.crear(this.form);

    op.subscribe({ next: () => { this.mostrarForm = false; this.cargar(); } });
  }

  toggleVisible(s: Seccion) {
    this.service.toggleVisible(s.id).subscribe({ next: () => this.cargar() });
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar esta sección?')) return;
    this.service.eliminar(id).subscribe({ next: () => this.cargar() });
  }
}
