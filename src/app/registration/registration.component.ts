import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  userData = null;
  posts = null;
  post = null;
  status = 'table';
  constructor(private fb: FormBuilder, private regService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    })
    this.getUserDataFromStorage();
    this.getPosts();
  }
  saveUserDataInStorage() {
    const data = this.registrationForm.value;
    this.regService.storeUserInStorage(data);
    this.registrationForm.reset();    
  }
  getUserDataFromStorage() {
     this.userData = this.regService.getStorageUserData();
  }
  getPosts() {
    this.regService
        .getPosts()
        .subscribe( result => {
          if(result) {
             this.posts = result;
             console.log('Posts', result);
          }
        }, error => {
          console.log('Error', error);
        })
  }
  viewPost(id) {
    this.regService.getPostById(id).subscribe( res => {
       this.post = res;
       this.status= 'view';
    }, err => {
      console.log('Error', err);
    })


  }
 

}
