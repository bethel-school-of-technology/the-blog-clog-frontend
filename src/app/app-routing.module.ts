import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "search/:term",
    component: SearchResultComponent
  },
    {
    path: "categories/:category",
    component: PostFormComponent
  }
  // {
  //   path:
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
