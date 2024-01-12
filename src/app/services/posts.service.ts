import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url: string = 'http://localhost:3000/posts/'
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    //   this.http.get(this.url).subscribe({
    //     next: (resp) => console.log(resp)
    //   })
    return this.http.get<Post[]>(this.url)
  }

  addPost(post: Omit<Post,"id">){
    return this.http.post<Post>(this.url, post)
  }

  
}
