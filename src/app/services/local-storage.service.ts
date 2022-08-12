import { Injectable } from '@angular/core';
import {toggleLayoutMode} from '../app.component';

const LAYOUT_TYPE_KEY = 'LAYOUT_TYPE';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  getLayoutType(): LayoutType{
    return localStorage.getItem(LAYOUT_TYPE_KEY) as LayoutType;
  }

  setLayoutType(type: LayoutType){
    toggleLayoutMode(type)
    localStorage.setItem(LAYOUT_TYPE_KEY, type)
  }
}

export enum LayoutType{
  COLUMN_GRID = 'column_grid',
  ROW_GRID = 'row_grid'
}
