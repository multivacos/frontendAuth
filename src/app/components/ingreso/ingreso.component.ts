import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.authService.ingresar(this.user)
    .subscribe(
      res=> {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/tareasprivadas'])
      },
      err => console.log(err)
    )
  }
}
