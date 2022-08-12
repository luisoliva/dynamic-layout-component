import {Component, OnInit, Type, ViewChild} from '@angular/core';
import {DynamicHostTemplate} from '../../directives/dynamic-component-host.directive';
import {layoutToggle} from '../../app.component';
import {LayoutType} from '../../services/local-storage.service';
import {DynamicComponentSpec} from './dynamic-component-spec';

/**
 * This class should be extended in all dynamic components, it will provide common behavior and ensure every
 * component is implemented as dynamic mechanism expects.
 *
 * all dynamic components should implement a DynamicHostTemplate
 * It subscribes to layout toggle events, so it can handle properly the dynamic layout switching
 * Exposes to implementers the getDynamicComponentSpec() method, so implementers can decide which component to render based on the LayoutType
 */

@Component({template: ''})
export abstract class DynamicLayoutComponent implements OnInit{
  @ViewChild(DynamicHostTemplate, {static: true}) protected host!: DynamicHostTemplate;

  ngOnInit() {
    if (!this.host){
      console.error('DynamicHostTemplate template not found. Please verify that your')
    }
    layoutToggle().subscribe(event => {
      this.host.viewContainerRef.clear()
      this.loadComponent(event)
    })
  }

  loadComponent(layoutType: LayoutType): void{
    const dynamicComponentSpec = this.getDynamicComponentSpec();
    if (layoutType === LayoutType.COLUMN_GRID){
      this.host.viewContainerRef.createComponent(dynamicComponentSpec.columnLayoutComponentType)
    }else{
      this.host.viewContainerRef.createComponent(dynamicComponentSpec.rowLayoutComponentType)
    }
  }

  abstract getDynamicComponentSpec(): DynamicComponentSpec;
}
