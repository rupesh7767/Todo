import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeauthService } from '../services/hardcodeauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  userid='123';
  password='';
  error="UserId Password not match";
  invalidlogin=false;
  loginauthenticate=false;
  
  constructor(private router: Router, private hardcodeauthService : HardcodeauthService) { }

  ngOnInit(): void {
  }

  login(){
    // if(this.userid==="123" && this.password==='123'){
    this.loginauthenticate = this.hardcodeauthService.authenticate(this.userid,this.password)
    if(this.loginauthenticate){
      this.router.navigate(['welcome',this.userid]);
      this.invalidlogin=false;
    } else{
      // console.log(this.error);
      this.invalidlogin=true;
    }
  }
}
