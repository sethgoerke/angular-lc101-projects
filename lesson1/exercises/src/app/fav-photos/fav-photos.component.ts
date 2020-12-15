import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'WOW! That is a great picture!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://th.bing.com/th/id/OIP.dHJjD95U-iuE1xgwNx3iBAHaDR?w=301&h=154&c=7&o=5&dpr=1.25&pid=1.7';
  image3 = 'https://www.bing.com/th?id=OIP.UedqWbNIJjjbY6N0bq7oOAHaEw&w=226&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2';

  constructor() { }

  ngOnInit() {
  }

}