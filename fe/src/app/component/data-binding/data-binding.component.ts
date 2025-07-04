import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //string boolean number date  
  courseName : string = "Angular 18"; //strongly type datatype i.e if we assign the data type at the time to decclaration
  inputType = "checkbox ";

  rollno : number = 123;

  myClassName = "bg-primary";

  isIndian : boolean = false;

  currentData : Date = new Date();

  constructor(){
      
  }
}
