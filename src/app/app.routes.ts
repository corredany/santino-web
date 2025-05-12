import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto/contacto.component';

export const routes: Routes = [

    {
        path: '',
        component: InicioComponent,
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
