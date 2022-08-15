import {Type} from '@angular/core';

/**
 * Interface used to communicate which component to load depending on layout type
 */
export interface DynamicComponentSpec{
  rowLayoutComponentType: Type<any>;
  columnLayoutComponentType: Type<any>;
}
