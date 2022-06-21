import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
        FullLayoutComponent,
        SidebarComponent,
        

    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([])],
    exports:[
        FullLayoutComponent,
       
    ],
    

})
export class LayoutModule { }