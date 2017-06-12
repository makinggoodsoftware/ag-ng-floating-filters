import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// ag-grid
import {AgGridModule} from 'ag-grid-angular/main';
// application
import {AppComponent} from './app.component';
import {CustomFloatingFilter} from "./custom-floating-filter.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents(
      [
        CustomFloatingFilter
      ]
    )
  ],
  declarations: [
    AppComponent,
    CustomFloatingFilter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
