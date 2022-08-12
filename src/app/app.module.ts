import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DynamicLayoutViewComponent} from './components/view/dynamic-layout-view/dynamic-layout-view.component';
import {DynamicHostTemplate} from './directives/dynamic-component-host.directive';
import {BaseDynamicComponent} from './components/skin-components/base-dynamic-component';
import {DivActionComponent} from './components/skin-components/div-action/div-action.component';
import {ButtonActionComponent} from './components/skin-components/button-action/button-action.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicLayoutViewComponent,
    ButtonActionComponent,
    DivActionComponent,
    DynamicHostTemplate,
    BaseDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
