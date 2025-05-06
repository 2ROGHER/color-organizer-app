import { Injectable, Inject } from '@angular/core';

/**
 * Service used to implement the drag and drop functionality in Angular
 */
@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  private __dragedData: any;

  constructor(@Inject('DATA_TOKEN') data: any) {
    this.__dragedData = data;
  }

  set setData(data: any) {
    this.__dragedData = data;
  }
  /**
   * Return the data of the item that is being dragged.
   * If there is not any item being dragged, return null.
   */
  get getData() {
    return this.__dragedData;
  }

  clearData() {
    this.__dragedData = null;
  }
}
