import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
	apiKey: 'AIzaSyBEQhU4chkWYYv0FXsrfWCaN66YsCw3YTE'
	})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
