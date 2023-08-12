import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usres } from 'src/app/core/models/usres';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading: boolean;
  error: string;
  success: string;
  allUsers: Usres[];
  currentUser: Usres[];

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.error = '';
    this.success = '';
    this.allUsers = [];
    this.currentUser = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.generateForm();
    this.getAllUser();
  }

  generateForm(): void {
    this.form = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.authService
      .getTodos(this.form.value.username, this.form.value.password)
      .subscribe({
        next: (res) => {
          this.authService.userState.next(true);
          this.authService.myTodo.next(res);
          this.currentUser = this.allUsers.filter(
            (user) => user.username == this.form.value.username
          );
          this.authService.updateCurrent(this.currentUser);
          localStorage.setItem(
            'userinfo',
            JSON.stringify([
              { ...this.currentUser[0], password: this.form.value.password },
            ])
          );
        },
        error: (err) => {
          this.error = 'login fail';
        },
        complete: () => {
          if (window.localStorage.getItem('user')) {
            const userName = JSON.parse(window.localStorage.getItem('user')!);
          }
          this.router.navigate(['/todo']);
        },
      });
  }

  getAllUser(): void {
    this.authService.getAllUsers().subscribe({
      next: (products) => {
        this.allUsers = products;
      },
    });
  }
}
