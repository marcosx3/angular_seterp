import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/template/home/home.component';
import { AboutComponent } from './components/template/about/about.component';
import { CursosComponent } from './components/template/cursos/cursos.component';
import { ContatoComponent } from './components/template/contato/contato.component';
import { FormularioComponent } from './components/template/formulario/formulario.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CursosComponent,
    ContatoComponent,
    FormularioComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
