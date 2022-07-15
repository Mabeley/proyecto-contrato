import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CambiarClaveComponent } from '../cambiar-clave/cambiar-clave.component';
import { FullLayoutComponent } from '../layout-shared/full-layout/full-layout.component';
import { PrincipalComponent } from './principal.component';
const routes: Routes =[
    {path:'principal', 
    component:FullLayoutComponent,
        children: [
            {path:'', component: PrincipalComponent}
        ]},

    {path: 'cambiar-clave', component: CambiarClaveComponent}    
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PrincipalRoutingModule{}