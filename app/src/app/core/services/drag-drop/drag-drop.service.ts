import { Injectable, Inject } from '@angular/core';
import { Data } from './data.types';
import { Color } from '../../../domains/color/domain/models';


/**
 * Service used to implement the drag and drop functionality in Angular
 * Service takes the (drag) element and store it's position and (drop) in certain are of destination
 * @author [Roger Mestanza](https://github.com/2ROGHER)
 * @see https://angular.io/guide/drag-and-drop
 * @example
 *
 */
@Injectable({
  providedIn: 'root', // The service is provided in the root module

})
export class DragDropService {
  private __draggedData!: any;

  constructor() { }

  set setData(data: Data<Color> | any) {
    this.__draggedData = data;
  }
  /**
   * Return the data of the item that is being dragged.
   * If there is not any item being dragged, return null.
   */
  get getData(): Data<Color> | any {
    return this.__draggedData;
  }

  clearData() {
    this.__draggedData = null;
  }
}

/*
Example of how to use this service

import { Component, OnInit } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Component({cls
  selector: 'app-example',
  template: `
  <div (dragstart)="onDragStart($event)" draggable="true">Drag me</div>
  `
})
export class ExampleComponent implements OnInit {
  constructor(private dragDropService: DragDropService) { }

  ngOnInit(): void {
  }

  onDragStart(event: DragEvent) {
    this.dragDropService.setData({ name: 'John Doe', age: 42 });
  }
}

*/
