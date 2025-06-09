import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [Menubar],
  templateUrl:'./menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit{ 
  items: MenuItem[] | undefined;
  
  ngOnInit() {
    this.items = [
        {
            label: 'Inicio',
            routerLink: '/',
            routerLinkActiveOptions: { exact: true }
        },
        {
            label: 'Servicios',
            items: [
                {
                    label: 'Cocinas',
                    routerLink: '/servicios/cocinas'
                },
                {
                    label: 'Closets',
                    routerLink: '/servicios/closets'
                },
                {
                    label: 'Vestidores',
                    routerLink: '/servicios/vestidores'
                },
                {
                    label: 'Muebles de baño',
                    routerLink: '/servicios/muebles-banos'
                },
                {
                    label: 'Diseno Interiores',
                    routerLink: '/servicios/diseno-interiores'
                },
            ]
        },
        {
            label: 'Nosotros',
            routerLink: '/nosotros'
        },
        {
            label: 'Contacto',
            routerLink: '/contacto'
        }
    ]
  }
}