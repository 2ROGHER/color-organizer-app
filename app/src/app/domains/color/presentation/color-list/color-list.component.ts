import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Color } from '../../domain/models';
import { Observable } from 'rxjs';
import { ColorComponent } from '../color/color.component';
import { Store } from '@ngrx/store';
import { ColorsActions, FilterActions } from '../../../../core/state/actions';

import { DragDropService } from '../../../../core/services/drag-drop/drag-drop.service';
import { ColorStatus } from '../../domain/enums';
@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.scss',
})
export class ColorListComponent {
  @Input()
  colors: Color[] = [];

  colorList$!: Observable<Color[]>; // TODO("change this property to use Observables from [selector]")

  dragOverIndex: number | null = null; // This property save the index of the item element that we are passing over
  draggedItemIndex: number | null = null; // This property save the index of the element that we are dragging

  // [@ViewChild]: Are all elements [HTML] used within template, of the determined componente. It's view.
  // This [@] decorator tell Angular how find the [child comonent] thatwe want to bind to this property [colorViewChild]
  // This [argument] that  we passs  to decorator  is same  type of the component [ColorComponent] that we want to search
  // In this case [colorviewChild] will be the first child of the component [ColorComponent] children list.
  @ViewChild(ColorComponent) colorViewChild: ColorComponent | any;

  // This new [decorator] is used when exists multiples childs within a component. No only one.
  // In this case we are using the [ColorComponent] to get your children from this component
  @ViewChildren(ColorComponent) colorViewChildren:
    | QueryList<ColorComponent>
    | any;

  // Get all stars componet here
  @ViewChild('stars') starsElement: ElementRef | undefined;

  constructor(
    private readonly __store: Store,
    private readonly __colorsActions: ColorsActions,
    private readonly __dragDropService: DragDropService
  ) {
    // console.log(`new - colorViewChild is ${this.colorViewChild}`);
    // this.colorList$ = this._store.select(selectFilteredColors);
  }

  ngAfterViewInit() {
    // console.log(`ngAfterView -  is ${this.colorViewChild}`);
    // let colors: Color[] = this.colorViewChildren.toArray();
    // console.log('getting al colors with ViewChildren: ', colors);
    // console.log('getting al colors with ViewChildren: ', this.colorViewChild);
    // Get the component with the [template local variable]
    // console.log(`[template local variable] - ${this.starsElement}`);
  }
  ngOnInit(): void {
    // console.log(
    //   `[All colors items completed charge]: ${JSON.stringify(this.colors)}`
    // );
  }

  // Dragable handler
  onDragOver(e: DragEvent): void {
    e.preventDefault(); // Needed to allow the drop
  }

  /**
   * This method is used when the user drop an item or press over in the item of a certain color
   * @param e - HTML Event
   */
  onDrop(e: DragEvent): void {
    console.log('ondrop in color-list', e);
    // We can put [e: DragEvent] instead of [Event]
    e.preventDefault(); // we need to prevent the default behavior of the browser to allow the drag and drop functionality
    if (
      this.draggedItemIndex !== null ||
      this.dragOverIndex !== null ||
      this.draggedItemIndex !== this.dragOverIndex
    ) {
      const item = this.colors[this.draggedItemIndex!]; // we get the index of the item that we can to drag
      // Here we need to copy the color item to the serivce to drag and drop at navigationbar
      console.log('item selected is', item);
      this.__dragDropService.setData = item;
      // Optional add styles t reflect the changes
      // This line is used to copy the name of the color that we are dragging to the Clipboard API
      // so that we can paste the color name in the Navigation Bar component.
      // The first parameter is the type of data that we want to copy, in this case "text/plain"
      // The second parameter is the data that we want to copy, in this case the name of the color.
      e.dataTransfer!.setData('text/plain', item.name);

      this.colors.splice(this.draggedItemIndex!, 1); // we remove the item that we are dragging

      this.colors.splice(this.dragOverIndex!, 0, item); // and we insert the item that we are dragging over
    }

    this.draggedItemIndex = null;
    this.dragOverIndex = null;
  }

  //********* handler to drag and drop ************** */
  onDragStart(e: Event, i: number): void {
    this.draggedItemIndex = i; // The item that we can to drag

    const item = this.colors.splice(this.draggedItemIndex, 1); // remove the item that we can to drag

    this.__dragDropService.setData = item;

    this.__store.dispatch(
      this.__colorsActions.setColorStatus(item[0].id, ColorStatus.DELETED)
    );
  }

  onDragEnter(e: Event, i: any): void {
    this.dragOverIndex = i; // The item that we are going to dragover
  }

  onDragEnd(): void {
    this.dragOverIndex = null; // we should clear the state
    this.draggedItemIndex = null; // we should clear the state
  }
}
