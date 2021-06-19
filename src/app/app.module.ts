import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './stories/story/story.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    StoriesComponent,
    StoryComponent,
    ProfilesComponent,
    ProfileComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
