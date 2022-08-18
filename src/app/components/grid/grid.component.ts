import {Component} from '@angular/core';
import {DynamicLayoutComponent} from '../../directives/dynamic-layout-component';
import {DynamicComponentSpec} from '../../models/dynamic-component-spec.model';
import {RowLayoutComponent} from './row-layout/row-layout.component';
import {ColumnLayoutComponent} from './column-layout/column-layout.component';

/**
 * This is the instantiable Grid class, it must implement at least the minimum layout (<ng-template dynamicHostTemplate></ng-template>)
 * and extend DynamicLayoutComponent, so it can inherit all the base dynamic component implementation
 *
 *
 */

@Component({template: '<ng-template dynamicHostTemplate></ng-template>'})
export class GridComponent extends DynamicLayoutComponent{

  getDynamicComponentSpec(): DynamicComponentSpec {
    return {
      rowLayoutComponentType: RowLayoutComponent,
      columnLayoutComponentType: ColumnLayoutComponent
    };
  }
}
