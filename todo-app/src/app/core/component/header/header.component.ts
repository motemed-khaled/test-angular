import { CSP_NONCE, Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { Usres } from '../../models/usres';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userImage: string;
  userName: string;
  loginState: boolean;
  currentUser!: Usres[];

  constructor(private authService: AuthServiceService, private router: Router) {
    this.userImage = '';
    this.userName = '';
    this.loginState = false;
  }

  ngOnInit(): void {
    if (window.localStorage.getItem('userinfo')) {
      const user = JSON.parse(window.localStorage.getItem('userinfo')!);
      this.userImage = user[0].avatar;
      this.userName = user[0].name;
      this.loginState = true;
      this.authService.getTodos(user[0].username, user[0].password).subscribe({
        next: (res) => {
          this.authService.myTodo.next(res);
        },
      });
    }
    this.authService.getCurrentUser().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.userImage = res[res.length - 1].avatar;
          this.userName = res[res.length - 1].name;
          this.loginState = true;
        }
      },
    });
  }

  logout() {
    window.localStorage.removeItem('userinfo');
    this.userImage = '';
    this.userName = '';
    this.loginState = false;
    this.authService.userState.next(false);
    this.router.navigate(['login']);
  }
}
