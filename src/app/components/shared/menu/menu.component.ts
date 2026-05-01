import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SeccionService } from '../../../core/services/seccion.service';

interface SeccionNav {
  nombre: string;
  slug: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  private readonly seccionService = inject(SeccionService);
  private readonly cdr = inject(ChangeDetectorRef);

  secciones: SeccionNav[] = [];
  scrolled = false;
  menuAbierto = false;
  serviciosAbierto = false;

  @HostListener('window:scroll')
  onScroll() {
    const nuevo = window.scrollY > 60;
    if (nuevo !== this.scrolled) {
      this.scrolled = nuevo;
      this.cdr.markForCheck();
    }
  }

  ngOnInit() {
    this.seccionService.listarVisibles().subscribe({
      next: (secciones) => {
        this.secciones = secciones.map((s) => ({
          nombre: s.nombre,
          slug: this.toSlug(s.nombre),
        }));
        this.cdr.markForCheck();
      },
    });
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.cdr.markForCheck();
  }

  cerrarMenu() {
    this.menuAbierto = false;
    this.serviciosAbierto = false;
    this.cdr.markForCheck();
  }

  private toSlug(nombre: string): string {
    return nombre
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/\s+/g, '-');
  }
}
