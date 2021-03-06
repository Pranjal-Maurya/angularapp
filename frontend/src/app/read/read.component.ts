import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'; 
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  ngOnInit(): void {
    this.service.getallData().subscribe((res)=>
    {
      console.log(res);
      this.readData = res.data;
    })
  }

}
