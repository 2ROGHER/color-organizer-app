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
import { selectFilteredColors, selectFilters } from '../../ngrx/selectors/filters.selector';
@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.scss',
})
export class ColorListComponent {
  @Input()
  colors: Color[] = [];

  colorList$!: Observable<Color[]>;

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
    private readonly _store: Store,
    private readonly _filterActions: FilterActions,
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
}
