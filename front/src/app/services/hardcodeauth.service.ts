import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeauthService {

  constructor() {

   }

   authenticate(userid: string,password: string){
    if(userid==="123" && password==='123'){
      sessionStorage.setItem('username',userid)
      return true
   }
   else
   return false;
  }

  isUserLogedIn(  ){
    let user=sessionStorage.getItem('username');
    return !(user===null)
  }
}
