import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import Color from '../../models/domain/color.model';
import { Category } from '../../models/domain/category.model';
import { Observable } from 'rxjs';
import { ColorComponent } from '../color/color.component';
import { Store } from '@ngrx/store';
import { FilterActions } from '../../ngrx/actions/filters.actions';
import {
  selectFilteredColors,
  selectFilters,
} from '../../ngrx/selectors/filters.selector';
import { DragDropService } from '../../services/drag-drop/drag-drop.service';
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
    private readonly __filterActions: FilterActions,
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
  onDrop(e: DragEvent): void { // We can put [e: DragEvent] instead of [Event]
    e.preventDefault(); // we need to prevent the default behavior of the browser to allow the drag and drop functionality
    if (
      this.draggedItemIndex !== null ||
      this.dragOverIndex !== null ||
      this.draggedItemIndex !== this.dragOverIndex
    ) {
      const item = this.colors[this.draggedItemIndex!]; // we get the index of the item that we can to drag
      // Here we need to copy the color item to the serivce to drag and drop at navigationbar
      this.__dragDropService.setData(item);
      // Optional add styles t reflect the changes
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
  }

  onDragEnter(e: Event, i: any): void {
    this.dragOverIndex = i; // The item that we are going to dragover
  }

  onDragEnd(): void {
    this.dragOverIndex = null; // we should clear the state
    this.draggedItemIndex = null; // we should clear the state
  }
}
