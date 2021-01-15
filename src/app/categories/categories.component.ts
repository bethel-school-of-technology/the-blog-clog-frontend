import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories!:Category[];

  searchBar: string="";

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  categorySearch(): void {
    this.categoryService.getAllCategoriesWhere(this.searchBar)
      .subscribe(searchedcategories=>{
        this.categories=searchedcategories.category
        console.log(searchedcategories)
      })
  }

  getCategories(){
    this.categoryService.getAllCategories()
      .subscribe(responsecategories=>{
        this.categories=responsecategories.category
        console.log(responsecategories)
  })
  }

}
