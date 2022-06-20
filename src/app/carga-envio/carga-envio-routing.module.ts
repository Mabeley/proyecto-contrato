import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FullLayoutComponent } from '../layout-shared/full-layout/full-layout.component';
import { CargaEnvioComponent } from './carga-envio.component';


const routes: Routes =[
    {path:'carga-envio', 
    component:FullLayoutComponent,
        children: [
            {path:'', component: CargaEnvioComponent}
        ]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CargaEnvioRoutingModule{}