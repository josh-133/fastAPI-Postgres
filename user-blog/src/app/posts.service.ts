import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get("http://localhost:8000/posts/?skip=0&limit=10");
  }
}
