import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student1:string[];
  student2:string[];
  student3:string[];

  constructor() {
    this.student1 = ['temo', 'tsertsvadze', '12312'];
    this.student2 = ['dato', 'kereselidze', '232232'];
    this.student3 = ['giorgi', 'gviniashvili', '232323223'];


   }

  ngOnInit() {
  }

}
