import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Category } from '../models/category';
import { Apicategory } from '../models/apicategory';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = "http://localhost:3000/categories"
  constructor(private http: HttpClient) { }
  
  getAllCategories(): Observable<Apicategory>{
    return this.http.get<Apicategory>(this.categoryUrl + '/categories')
    .pipe(
      catchError(this.handleError<Apicategory>('getAllCategories',))
    );

  }

  getAllCategoriesWhere(searchBar:string): Observable<any>{
    return this.http.get<any>(this.categoryUrl + '/search/' + searchBar)
    .pipe(
      catchError(this.handleError<any>('getAllCategoriesWhere',))
    );

  }

  getOneCategory(_id:string): Observable<Category>{
    return this.http.get<Category>(`${this.categoryUrl}/categories/${_id}`)
    .pipe(
      catchError(this.handleError<Category>('getOneCategory',))
    );
  }

  createCategory(category: Category){
    return this.http.post<Category>(this.categoryUrl + "/createcategory", category)
    .pipe(
      catchError(this.handleError<Category[]>('createCategory',[]))
    );
  }

  updateCategory(category: Category){
    return this.http.put<Category>(this.categoryUrl, category)
    .pipe(
      catchError(this.handleError<Category[]>('updateCategory',[]))
    );
  }

  destroyCategory(_id:string){
    return this.http.delete<Category>(`${this.categoryUrl}/${_id}`)
    .pipe(
      catchError(this.handleError<Category[]>('destroyCategory',[]))
    );
  }

  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T>=>{

      console.error(error);

      return of(result as T);
    }
  }

}
