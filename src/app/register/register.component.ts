import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerdata={};
  constructor(private service:BackendService) { }

  ngOnInit() {
  }
onsubmit(){
  console.log(this.registerdata);
  this.service.registeruser(this.registerdata)
  .subscribe(
    res=>console.log(res),
    err=>console.log(err)
  )

  }


}
