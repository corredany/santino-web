import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';
import type { Usuario, CrearUsuarioDto, ActualizarUsuarioDto } from '../../../shared/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  private readonly service = inject(UsuarioService);

  usuarios: Usuario[] = [];
  cargando = true;
  mostrarForm = false;
  editandoId: number | null = null;
  form: CrearUsuarioDto = { nombre: '', email: '', password: '', rolId: 2 };

  ngOnInit() { this.cargar(); }

  cargar() {
    this.cargando = true;
    this.service.listar().subscribe({
      next: (data) => { this.usuarios = data; this.cargando = false; },
      error: () => { this.cargando = false; },
    });
  }

  abrirNuevo() {
    this.editandoId = null;
    this.form = { nombre: '', email: '', password: '', rolId: 2 };
    this.mostrarForm = true;
  }

  abrirEditar(u: Usuario) {
    this.editandoId = u.id;
    this.form = { nombre: u.nombre, email: u.email, password: '', rolId: u.rolId };
    this.mostrarForm = true;
  }

  guardar() {
    if (this.editandoId) {
      const dto: ActualizarUsuarioDto = { nombre: this.form.nombre, email: this.form.email, rolId: this.form.rolId };
      this.service.actualizar(this.editandoId, dto).subscribe({ next: () => { this.mostrarForm = false; this.cargar(); } });
    } else {
      this.service.crear(this.form).subscribe({ next: () => { this.mostrarForm = false; this.cargar(); } });
    }
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar este usuario?')) return;
    this.service.eliminar(id).subscribe({ next: () => this.cargar() });
  }
}
