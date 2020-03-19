import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login={};
  constructor(private service:BackendService) { }

  ngOnInit() {
  }
  userlogin(){
    
    this.service.loginuser(this.login)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
      
      
    )
    
  }

}
