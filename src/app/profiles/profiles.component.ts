import { Component, OnInit } from '@angular/core';
import { faBell, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  faBell = faBell;
  faCloud = faCloudUploadAlt;
  users: any[] = [
    {
      ID: 1,
      name: "Sarah Tancredi",
      email: "@dr.sarah",
      isFollowed: false
    },
    {
      ID: 2,
      name: "Arthur Shelby",
      email: "@art.shelby",
      isFollowed: true
    },
    {
      ID: 3,
      name: "Vin Diesel",
      email: "@v.diesel",
      isFollowed: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
