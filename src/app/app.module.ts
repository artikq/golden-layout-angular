import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SystemsListComponent } from './systems-list/systems-list.component';

import {
  GoldenLayoutModule,
  GoldenLayoutConfiguration,
  DEFAULT_LOCAL_STORAGE_STATE_STORE_PROVIDER
} from '../golden_layout';
import * as GoldenLayout from 'golden-layout';

import { goldenLayoutConfig } from './golden-layout.config';

@NgModule({
  declarations: [
    AppComponent,
    SystemsListComponent
  ],
  entryComponents: [
    SystemsListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GoldenLayoutModule.forRoot(goldenLayoutConfig)
  ],
  providers: [
    DEFAULT_LOCAL_STORAGE_STATE_STORE_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
