import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TableCRUDComponent implements OnInit {
  title = 'demoProject';
  name =[ 
    {firstName: 'Harsh', lastName: 'Rai'},
    {firstName: 'Aman', lastName: 'Kumar'},
    {firstName: 'divyansh', lastName: 'Rajput'}
  ] ;
  booleanValue = [false , false, false];
  fName = '' ;
  lName = '' ;
  updateFName = '';
  updateLName = '';
  removeName(i) {
    this.name.splice(i, 1);
    this.booleanValue.pop();
  }
  addName() {
    this.name.push( {firstName:this.fName,lastName:this.lName} );
    this.booleanValue.push(false);
  }
  toogleValue(i) {
    this.booleanValue[i] = true;
  }
  update(i){
    this.name[i].firstName = this.updateFName;
    this.name[i].lastName = this.updateLName;
    this.booleanValue[i] = false; 
  }
  constructor() { }

  ngOnInit() {
  }

}
