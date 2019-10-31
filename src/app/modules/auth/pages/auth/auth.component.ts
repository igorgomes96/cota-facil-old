import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  async googleSignIn() {
    await this.authService.googleSignIn();
    this.router.navigate(['/main/inicio']);
  }

  async githubSignIn() {
    await this.authService.gitHubSignIn();
    this.router.navigate(['/main/inicio']);
  }

}
