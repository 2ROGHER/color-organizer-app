import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpAction } from '../../ngrx/actions';
import { Store } from '@ngrx/store';
import { ISignUp } from '../../models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signUpForm: FormGroup | any;
  res$: Observable<any> | any;

  constructor(
    private readonly _signUpAction: SignUpAction,
    private _store: Store
  ) {}

  handleAddCretendialsForm() {
    window.alert('Form submitted successfully');
    this._store.dispatch(
      this._signUpAction.setSignUpCredentials(this.signUpForm.values as ISignUp)
    );
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

    this._store
      .select((state: any) => state.signup)
      .subscribe((r) => console.log(r));
  }
}
