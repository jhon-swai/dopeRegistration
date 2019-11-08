import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  storeUserInStorage(data) {
     const dataStr = JSON.stringify(data);
     localStorage.setItem('userObject', dataStr);
  }
  getStorageUserData() {
    let data;
    if(localStorage.getItem('userObject')) {
       data = JSON.parse(localStorage.getItem('userObject'));
    } else {
      data = null;
    }
    return data;
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPostById(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  savePost(data) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
