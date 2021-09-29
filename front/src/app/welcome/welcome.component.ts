import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../services/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
  message: String = "";
  name = "";

  constructor(private route: ActivatedRoute,private welcomedataService: WelcomedataService) { }
  // private welcomedataService: WelcomedataService

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getwelcomemessage() {
    this.welcomedataService.executewelcomeservice(this.name).subscribe(
       response => this.handleResponse(response),
       error => this.handleErrorResponse(error)
    );
    // console.log(this.welcomedataService.executewelcomeservice());

  }

  handleResponse(response: any) {
    console.log(response);
    this.message=response.message;
    // this.message=response.message();  
    console.log(response.headers.get('X-Custom-Header'));
    // And access the body directly, which is typed as MyJsonData as requested.
    console.log(response.body.someField);
  }

  handleErrorResponse(error : any) {
    console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomedataService = error.error.message
  }
}


