import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import {FormsModule} from "@angular/forms";
import { ReleaseTypeComponent } from './components/release-type/release-type.component';
import { ReleasesListComponent } from './components/releases-list/releases-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    ReleaseTypeComponent,
    ReleasesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
