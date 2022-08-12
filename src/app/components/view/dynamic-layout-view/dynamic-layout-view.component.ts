import {Component} from '@angular/core';
import {DynamicLayoutComponent} from '../dynamic-layout-component';
import {DynamicComponentSpec} from '../dynamic-component-spec';
import {ButtonActionComponent} from '../../skin-components/button-action/button-action.component';
import {DivActionComponent} from '../../skin-components/div-action/div-action.component';


@Component({
  selector: 'app-dynamic-layout-view',
  templateUrl: 'dynamic-layout-view.component.html',
  styleUrls: ['dynamic-layout-view.component.css']
})
export class DynamicLayoutViewComponent extends DynamicLayoutComponent {
  getDynamicComponentSpec(): DynamicComponentSpec {
    return {
      rowLayoutComponentType: ButtonActionComponent,
      columnLayoutComponentType: DivActionComponent
    }
  }
}
