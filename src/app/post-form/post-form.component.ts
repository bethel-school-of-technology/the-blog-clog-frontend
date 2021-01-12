import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  model: Post = new Post();  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('post successful')
  }

}
