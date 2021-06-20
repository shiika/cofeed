import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  {
    path: "feed", loadChildren: () => import("./posts/posts.module").then(m => m.PostsModule)
  },
  {
    path: "messages", component: PlaceholderComponent
  },
  {
    path: "profile", component: PlaceholderComponent
  },
  {
    path: "saved", component: PlaceholderComponent
  },
  {
    path: "settings", component: PlaceholderComponent
  },
  {
    path: "", redirectTo: "feed", pathMatch: "full",
  },
  {
    path: "**", redirectTo: "feed", pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
