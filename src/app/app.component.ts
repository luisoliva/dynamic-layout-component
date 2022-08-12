import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LayoutType, LocalStorageService} from './services/local-storage.service';

/**
 * Down code is not within any class or service because in order to call it from an abstract class needs to be globally exposed in the application,
 * abstract classes cannot instantiate service
 */
const LAYOUT_TOGGLE: BehaviorSubject<LayoutType> = new BehaviorSubject<LayoutType>(LayoutType.COLUMN_GRID)
export function toggleLayoutMode(newLayoutType: LayoutType){
  LAYOUT_TOGGLE.next(newLayoutType)
}
export function layoutToggle(): Observable<LayoutType>{
  return LAYOUT_TOGGLE.asObservable();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  layoutType!: LayoutType;

  constructor(private localStorage: LocalStorageService) {
    this.localStorage.setLayoutType(
      this.localStorage.getLayoutType() ?? LayoutType.COLUMN_GRID
    )
    layoutToggle().subscribe(event => {
      this.layoutType = event
    })
  }

  toggleLayout(element: HTMLInputElement, event: MouseEvent){
    event.preventDefault()
    event.stopPropagation()
    const newSwitchStatus = !element.checked
    this.localStorage.setLayoutType(this.booleanToLayoutType(newSwitchStatus))
  }

  booleanToLayoutType(boolean: boolean): LayoutType{
    if (boolean){
      return LayoutType.COLUMN_GRID
    }else{
      return LayoutType.ROW_GRID
    }
  }

  layoutTypeToBoolean(type: LayoutType): boolean{
    return type !== LayoutType.ROW_GRID;
  }
}
