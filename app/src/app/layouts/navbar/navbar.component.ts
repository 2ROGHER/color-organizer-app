import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorsActions } from '../../ngrx/actions';
import { Store } from '@ngrx/store';
import { ColorStatus } from '../../models/enums/color-status.interface';
import { FilterActions } from '../../ngrx/actions/filters.actions';
import { DragDropService } from '../../services/drag-drop/drag-drop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // @Input()
  // activeForm!: boolean;

  // @Output()
  // activeFormEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private __store: Store,
    private __colorsActions: ColorsActions,
    private __filtersActions: FilterActions,
    private __dragDropService: DragDropService,
  ) {}



  handleSetFilterValue(s: string): void {
    alert(`the value is : ${s}`);
    this.__store.dispatch(this.__filtersActions.setFilterValue(s));
  }

  /****  Drag and Drop handlers ******* */
  onDragOver(e: DragEvent): void {
    e.preventDefault(); // Needed to allow the drop
  }

  onDrop(e: DragEvent): void {
    e.preventDefault(); // we need to prevent the default behavior of the browser to allow the drag and drop functionality
    const item = this.__dragDropService.getData(); // we get the color that we can to drag from the colors list component
    if (item) {
      // TODO("implement the dispatch to perform any actions")
      this.__store.dispatch(this.__colorsActions.setColorStatus(item.id, ColorStatus.FAVORITE));
      // this.__store.dispatch(this.__colorsActions.addColor(item));
      // then we need to clear the data
      this.__dragDropService.clearData();
    }
  }
}
