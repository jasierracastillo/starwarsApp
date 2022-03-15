import { WorkInProgressComponent } from './../shared/components/work-in-progress/work-in-progress.component';
import { AplicationComponent } from './aplication.component';
import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: AplicationComponent,
    pathMatch: 'full',
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'planets',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },
  {
    path: 'species',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },
  {
    path: 'starships',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },
  {
    path: 'vehicles',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },

  // { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
