import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../shared/models/User';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = { id: 0, email: "", password: "" };
  $tokenSub: Subscription = new Subscription();

  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    var fail = false;
    this.isSubmitted = true;

    if (this.user.email === "" || this.user.password === "") {
      fail = true;
    }
    if (!fail) {
      this.$tokenSub = this.authService.authenticate(this.user).subscribe(
        result => {
          localStorage.setItem('token', result.token);
          localStorage.setItem('id', result.user.id.toString());
          localStorage.setItem('displayName', (result.user.firstName ?? result.user.email) + result.user.lastName);
          this.router.navigate(['']);
        }, error => {
          this.isSubmitted = false;
        });
    } else {
      this.isSubmitted = false;
    }
  }

  navigateRegister(): void {
    this.router.navigate(['register']);
  }

}
