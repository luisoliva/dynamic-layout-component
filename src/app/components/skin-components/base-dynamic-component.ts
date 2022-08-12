import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../../services/logger.service';

/**
 * This is the base implementation for the dynamic component, this should contain all the shared logic,
 * as well as all the dependencies.
 *
 * it should not implement a layout, it should only implement behavior, this component should not be instantiated standalone, kind of
 * this enforcement consist on not declaring a selector, in this way there is no way if instantiating via html tag, but it still
 * instantiable through router and constructor.
 *
 * Since this class is decorated with @Component it can make use of all angular capabilities, like DI and lifecycle
 */

@Component({template: ''})
export class BaseDynamicComponent implements OnInit{

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  performAction(){
    this.logger.log('Triggered an alert from BaseDynamicComponent class')
  }
}
