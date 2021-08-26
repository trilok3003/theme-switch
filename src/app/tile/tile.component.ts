import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
   price = 10000000;
   name = 'test'
  constructor() { }

  ngOnInit() {
  }

}