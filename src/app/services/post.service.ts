import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Post } from '../models/post';
import { Apipost } from '../models/apipost';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = "http://localhost:3000/posts"
  constructor(private http: HttpClient) { }
  
  getAllPosts(): Observable<Apipost>{
    return this.http.get<Apipost>(this.postUrl + '/posts')
    .pipe(
      catchError(this.handleError<Apipost>('getAllPosts',))
    );

  }

  getOnePost(_id:string): Observable<Post>{
    return this.http.get<Post>(`${this.postUrl}/posts/${_id}`)
    .pipe(
      catchError(this.handleError<Post>('getOnePost',))
    );
  }

  createPost(post: Post){
    return this.http.post<Post>(this.postUrl + "/createpost", post)
    .pipe(
      catchError(this.handleError<Post[]>('createPost',[]))
    );
  }

  // updateCategory(category: Category){
  //   return this.http.put<Category>(this.categoryUrl, category)
  //   .pipe(
  //     catchError(this.handleError<Category[]>('updateCategory',[]))
  //   );
  // }

  // destroyCategory(_id:string){
  //   return this.http.delete<Category>(`${this.categoryUrl}/${_id}`)
  //   .pipe(
  //     catchError(this.handleError<Category[]>('destroyCategory',[]))
  //   );
  // }

  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T>=>{

      console.error(error);

      return of(result as T);
    }
  }

}