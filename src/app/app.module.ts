import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DynamicHostTemplate} from './directives/dynamic-component-host.directive';
import {RowLayoutComponent} from './components/grid/row-layout/row-layout.component';
import {ColumnLayoutComponent} from './components/grid/column-layout/column-layout.component';
import {GridComponent} from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RowLayoutComponent,
    ColumnLayoutComponent,
    DynamicHostTemplate,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
