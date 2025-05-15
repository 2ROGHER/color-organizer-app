import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorsActions } from '../../../core/state/actions';
import { FilterActions } from '../../../core/state/actions';
import { DragDropService } from '../../../core/services/drag-drop/drag-drop.service';
import { ColorStatus } from '../../../domains/color/domain/enums';

/**
 * SidebarComponent component
 *
 * This component is responsible for rendering the sidebar.
 * The sidebar contains the list of colors.
 * The sidebar is rendered on the left side of the screen.
 * The user can use the sidebar to navigate to the different colors.
 * The sidebar is a pure component, meaning that it doesn't contain any business logic.
 * The sidebar is a presentational component, meaning that it is only responsible for rendering the UI.
 * The sidebar doesn't have any inputs, so it doesn't need to be re-rendered unless the user interacts with it.
 * The sidebar is using the OnPush CD strategy, which means that it will only be re-rendered when the user interacts with it.
 * @author [Roger Mestanza](https://github.com/2ROGHER)
 *
 */
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush, // we are using the OnPush CD strategy because this component doesn't have any inputs, so it doesn't need to be re-rendered unless the user interacts with it.
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input()
  inProp: any;

  // This template is the son of any component that will use this template
  @Output()
  outFn: EventEmitter<any> = new EventEmitter();

  @Output()
  outDragStart: EventEmitter<any> = new EventEmitter();

  @Output()
  outDragOver: EventEmitter<any> = new EventEmitter();

  @ViewChild('menuItems', { static: false }) menuItems!: ElementRef;

  // ===============================================
  //                 LIFECYCLE
  // ===============================================

  constructor() {}
  ngOnInit(): void {
    console.log('SidebarComponent initialized');
  }

  ngOnDestroy(): void {
    console.log('SidebarComponent destroyed');
  }

  fn(e: Event, s: string = ''): void {
    this.menuItems.nativeElement.querySelectorAll('li')
      .forEach((i: any) => i.classList.remove('selected'));
    (e.target as HTMLElement).parentElement?.classList.add('selected');
    // Emit the filter type value to filter colors
    this.outFn.emit(s);
  }

  // ===============================================
  //                 HANDLERS
  // ===============================================
  onDragStart(e: DragEvent): void {}

  onDragOver(e: DragEvent): void {}
}

// ===============================================
//                 OLD CODE
// ===============================================

// handleSetFilterValue(s: string): void {
//   alert(`the value is : ${s}`);
//   this.__store.dispatch(this.__filtersActions.setFilterValue(s));
// }

// /****  Drag and Drop handlers ******* */
// onDragOver(e: DragEvent): void {
//   e.preventDefault(); // Needed to allow the drop
// }

// onDrop(e: DragEvent): void {
//   e.preventDefault(); // we need to prevent the default behavior of the browser to allow the drag and drop functionality
//   const item = this.__dragDropService.getData; // we get the color that we can to drag from the colors list component
//   if (item) {
//     // TODO("implement the dispatch to perform any actions")
//     this.__store.dispatch(
//       this.__colorsActions.setColorStatus(item.id, ColorStatus.FAVORITE)
//     );
//     // this.__store.dispatch(this.__colorsActions.addColor(item));
//     // then we need to clear the data
//     this.__dragDropService.clearData();
//   }
// }
