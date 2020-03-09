import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GradientConfig} from '../../../../app-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public windowWidth: number;
  public gradientConfig: any;
  @Output() onNavMobCollapse = new EventEmitter();

  constructor() {
    this.gradientConfig = GradientConfig.config;
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() { }

  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.onNavMobCollapse.emit();
    }
  }
}
