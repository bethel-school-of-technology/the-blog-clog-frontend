import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  model: Category = new Category();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
    this.categoryService.createCategory(this.model)
      .subscribe(response=>{
        console.log(response);
      })
  }

}
