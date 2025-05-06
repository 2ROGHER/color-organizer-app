import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/domain/category.model';
import Color from '../../models/domain/color.model';
import { ColorsActions } from '../../ngrx/actions';
import { Store } from '@ngrx/store';
import { v4, validate } from 'uuid';
import { ColorStatus } from '../../models/enums/color-status.interface';
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

  // hexValue!: string;

  // This property is used to set the color of the color picker.
  @Output()
  createColorEmitter: EventEmitter<any> = new EventEmitter();

  // code base
  @Output()
  activeFormEmitter: EventEmitter<any> = new EventEmitter();

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event, i: number): void {
    e.preventDefault();
  }

  constructor(
    private readonly _colorsAction: ColorsActions,
    private readonly _store: Store
  ) {}

  handleCreateNewColor() {
    window.alert('Color created successfully'); // info the user that this operation is done successfully.
    this._store.dispatch(
      this._colorsAction.addColor(
        new Color(
          v4(),
          this.addColorForm.value.name.trim(),
          new Category(''), // This values are hardcoded for now, this will be changed later in the datails page
          this.addColorForm.value.hexValue.trim(),
          'Empty description',
          3,
          3,
          ColorStatus.ACTIVE,
          new Date().toString(),
          new Date().toString()
        )
      )
    );
  }

  ngOnInit() {
    // Initialize the form group and set the default values.
    this.addColorForm = new FormGroup({
      color: new FormControl('#999999', [Validators.required]),
      hexValue: new FormControl('#999999', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });

    // When change the color picker, update the input with 'hexValue'
    this.addColorForm.get('color')?.valueChanges.subscribe((c: string) => {
      this.addColorForm.get('hexValue')?.setValue(c, { emitEvent: false });
    });

    // Now if the color of the 'hexValue' is updated, we need to change the color picker value
    this.addColorForm.get('hexValue')?.valueChanges.subscribe((c: string) => {
      this.addColorForm.get('color')?.setValue(c, { emitEvent: false });
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
