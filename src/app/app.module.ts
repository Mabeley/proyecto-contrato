import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout-shared/layout-shared.module';
import { PerfilModule } from './perfil/perfil.module';
import { PrincipalModule } from './principal/principal.module';

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
    LayoutModule
  
  
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
