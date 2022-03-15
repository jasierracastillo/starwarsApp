import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, HttpClientModule, SharedModule],
  // exports: [SharedModule],
})
export class CoreModule {}
