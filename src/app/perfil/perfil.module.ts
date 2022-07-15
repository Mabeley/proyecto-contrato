import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';

@NgModule({
    declarations: [
        PerfilComponent,
     ],
    imports: [
        CommonModule,
        PerfilRoutingModule,
        ReactiveFormsModule,
        
    ]
})
export class PerfilModule { }

