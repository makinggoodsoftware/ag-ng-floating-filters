import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// ag-grid
import {AgGridModule} from 'ag-grid-angular/main';
// application
import {AppComponent} from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents(
      [
      ]
    )
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
