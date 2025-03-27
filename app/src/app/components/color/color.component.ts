import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Color from '../../models/domain/color.model';
import { ColorsActions } from '../../ngrx/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ColorStatus } from '../../models/enums/color-status.interface';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss',
})
export class ColorComponent implements OnInit {
  @Input()
  color: Color | any;
  // isVisible: boolean = false;
  isVisible: boolean = false;
  private _prvVisible!: boolean;

  /**
   * This [@HostListener] is ideal to use with with components the need to [watch] any event
   * This can be used to toggle themenu with [ElmentRef and Renderer2]
   */
  @HostListener('click', ['$event'])
  onMouserOver() {
    // window.alert('clicked here');
    // console.log("element founded", this._ref.nativeElement);// this is used to find a element in the DOM.
  }

  /**
   * In this case we are going to use the [@ViewChild] decorator to
   */
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu!: ElementRef;


  // This is a life cycle hook method
  // This is invocaated when the component is created. This is called only once
  constructor(
    private  _colorsAction: ColorsActions,
    private _store: Store,
    private  _ref: ElementRef,
    private  _render: Renderer2
  ) {
  }

  // This is a life cycle hook method is invoked when exists any changes  at [input properties]
  // This is called for every input property changes
  // ngOnChanges() {}

  // This is a life cycle hook method is invoked when the component is initialised and it's done to use and
  // render the componente in the browser.
  ngOnInit(): void {
    // console.log('Initializing the component!');
    // console.log('chaging state', this.isVisible);

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Changes to component: ', changes);
  }

  // This is a life cycle method that is invoked when the [change detector] of the give component is invoqued
  ngDoCheck(): void {
    if (this.isVisible != this._prvVisible && this.dropdownMenu)  {
      this._prvVisible = this.isVisible; // This is the best way to do a toggle.
      if (this.isVisible) {
        this._render.setStyle(this.dropdownMenu.nativeElement, 'display', 'block');
      } else {
        this._render.setStyle(this.dropdownMenu.nativeElement, 'display', 'none');
      }
    }
  }

  // This is a life cycle hook method that is invoked just before the component is destroyed
  ngOnDestroy(): void {
    // console.log('Destroyed component');
  }

  // Here we are goint to use the [afterViewInit] lifecycle method to set styles after all components are mounted.
  ngAfterViewInit(): void {
    // const el = this._ref.nativeElement.querySelector('.dropdown-menu');
    // if (el) {
    //   console.log(el);
    //   this._render.setStyle(el, 'display', 'block');
    // } else {
    //   console.warn('Elemento no encontrado');
    // }
  }

  /**
   * Change properties detection methods
   */

  handleRemoveColor(): void {
    // this._store.dispatch(this._colorsAction.removeColor(this.color.id));
    this._store.dispatch(this._colorsAction.setColorStatus(this.color.id, ColorStatus.DELETED))
  }


}
