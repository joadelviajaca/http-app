import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './services/posts.service';
import { Post } from './interfaces/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'http-app';

  posts: Post[] = [];

  newPost: Omit<Post,"id"> = {
    title: "",
    author: ""
  }

  constructor(private postService: PostsService){}
  ngOnInit(){
    this.postService.getPosts()
    .subscribe({
      next: (posts) => this.posts = posts
    })
  }

  addPost(){
    this.postService.addPost(this.newPost)
    .subscribe({
      next: (post) => {
        this.posts.push(post);
        this.newPost = { title: '', author: ''}
      }
    })
  }
}
