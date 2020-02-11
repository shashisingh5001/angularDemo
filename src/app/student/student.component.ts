import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name:String;
  myDate:Date;
  myStudent:any[]=[];
  myEmployee:any[]=[];
  constructor() { }

  ngOnInit() {
    this.name="Shashi Shankar Singh";
    this.myDate=new Date();

   ;
    this.myStudent=[
     {
       'name':'Nilesh',
       'gender':'M'
     }, 
     {
      'name':'Shashi',
      'gender':'M'
    },

    {
      'name':'Roshan',
      'gender':'M'
    }
    

    ];
   
  }

}
