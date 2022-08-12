import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dynamicHostTemplate]'
})
export class DynamicHostTemplate {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
