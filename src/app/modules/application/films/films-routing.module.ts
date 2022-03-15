import { FilmsFilterComponent } from './components/films-list/films-filter/films-filter.component';
import { WorkInProgressComponent } from '../../shared/components/work-in-progress/work-in-progress.component';
import { FilmsDetailsComponent } from './components/films-details/films-details.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: FilmsListComponent,
  },
  {
    path: 'list/:filter',
    component: FilmsListComponent,
  },
  // {
  //   path: 'list/:filter',
  //   component: FilmsFilterComponent,
  // },
  {
    path: 'details/:id',
    component: FilmsDetailsComponent,
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
