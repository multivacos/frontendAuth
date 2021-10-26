import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  registrar(user: { email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/registro', user);
  }

  ingresar(user: { email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/ingreso', user);
  }

  comprobarLogin() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/ingreso']);
  }
}