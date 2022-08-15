import {Directive} from '@angular/core';
import {LoggerService} from '../../services/logger.service';

/**
 * This is the base behavior for the component, should be a Directive since it doesn't implement a template, and
 * should be abstract to avoid instantiation
 */

@Directive()
export abstract class GridBehavior {

  constructor(protected logger: LoggerService) {}

  performAction(event: MouseEvent){
    event.preventDefault()
    event.stopPropagation()
    this.logger.log(`Triggered an alert from GridBehavior class`)
  }
}
