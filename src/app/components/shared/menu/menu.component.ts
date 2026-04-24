import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { SeccionService } from '../../../core/services/seccion.service';

@Component({
  selector: 'app-menu',
  imports: [Menubar],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  private readonly seccionService = inject(SeccionService);
  private readonly cdr = inject(ChangeDetectorRef);

  items: MenuItem[] = [];

  ngOnInit() {
    this.seccionService.listarVisibles().subscribe({
      next: (secciones) => {
        const serviciosItems = secciones.map((s) => ({
          label: s.nombre,
          routerLink: `/servicios/${this.toSlug(s.nombre)}`,
        }));

        this.items = [
          { label: 'Inicio', routerLink: '/' },
          { label: 'Servicios', items: serviciosItems },
          { label: 'Nosotros', routerLink: '/nosotros' },
          { label: 'Contacto', routerLink: '/contacto' },
        ];
        this.cdr.markForCheck();
      },
    });
  }

  private toSlug(nombre: string): string {
    return nombre
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/\s+/g, '-');
  }
}
