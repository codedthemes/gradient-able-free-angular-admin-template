import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {
  public searchOn: boolean;

  constructor() {
    this.searchOn = false;
  }

  ngOnInit() { }

}
