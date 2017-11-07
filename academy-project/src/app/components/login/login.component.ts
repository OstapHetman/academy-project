import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
import { FlashMessagesService } from 'angular2-flash-messages';
import * as $ from "jquery";


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
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.login(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/dashboard']);
      $('#exampleModalLong').hide();
      $('.modal-backdrop.show').removeClass();
    })
    .catch((err) => {
      this.router.navigate(['/']);
    });
  }

}
