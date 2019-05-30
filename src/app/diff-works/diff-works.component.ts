import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-diff-works',
  templateUrl: './diff-works.component.html',
  styleUrls: ['./diff-works.component.css']
})
export class DiffWorksComponent implements OnInit {
  user = [
    { id: 0, username: 'Harsh', password: 'abc123' },
    { id: 1, username: 'Alex', password: 'xyz123' }
  ];
  uname: string;
  passwd: string;
  logValue = true;
  indexOfUser: number;
  login(i) {
    this.user.forEach(element => {
      if (element.username === this.uname && element.password === this.passwd) {
        this.logValue=false;
        this.indexOfUser = element.id;
        this.router.navigate(['/todo',this.indexOfUser]);
      }
    });
  }
  toggleLogValue(){
    this.logValue =true;
  }
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}
