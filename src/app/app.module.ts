import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppComponent
  ],
  providers: [],

})
export class AppModule { }
