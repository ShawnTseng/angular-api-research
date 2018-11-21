import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgLocaleLocalization, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const tmp1 = registerLocaleData(localeFr, 'fr');
    const fr = new NgLocaleLocalization('fr');
    const test1 = fr.getPluralCategory(1.5);
    const test2 = fr.getPluralCategory(2);
    console.log(test1, test2);
  }
}
