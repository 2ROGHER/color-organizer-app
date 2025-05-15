import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ISignUp } from '../../domain/interfaces';
import { Observable } from 'rxjs';
import { SignUpAction} from '../../../../core/state/actions';

/**
 *
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signUpForm: FormGroup | any;
  res$: Observable<any> | any;

  constructor(
    // private readonly __signUpAction: SignUpAction,
    private __store: Store
  ) {}

  handleAddCretendialsForm() {
    window.alert('Form submitted successfully');
    // this.__store.dispatch(
      // this.__signUpAction.setSignUpCredentials(this.signUpForm.values as ISignUp)
    // );
  }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', []),
      phone: new FormControl('', []),
      email: new FormControl('', []),
      address: new FormControl('', []),
      username: new FormControl('', []),
      password: new FormControl('', []),
    });

    this.__store
      .select((state: any) => state.signup)
      .subscribe((r) => console.log(r));
  }
}
