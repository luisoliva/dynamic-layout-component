import {Type} from '@angular/core';

export interface DynamicComponentSpec{
  rowLayoutComponentType: Type<any>;
  columnLayoutComponentType: Type<any>;
}
