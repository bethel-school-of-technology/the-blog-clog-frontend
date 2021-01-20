import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Post } from '../models/post';
import { Apipost } from '../models/apipost';

import { Category } from '../models/category';
import { Apicategory } from '../models/apicategory';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = "http://localhost:3000/posts"
  constructor(private http: HttpClient) { }
  
  getAllPosts(category: string): Observable<any>{
    return this.http.get<any>('http://localhost:3000/categories/' + category)
    .pipe(
      catchError(this.handleError<any>('getAllPosts',))
    );
  }

  // getOnePost(_id:string): Observable<Post>{
  //   return this.http.get<Post>(`${this.postUrl}/posts/${_id}`)
  //   .pipe(
  //     catchError(this.handleError<Post>('getOnePost',))
  //   );
  // }

  createPost(post: Post){
    return this.http.post<Post>(this.postUrl + "/:category", post)
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