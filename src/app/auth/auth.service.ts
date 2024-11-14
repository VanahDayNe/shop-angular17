import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm, RegisterForm } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  isAdmin: boolean = false;
  isLogin: boolean = false;
  constructor(private router: Router) { }
  Users: any[] = [
    {
      email: 'vanah.day@gmail.com',
      password: '04072003',
      role: true
    }
  ];

  login(form: LoginForm)
  {
    for (let i = 0; i < this.Users.length; i++)
    {
      if (this.Users[i].email == form.email && form.password == this.Users[i].password)
      {
        this.isLogin = true;
        this.isAdmin = this.Users[i].role;
        console.log(form.email);
      }
    }
    if (this.isLogin == true)
    {
      this.isAuthenticated = true;
      this.router.navigate(['']);
    }
    else
    {
      alert('Đăng nhập không thành công');
      this.isAdmin = false;
      this.isAuthenticated = false;
      this.isLogin = false;
    }
  }

  logout()
  {
    this.router.navigate(['login']);
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.isLogin = false;
  }

  register(form: RegisterForm)
  {
    if (form.password != form.confirmPassword)
    {
      return;
    }
    else
    {
      this.Users.push(form);
      this.router.navigate(['login']);
      this.isAuthenticated = true;
    }
    console.log(this.Users);
  }
}
