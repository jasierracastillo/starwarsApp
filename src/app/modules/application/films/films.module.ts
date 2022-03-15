import { SharedModule } from './../../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmsDetailsComponent } from './components/films-details/films-details.component';
import { FilmsListPanelComponent } from './components/films-list/films-list-panel.component';
import { FilmsDetailsPanelComponent } from './components/films-details/films-details-panel.component';
import { FilmsFilterComponent } from './components/films-list/films-filter/films-filter.component';

@NgModule({
  declarations: [
    FilmsListComponent,
    FilmsDetailsComponent,
    FilmsListPanelComponent,
    FilmsDetailsPanelComponent,
    FilmsFilterComponent,
  ],
  imports: [CommonModule, FilmsRoutingModule, SharedModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FilmsModule {}
