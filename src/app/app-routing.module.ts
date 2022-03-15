import { WorkInProgressComponent } from './modules/shared/components/work-in-progress/work-in-progress.component';
import { FilmsListComponent } from './modules/application/films/components/films-list/films-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'starwars/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'starwars',
    loadChildren: () =>
      import('./modules/application/application.module').then(
        (m) => m.ApplicationModule
      ),
  },
  {
    path: 'starwars/planets/list',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },
  {
    path: 'starwars/species/list',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },
  {
    path: 'starwars/starships/list',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },
  {
    path: 'starwars/vehicles/list',
    component: WorkInProgressComponent,
    pathMatch: 'full',
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
