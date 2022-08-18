import { Component, OnInit } from '@angular/core';

interface list{
  FirstName:string 
LastName:string 
Age : number 
Place: string 
salary:number
}



@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

lists:list[] =[
  {
    FirstName: 'rahul',
    LastName: 'jangir',
    Age : 34,
    Place:  'sikar',
    salary: 800,
  },
  {
    FirstName: 'shandhya',
    LastName: 'jangir',
    Age : 34,
    Place:  'sikar',
    salary: 900,
  },
  {
    FirstName: 'onker',
    LastName: 'jangir',
    Age : 64,
    Place:  'sikar',
    salary: 1000,
  },
  {
    FirstName: 'akshay',
    LastName: 'jangir',
    Age : 15,
    Place:  'sikar',
    salary: 1800,
  },
]

// // form
// FirstName:string = 'rahul';
// LastName:string = 'jangir';
// Age : number = 24;
// Place: string = 'sikar'
// image 
imgsrc : string = 'https://aarjaycreation.herokuapp.com/assets/img/Hero.jpg';
isdisable: boolean = false;


disable(){
this.isdisable = true
}

// two way binding 
yourtext : string = '';

// ngif 
isshow: boolean = true;
// // toggal the ul 
// removeul(){
//   this.isshow = !this.isshow;
// }







  constructor() { }

  ngOnInit(): void {
  }

}
