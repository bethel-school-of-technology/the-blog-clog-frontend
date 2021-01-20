import { Component } from '@angular/core';

import { CategoryService } from './services/category.service';
import { Category } from './models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PostBoard';

  // Below is all added from the categories componet
  categories!:Category[];
  searchBar: string="";

  constructor(private categoryService: CategoryService, private router: Router) { }

  categorySearch(): void {
    this.router.navigateByUrl("/search/" + this.searchBar)

    // this.categoryService.getAllCategoriesWhere(this.searchBar)
    //   .subscribe(searchedcategories=>{
    //     this.categories=searchedcategories.category
    //     console.log(searchedcategories)
    //   })
  }

}
