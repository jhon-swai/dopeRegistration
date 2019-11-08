import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration/services/registration.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsForm: FormGroup;
  posts = null;

  constructor(private fb: FormBuilder, private regService: RegistrationService) { }

  ngOnInit() {
    this.postsForm = this.fb.group({
      title: [null, Validators.required],
      body: [null, Validators.compose([Validators.required])],
      userId: [1]
     
    })
    this.getPosts();
  }

  savePost() {
    const data = this.postsForm.value;
    this.regService.savePost(data).subscribe( res => {
        this.posts.pop(res);
    })
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

}
