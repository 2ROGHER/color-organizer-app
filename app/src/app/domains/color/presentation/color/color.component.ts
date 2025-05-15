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
import { Color } from '../../domain/models';
import { ColorStatus } from '../../domain/enums';
import { Store } from '@ngrx/store';
import { ColorActions } from '../../../../core/state/actions';

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
    private  __colorsAction: ColorActions,
    private __store: Store,
    private  __ref: ElementRef,
    private  __render: Renderer2
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
        this.__render.setStyle(this.dropdownMenu.nativeElement, 'display', 'block');
      } else {
        this.__render.setStyle(this.dropdownMenu.nativeElement, 'display', 'none');
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
    //   this.__render.setStyle(el, 'display', 'block');
    // } else {
    //   console.warn('Elemento no encontrado');
    // }
  }

  /**
   * Change properties detection methods
   */

  handleRemoveColor(): void {
    // this.__store.dispatch(this.__colorsAction.removeColor(this.color.id));
    this.__store.dispatch(this.__colorsAction.addColorStatus(this.color.id, ColorStatus.DELETED))
  }


}
