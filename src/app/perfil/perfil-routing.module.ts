import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FullLayoutComponent } from '../layout-shared/full-layout/full-layout.component';
import { PerfilComponent } from './perfil.component';

const routes: Routes =[
    {path:'perfil', 
    component:FullLayoutComponent,
        children: [
            {path:'', component: PerfilComponent}
        ]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PerfilRoutingModule{}