import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CargaEnvioModule } from './carga-envio/carga-envio.module';
import { LayoutModule } from './layout-shared/layout-shared.module';
import { PerfilModule } from './perfil/perfil.module';
import { PrincipalModule } from './principal/principal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrincipalModule,
    PerfilModule,
    LayoutModule,
    CargaEnvioModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
