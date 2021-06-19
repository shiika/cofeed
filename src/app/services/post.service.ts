import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Post } from "../interfaces/post.interface";

@Injectable({providedIn: "root"})

export class PostService {
    $posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
    loaded: Post[] = [];

    constructor(private route: ActivatedRoute) {}
    
    posts: Post[] = [
        {
            ID: 1,
            img: "../../assets/img/daniil-silantev-sN4u56baSB0-unsplash.jpg",
            likes: 0,
            comments: 45,
            username: "Dean Winchester"
          },
          {
            ID: 2,
            img: "../../assets/img/samantha-gades-BlIhVfXbi9s-unsplash.jpg",
            likes: 0,
            comments: 45,
            username: "Dean Winchester"
          },
          {
            ID: 3,
            img: "../../assets/img/roman-bozhko-PypjzKTUqLo-unsplash.jpg",
            likes: 0,
            comments: 45,
            username: "Dean Winchester"
          },
          {
            ID: 4,
            img: "../../assets/img/ian-dooley-_-JR5TxKNSo-unsplash.jpg",
            likes: 0,
            comments: 45,
            username: "Dean Winchester"
          },
    ];

    followingPosts: Post[] = [
      {
        ID: 2,
        img: "../../assets/img/samantha-gades-BlIhVfXbi9s-unsplash.jpg",
        likes: 0,
        comments: 45,
        username: "Dean Winchester"
      },
      {
          ID: 1,
          img: "../../assets/img/daniil-silantev-sN4u56baSB0-unsplash.jpg",
          likes: 0,
          comments: 45,
          username: "Dean Winchester"
        },
        {
          ID: 4,
          img: "../../assets/img/ian-dooley-_-JR5TxKNSo-unsplash.jpg",
          likes: 0,
          comments: 45,
          username: "Dean Winchester"
        },
        {
          ID: 3,
          img: "../../assets/img/roman-bozhko-PypjzKTUqLo-unsplash.jpg",
          likes: 0,
          comments: 45,
          username: "Dean Winchester"
        },
  ];

  newPosts: Post[] = [
    {
      ID: 2,
      img: "../../assets/img/samantha-gades-BlIhVfXbi9s-unsplash.jpg",
      likes: 0,
      comments: 45,
      username: "Dean Winchester"
    },
    {
        ID: 1,
        img: "../../assets/img/daniil-silantev-sN4u56baSB0-unsplash.jpg",
        likes: 0,
        comments: 45,
        username: "Dean Winchester"
      },
];

allPosts: Post[] = [
  {
    ID: 2,
    img: "../../assets/img/samantha-gades-BlIhVfXbi9s-unsplash.jpg",
    likes: 0,
    comments: 45,
    username: "Dean Winchester"
  },
  {
      ID: 1,
      img: "../../assets/img/daniil-silantev-sN4u56baSB0-unsplash.jpg",
      likes: 0,
      comments: 45,
      username: "Dean Winchester"
    },

    {
      ID: 3,
      img: "../../assets/img/roman-bozhko-PypjzKTUqLo-unsplash.jpg",
      likes: 0,
      comments: 45,
      username: "Dean Winchester"
    },
    {
      ID: 4,
      img: "../../assets/img/ian-dooley-_-JR5TxKNSo-unsplash.jpg",
      likes: 0,
      comments: 45,
      username: "Dean Winchester"
    },
];

    likePost(id: number, category: string): void {
        this.loaded = this.loaded.map(post => {
            if (post.ID == id) {
                post.likes += 1;
            }

            return post
        });
        console.log(category)
        this.savePosts(category);
        this.$posts.next(this.loaded);
    }

    getPosts(category: string): void {
      let cachedPosts;
      switch (category) {
        case "popular":
          cachedPosts = JSON.parse(localStorage.getItem("popular"));
          this.loaded = cachedPosts || this.posts;
          this.$posts.next(this.loaded);
          break;

        case "following":
          cachedPosts = JSON.parse(localStorage.getItem("following"));
          this.loaded = cachedPosts || this.followingPosts;
          this.$posts.next(this.loaded);
          break;

        case "new":
          cachedPosts = JSON.parse(localStorage.getItem("new"));
          this.loaded = cachedPosts || this.newPosts;
          this.$posts.next(this.loaded);
          break;

        case "all":
          cachedPosts = JSON.parse(localStorage.getItem("all"));
          this.loaded = cachedPosts || this.allPosts;
          this.$posts.next(this.loaded);
      }
    }

    private savePosts(category: string) {
      localStorage.setItem(category, JSON.stringify(this.loaded));

    }
}