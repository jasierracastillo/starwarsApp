import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AplicationComponent } from './aplication.component';

@NgModule({
  declarations: [AplicationComponent],
  imports: [CommonModule, ApplicationRoutingModule, SharedModule, StoreModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApplicationModule {}
