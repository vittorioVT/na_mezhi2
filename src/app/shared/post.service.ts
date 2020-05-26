import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../admin/shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.fbDbUrl}/posts.json`, post)
  }

}
