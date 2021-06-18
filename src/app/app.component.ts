import { Component } from '@angular/core';
import { faHome, faCommentDots, faUser, faBookmark, faLifeRing, faCog, faAngleDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faHome = faHome;
  faComment = faCommentDots;
  faUser = faUser;
  faSave = faBookmark;
  faPie = faLifeRing;
  faSettings = faCog;
  faCaret = faAngleDown;
  
  list: {link: string; icon: IconDefinition; text: string}[] = [
    {
      link: "/",
      icon: faHome,
      text: "Home"
    },
    {
      link: "/chat",
      icon: faCommentDots,
      text: "Messages"
    },
    {
      link: "/user",
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
