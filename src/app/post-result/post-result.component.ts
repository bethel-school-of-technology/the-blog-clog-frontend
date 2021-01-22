import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-result',
  templateUrl: './post-result.component.html',
  styleUrls: ['./post-result.component.css']
})
export class PostResultComponent implements OnInit {

  header: any
  content: any
  category: any
  posts: any

  constructor( private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get("category")
    this.getPosts()
  }

  getPosts() {
    this.postService.getAllPosts(this.category)
    .subscribe(responseposts => {
      this.posts = responseposts.category
      console.log(responseposts)
    })

}
}
