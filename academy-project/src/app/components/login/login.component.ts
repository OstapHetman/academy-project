import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.login(this.email, this.password)
    .then((res) => {
      this.flashMessagesService.show('You are logged in', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['patients']}}]);
    })
    .catch((err) => {
      this.flashMessagesService.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

}
