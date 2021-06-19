import { Component } from '@angular/core';
import { faHome, faCommentDots, faUser, faBookmark, faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  
  list: {link: string; icon: IconDefinition; text: string}[] = [
    {
      link: "/feed",
      icon: faHome,
      text: "Home"
    },
    {
      link: "/messages",
      icon: faCommentDots,
      text: "Messages"
    },
    {
      link: "/profile",
      icon: faUser,
      text: "Profile"
    },
    {
      link: "/saved",
      icon: faBookmark,
      text: "Saved Posts"
    },
    {
      link: "/settings",
      icon: faCog,
      text: "Settings"
    },
  ]
}
