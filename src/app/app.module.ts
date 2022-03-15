import { ROOT_REDUCERS } from './State/app.state';
import { filmsReducer } from './State/Reducers/films.reducers';
import { CoreModule } from './modules/core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    //Vinculado a un reducer(que cambia el estado)
    StoreModule.forRoot(ROOT_REDUCERS),
    NgbModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CoreModule, StoreModule],
})
export class AppModule {}
