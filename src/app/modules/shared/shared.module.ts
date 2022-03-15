import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { HeightPipe } from './pipes/height.pipe';

@NgModule({
  declarations: [
    NavigatorComponent,
    SearchPanelComponent,
    BackButtonComponent,
    WorkInProgressComponent,
    HeightPipe,
  ],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavigatorComponent,
    SearchPanelComponent,
    BackButtonComponent,
    WorkInProgressComponent,
    HeightPipe,
  ],
})
export class SharedModule {}
