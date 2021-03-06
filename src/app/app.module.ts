import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryService } from './services/category.service';
import { FormsModule } from '@angular/forms';
import { CategoryFormComponent } from './category-form/category-form.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PostResultComponent } from './post-result/post-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryFormComponent,
    // NavbarComponent,
    PostFormComponent,
    SearchResultComponent,
    PostResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
