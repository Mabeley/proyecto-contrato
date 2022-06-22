import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CargaEnvioRoutingModule } from './carga-envio-routing.module';
import { CargaEnvioComponent } from './carga-envio.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CargaEnvioComponent,
    ],
    imports: [
        CommonModule,
        CargaEnvioRoutingModule,
        MatStepperModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class CargaEnvioModule { }
