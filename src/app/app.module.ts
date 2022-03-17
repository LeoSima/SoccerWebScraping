import { SelecionadorTimeComponent } from './selecionador-time/selecionador-time.component';
import { ComparadorTimeComponent } from './comparador-time/comparador-time.component';
import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparadorTimeComponent,
    SelecionadorTimeComponent
  ],
  imports: [
    BrowserModule,
    ApplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
