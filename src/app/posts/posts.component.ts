import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  faHeart = faHeart;
  faComments = faCommentDots;
  posts: Observable<Post[]>;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(data => {
        // this.category = data["category"]
        this.postService.getPosts(data['category']);
      })
    this.posts = this.postService.$posts;
  }

}
