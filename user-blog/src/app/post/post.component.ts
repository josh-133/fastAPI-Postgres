import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: any;

  constructor(private service:PostsService) {  }

  ngOnInit(): void {
    this.posts = this.service.getPosts().subscribe(data=>this.posts=data);
  }
}
