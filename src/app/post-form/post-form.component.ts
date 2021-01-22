import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  posts!: Post[];
  model: Post = new Post(); 
  category: any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get("category");
    this.getPosts();
  }

  onSubmit() {
    console.log('post successful')
    this.postService.createPost(this.category, this.model)
      .subscribe(response=>{
        console.log(response);
      })
  }

  getPosts() {
    this.postService.getAllPosts(this.category)
    .subscribe(responseposts => {
      this.posts = responseposts.category
      console.log(responseposts)
    })
  }

  
}
