import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FullLayoutComponent } from '../layout-shared/full-layout/full-layout.component';
import { PrincipalComponent } from './principal.component';
const routes: Routes =[
    {path:'principal', 
    component:FullLayoutComponent,
        children: [
            {path:'', component: PrincipalComponent}
        ]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PrincipalRoutingModule{}