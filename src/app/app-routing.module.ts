import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DynamicLayoutViewComponent} from './components/view/dynamic-layout-view/dynamic-layout-view.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicLayoutViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
