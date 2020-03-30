import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PeliculasService } from './services/peliculas.service';
import { HomeComponent } from './components/home/home.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { InfoComponent } from './components/info/info.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { LoopComponent } from './components/loop/loop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    BuscarComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMasonryModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
