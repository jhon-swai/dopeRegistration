import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string = 'Hello, how have you been?';
  username = '';
  counter = 0;
  names = [];

  constructor() { }

  ngOnInit() {
    this.setNames();
  }
  counting() {
     setTimeout(() => {
       this.counter++;
     }, 1000);
     if(this.counter > 1000) {
      return;
     }
     this.counting();
     
  }
  setNames() {
    this.names = ['Bryce', 'Caro', 'Chinaa', 'Aika', 'Latifa', 'Rukia','Erick'];
  }

}
