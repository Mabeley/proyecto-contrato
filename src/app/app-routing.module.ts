import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaEnvioComponent } from './carga-envio/carga-envio.component';

const routes: Routes = [
  {path: '',
  redirectTo:'/principal',
 pathMatch:"full"
  },
  {path:'carga-envio', component:CargaEnvioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
