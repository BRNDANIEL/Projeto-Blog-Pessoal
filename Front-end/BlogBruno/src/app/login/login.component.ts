import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin= new UserLogin

  constructor(
    private auth: AuthService 
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=>{
  this.userLogin=resp
})

  }

}
