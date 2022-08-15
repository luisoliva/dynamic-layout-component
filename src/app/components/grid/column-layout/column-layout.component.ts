import { Component } from '@angular/core';
import {GridBehavior} from '../grid.behavior';

/**
 * This is a layout implementation for grid.component.ts
 * It extends the same component logic but implements different templating and styling
 *
 * If needed we can keep adding new functionality to this concrete
 * implementation, since we are only extending the base component we will have available
 * all base component behavior and dependencies according to attribute visibility
 */

@Component({
  //There is no need of a selector, since it should not instantiate through templates
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.css']
})
export class ColumnLayoutComponent extends GridBehavior{}
