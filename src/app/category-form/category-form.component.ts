import { Component, OnInit } from '@angular/core';
import { Categorynew } from "../models/categorynew";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  model: Categorynew = new Categorynew();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
  }

}
