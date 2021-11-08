import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path     : '',
        component: PorPaisComponent,
        pathMatch: 'full' // se usa para el primer componente que se quiere mostrar
    },
    {
        path     : 'region',
        component: PorRegionComponent,
    },
    {
        path     : 'capital',
        component: PorCapitalComponent,
    },
    {
        path     : 'pais/:id',
        component: VerPaisComponent,
    },
    {
        path: '**', // cuaalquier otra ruta redirecciona al HOME
        redirectTo: '' // HOME
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ) // FOR ROOT RUTAS PRINCIAPLES
    ],
    exports: [
        RouterModule // Para utilizarlo fuera
    ],

})

export class AppRoutingModule {}