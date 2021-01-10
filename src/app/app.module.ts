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

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryFormComponent
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
