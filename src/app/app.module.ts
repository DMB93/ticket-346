import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreenService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxPopupModule, DxTabPanelModule, DxFormModule, DxScrollViewModule, DxBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxFormModule,
    DxPopupModule,
    DxScrollViewModule,
    DxTabPanelModule,
  ],
  providers: [
    ScreenService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
