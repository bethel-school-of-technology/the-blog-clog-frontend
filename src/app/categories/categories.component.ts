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
    console.log(this.searchBar);
  }

  getCategories(){
    this.categoryService.getAllCategories()
      .subscribe(responsecategories=>{
        this.categories=responsecategories.category
        console.log(responsecategories)
  })
  }

  // add (title:string, description:string){
  //   title=title.trim();
  //   description=description.trim();
  //   if(!title || !description) { return; }

  //   this.categoryService.createCategory({ title, description } as Category)
  //     .subscribe(creatingcategory=>{
  //       this.categories.push(creatingcategory as Category)
  //     })
  // }
}
