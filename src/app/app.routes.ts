import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto/producto.component';

export const routes: Routes = [

    {
        path: '',
        component: InicioComponent,
    },
    {
        path: 'cocina',
        component: ProductoComponent,
    },
    {
        path: 'contacto',
        component: ContactoComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },

];
