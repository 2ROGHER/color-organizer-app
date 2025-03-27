import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/domain/category.model';
import Color from '../../models/domain/color.model';
import { ColorsActions } from '../../ngrx/actions';
import { Store } from '@ngrx/store';
import { v4 } from 'uuid';
@Component({
  selector: 'app-create-color-form',
  templateUrl: './create-color-form.component.html',
  styleUrl: './create-color-form.component.scss',
  styles: [
    `
      .category {
        // background: tomato;
      }
    `,
  ], // An array of styles files. each string is contains any number of CSS declarations
  encapsulation: ViewEncapsulation.Emulated, // By default [Emulated] is the strategy for default to render componentes in isolated way.
  // [native]:  we set on a component do not leak outside of the components scope. This allows us to define styles
  // in a isolated scope way.
  // styleUrls: []// Here we need to set an array of styleUrls
})
export class CreateColorFormComponent {
  // First all, we need to create a instance of FormGroup class.
  // These template is using the Template Form Driven now
  // trought the [formGroup] directive.

  // [Note important]: If we need to to create a component to search any value as <app-search-component>
  // we should be use [Reactive MOdel Form]
  addColorForm: FormGroup = new FormGroup({}); // This is the [model form] and we are goint to use [formGroup] to bind it to template

  // tests
  @Output()
  createColorEmitter: EventEmitter<any> = new EventEmitter();

  // code base
  @Output()
  activeFormEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly _colorsAction: ColorsActions,
    private readonly _store: Store
  ) {}

  handleCreateNewColor() {
    // This method allows us to create a new color wiht [@Output] decoratos and [output function binding]
    // this.createColorEmitter.emit(
    //   new Color(
    //     c.id,
    //     c.name,
    //     c.category,
    //     c.hexValue,
    //     c.description,
    //     c.stars,
    //     c.rate,
    //     '',
    //     ''
    //   )
    // );
    this._store.dispatch(
      this._colorsAction.addColor({
        ...this.addColorForm.value.details,
        ...this.addColorForm.value.stars,
        ...this.addColorForm.value.rate,
        id: v4(),
      } as Color)
    );
  }

  ngOnInit() {
    this.addColorForm = new FormGroup({
      details: new FormGroup({
        name: new FormControl('', [
          // new FormControl('initial value', controls)
          Validators.required,
          Validators.minLength(15),
        ]),
        category: new FormControl('', Validators.required),
        hexValue: new FormControl(),
        description: new FormControl(),
      }),
      stars: new FormControl(),
      rate: new FormControl(),
    });

    this.addColorForm.valueChanges.subscribe((v: any) => {
      // To do something when anything changes at the state.
    });
  }

  handleActiveForm(): void {
    this.activeFormEmitter.emit(false);
  }

  // onSubmitForm(): void {
  //   if (this.addColorForm.valid) {
  //     window.alert('Submit form submission successfully');
  //     // reset the form by Model From Driven aproach.
  //     this.addColorForm.reset();
  //   } else {
  //     window.alert('The form submission failed. Form is invalid');
  //   }
  // }
}
