import {Directive, ViewContainerRef} from '@angular/core';

/**
 * Lets dynamic component to place dynamic layout somewhere in the DOM
 */
@Directive({
  selector: '[dynamicHostTemplate]'
})
export class DynamicHostTemplate {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
