import {Component, Directive, OnInit, Type, ViewChild} from '@angular/core';
import {DynamicHostTemplate} from './dynamic-component-host.directive';
import {layoutToggleEvents} from '../app.component';
import {LayoutType} from '../services/local-storage.service';
import {DynamicComponentSpec} from '../models/dynamic-component-spec.model';

/**
 * This class should be extended in all dynamic components, it will provide common behavior and ensure every
 * component is implemented as dynamic mechanism expects.
 *
 * all dynamic components should implement a DynamicHostTemplate
 * It subscribes to layout toggle events, so it can handle properly the dynamic layout switching
 * Exposes to implementers the getDynamicComponentSpec() method, so implementers can decide which component to render based on the LayoutType
 */

@Directive()
export abstract class DynamicLayoutComponent implements OnInit{
  /**
   * reference to DynamicHostTemplate element
   * @protected
   */
  @ViewChild(DynamicHostTemplate, {static: true}) protected host!: DynamicHostTemplate;

  /**
   * common behavior that all dynamic components should extend to get functionality out of the box
   */
  ngOnInit() {
    if (!this.host){
      throw new Error("DynamicHostTemplate template not found. Please verify that your base component implements at least one DynamicComponentHost directive")
    }
    layoutToggleEvents().subscribe(event => {
      this.host.viewContainerRef.clear()
      this.loadComponent(event)
    })
  }

  /**
   * Loads dynamic layout components based on getDynamicComponentSpec result
   * @param layoutType current layout type
   */
  private loadComponent(layoutType: LayoutType): void{
    const dynamicComponentSpec = this.getDynamicComponentSpec();
    if (layoutType === LayoutType.COLUMN_GRID){
      this.host.viewContainerRef.createComponent(dynamicComponentSpec.columnLayoutComponentType)
    }else{
      this.host.viewContainerRef.createComponent(dynamicComponentSpec.rowLayoutComponentType)
    }
  }

  /**
   * Indicates which layout implementation to load in each layout type
   */
  protected abstract getDynamicComponentSpec(): DynamicComponentSpec;
}
