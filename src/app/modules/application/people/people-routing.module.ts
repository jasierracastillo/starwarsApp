import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
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
    component: PeopleListComponent,
  },
  {
    path: 'list/:search',
    component: PeopleListComponent,
  },
  {
    path: 'details/:id',
    component: PeopleDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
