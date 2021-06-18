import { Component, Input, OnInit } from '@angular/core';
import { faHome, faCommentDots, faUser, faBookmark, faLifeRing, faCog, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faComment = faCommentDots;
  faUser = faUser;
  faSave = faBookmark;
  faPie = faLifeRing;
  faSettings = faCog;
  faCaret = faAngleDown;
  @Input() menu: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
