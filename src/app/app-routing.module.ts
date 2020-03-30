import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { BuscarComponent } from './components/buscar/buscar.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
