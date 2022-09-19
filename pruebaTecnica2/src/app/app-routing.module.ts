import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'', redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'filmlist',
    component: FilmListComponent
  },
  {
    path:'filmdetails',
    component: FilmsDetailsComponent
  },
  {
    path:'serieslist',
    component: SeriesListComponent
  },
  {
    path:'seriesdetails',
    component: SeriesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
