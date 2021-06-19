import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  faHeart = faHeart;
  faComments = faCommentDots;
  category: string;
  @Input("post") post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  likePost(id: number): void {
    this.postService.likePost(id, this.route.snapshot.params["category"]);
  }

}
