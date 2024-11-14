import { Component } from '@angular/core';
import { Product } from './product';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyProject';
  constructor(private authService: AuthService) { }
  
  isAuthenticated()
  {
    return this.authService.isAuthenticated;
  }

  isAdmin()
  {
    return this.authService.isAdmin;
  }

  logout()
  {
    this.authService.logout();
  }
 
}
