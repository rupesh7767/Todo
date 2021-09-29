import { Component, OnInit } from '@angular/core';
import { HardcodeauthService } from '../services/hardcodeauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isuserLogedin : boolean = false;

  constructor( public hardcodeauthService : HardcodeauthService) { }
  
 

  ngOnInit(): void {
    console.log(this.hardcodeauthService.isUserLogedIn())
  }

}
