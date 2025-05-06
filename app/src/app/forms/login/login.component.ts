import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuardAuthLocalDataService } from '../../services/local-storage/guard-auth-local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authForm: FormGroup = new FormGroup({}); // This is the [model form] and we are goint to use [formGroup] to bind it to template

  constructor(
    private saveLocalStorageDataService: GuardAuthLocalDataService,
    private router: Router
  ) {
    this.authForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(e: Event): void {
    // TODO("implement to dispatch the username and password to loginReducer")
    setTimeout(() => {
      if (this.authForm.valid) {
        this.saveLocalStorageDataService.saveLocalStorageData(
          this.authForm.value.username,
          this.authForm.value.password
        );
      }

      this.router.navigate(['home']);
    }, 5000); // Here we are simulated the time taked by the process login
  }
}
