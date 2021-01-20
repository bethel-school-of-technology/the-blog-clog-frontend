import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchBar: any
  categories: any

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchBar = this.activatedRoute.snapshot.paramMap.get("term");
    this.categorySearch()
  }

  categorySearch(): void {
    this.categoryService.getAllCategoriesWhere(this.searchBar)
      .subscribe(searchedcategories=>{
        this.categories=searchedcategories.results
        console.log(this.categories)
      })
  }

}
