import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PostComponent } from "./post/post.component";
import { PostsComponent } from "./posts.component";
import { PostsRoutingModule } from "./posts-routing.module";

@NgModule({
    declarations: [PostsComponent, PostComponent ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        PostsRoutingModule
    ]
})

export class PostsModule {}