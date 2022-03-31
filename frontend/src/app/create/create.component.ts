import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  errormsg:any

  ngOnInit(): void {
  }
  userForm = new FormGroup(
    {
      'fullname': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'mobileno': new FormControl('',Validators.required),

    })

userSubmit()
{
  if(this.userForm.valid)
  {
    
this.service.createData(this.userForm.value).subscribe((res)=>{
this.userForm.reset();
this.errormsg='';
  })

  }
  else
  {

    
    this.errormsg='all fields are mandatory'
  }
}

}
