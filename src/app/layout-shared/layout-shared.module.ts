import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
    declarations: [
        FullLayoutComponent,
        SidebarComponent,
        InicioComponent

    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([])],
    exports:[
        FullLayoutComponent,
        InicioComponent
    ],
    

})
export class LayoutModule { }