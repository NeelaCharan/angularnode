import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:BackendService) { }
  user=[];
  ngOnInit() {
    this.service.getuser()
    .subscribe(
      res=>this.user=res,
      // res=> console.log(res),
     err=>console.log(err)
      
    )
  }

}
