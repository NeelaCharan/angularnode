import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
 userdata=[];
  constructor(private service:BackendService) { }

  ngOnInit() {
    this.service.getuserdata()
    .subscribe(
      res=> this.userdata=res,
      err=>console.log(err)
      
    )
  }

}
