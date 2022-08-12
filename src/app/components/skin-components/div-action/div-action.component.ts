import { Component } from '@angular/core';
import {BaseDynamicComponent} from '../base-dynamic-component';

/**
 * This is layout implementation for base-dynamic-component.ts
 * It extends the same component logic but implements different templating and styling
 *
 * If needed we can keep adding new functionality to this concrete
 * implementation, since we are only extending the base component we will have available
 * all base component behavior + specific behavior for this implementation
 */

@Component({
  templateUrl: './div-action.component.html',
  styleUrls: ['./div-action.component.css']
})
export class DivActionComponent extends BaseDynamicComponent{}
