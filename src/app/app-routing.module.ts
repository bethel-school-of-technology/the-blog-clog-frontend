import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
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
  // {
  //   path:
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
