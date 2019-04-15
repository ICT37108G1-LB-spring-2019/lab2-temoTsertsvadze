import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
public StudentList:Student[];
  constructor() { 
this.StudentList = [new Student("Temur", "Tsertsvadze", "12319213"),
new Student("Davit", "Gviniashvili", "2323238"),
new Student("Giorgi", "Kereselidze", "2382388232"),
];


}
  ngOnInit() {
  }

}
export class Student {

  constructor(public name: string, public surname: string, public ID: number | string){

  }

}
