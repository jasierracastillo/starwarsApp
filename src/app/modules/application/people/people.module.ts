import { SharedModule } from './../../shared/shared.module';
import { PeopleDetailsPanelComponent } from './components/people-details/people-details-panel.component';
import { PeopleListPanelComponent } from './components/people-list/people-list-panel.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleDetailsComponent,
    PeopleListPanelComponent,
    PeopleDetailsPanelComponent,
  ],
  imports: [CommonModule, PeopleRoutingModule, SharedModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PeopleModule {}
