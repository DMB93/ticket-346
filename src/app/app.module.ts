import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreenService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxPopupModule, DxTabPanelModule, DxFormModule, DxScrollViewModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxPopupModule,
    DxTabPanelModule,
    DxFormModule,
    DxScrollViewModule
  ],
  providers: [
    ScreenService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
