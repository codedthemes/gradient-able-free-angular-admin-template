import {Component, NgZone, OnInit, ViewEncapsulation} from '@angular/core';
import {GradientConfig} from '../../../../app-config';
import {Location} from '@angular/common';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationComponent implements OnInit {
  public styleSelectorToggle: boolean; // open configuration menu
  public layoutType: string; // layout type
  public rtlLayout: any; // rtl type
  public menuFixedLayout: any; // menu/navbar fixed flag
  public headerFixedLayout: any; // header fixed flag
  public boxLayout: any; // box layout flag
  public headerBackgroundColor: string; // header background color

  public headerBackColor: string;

  public gradientConfig: any;
  public isConfig: boolean;

  scroll = (): void => {
    if (this.headerFixedLayout === false) {
      (document.querySelector('#nav-ps-gradient-able') as HTMLElement).style.maxHeight = 'calc(100vh)';
      const el = document.querySelector('.pcoded-navbar.menupos-fixed') as HTMLElement;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 56) {
        el.style.position = 'fixed';
        el.style.transition = 'none';
        el.style.marginTop = '0';
      } else {
        el.style.position = 'absolute';
        el.style.marginTop = '56px';
      }
    } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
      document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
    }
  }

  constructor(private zone: NgZone, private location: Location) {
    this.gradientConfig = GradientConfig.config;
    this.setThemeLayout();
  }

  ngOnInit() {
    this.styleSelectorToggle = false;

    this.layoutType =  this.gradientConfig.layoutType;
    this.setLayout(this.layoutType);

    this.headerBackgroundColor = this.gradientConfig.headerBackColor;

    this.setHeaderBackground(this.headerBackgroundColor);

    this.rtlLayout = this.gradientConfig.rtlLayout;
    this.changeRtlLayout(this.rtlLayout);

    this.menuFixedLayout = this.gradientConfig.navFixedLayout;
    if (this.gradientConfig.layout === 'vertical') {
      this.changeMenuFixedLayout(this.menuFixedLayout);
    }

    this.headerFixedLayout = this.gradientConfig.headerFixedLayout;
    this.changeHeaderFixedLayout(this.headerFixedLayout);

    this.boxLayout = this.gradientConfig.boxLayout;
    this.changeBoxLayout(this.boxLayout);
  }

  setThemeLayout() {
    let currentURL = this.location.path();
    const baseHref = this.location['_baseHref'];
    if (baseHref) {
      currentURL = baseHref + this.location.path();
    }

    switch (currentURL) {
      case baseHref + '/layout/static':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.navFixedLayout = false;
        this.gradientConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/fixed':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.navFixedLayout = true;
        this.gradientConfig.headerFixedLayout = true;
        break;
      case baseHref + '/layout/nav-fixed':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.navFixedLayout = true;
        this.gradientConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/collapse-menu':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.collapseMenu = true;
        break;
      case baseHref + '/layout/vertical-rtl':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.rtlLayout = true;
        break;
      case baseHref + '/layout/horizontal':
        this.gradientConfig.layout = 'horizontal';
        this.gradientConfig.navFixedLayout = false;
        this.gradientConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/horizontal-l2':
        this.gradientConfig.layout = 'horizontal';
        this.gradientConfig.subLayout = 'horizontal-2';
        this.gradientConfig.navFixedLayout = false;
        this.gradientConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/horizontal-rtl':
        this.gradientConfig.layout = 'horizontal';
        this.gradientConfig.subLayout = 'horizontal-2';
        this.gradientConfig.navFixedLayout = false;
        this.gradientConfig.headerFixedLayout = false;
        this.gradientConfig.rtlLayout = true;
        break;
      case baseHref + '/layout/box':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.boxLayout = true;
        this.gradientConfig.headerFixedLayout = false;
        this.gradientConfig.collapseMenu = true;
        break;
      case baseHref + '/layout/light':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.layoutType = 'menu-light';
        this.gradientConfig.headerBackColor = 'header-blue';
        break;
      case baseHref + '/layout/dark':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.layoutType = 'dark';
        this.gradientConfig.headerBackColor = 'header-dark';
        break;
      case baseHref + '/layout/nav-color':
        this.gradientConfig.layout = 'vertical';
        this.gradientConfig.layoutType = 'menu-light';
        this.gradientConfig.headerBackColor = 'header-info';
        this.gradientConfig.navFixedLayout = true;
        this.gradientConfig.headerFixedLayout = true;
        break;
      default:
        break;
    }
  }

  setHeaderBackColor(color) {
    this.headerBackColor = color;
    (document.querySelector('body') as HTMLElement).style.background = color;
  }

  // change main layout
  setLayout(layout) {
    this.isConfig = true;
    document.querySelector('.pcoded-navbar').classList.remove('menu-light');
    document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
    document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
    document.querySelector('body').classList.remove('gradient-dark');

    this.layoutType = layout;
    if (layout === 'menu-light') {
      document.querySelector('.pcoded-navbar').classList.add(layout);
    }
    if (layout === 'dark') {
      document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
      document.querySelector('.pcoded-navbar').classList.add('brand-dark');
      this.setHeaderBackground('header-dark');

      document.querySelector('body').classList.add('gradient-dark');
    }
    if (layout === 'reset') {
      this.reset();
    }
  }

  reset() {
    document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
    this.ngOnInit();
  }

  setRtlLayout(e) {
    const flag = !!(e.target.checked);
    this.changeRtlLayout(flag);
  }

  changeRtlLayout(flag) {
    if (flag) {
      document.querySelector('body').classList.add('gradient-rtl');
    } else {
      document.querySelector('body').classList.remove('gradient-rtl');
    }
  }

  setMenuFixedLayout(e) {
    const flag = !!(e.target.checked);
    this.changeMenuFixedLayout(flag);
  }

  changeMenuFixedLayout(flag) {
    setTimeout(() => {
      if (flag) {
        document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
        document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
        if (this.gradientConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-gradient-able') as HTMLElement)
            .style.maxHeight = 'calc(100vh - 56px)'; // calc(100vh - 70px) amit
        }
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
        if (this.gradientConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-gradient-able') as HTMLElement).style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
        }
        if (this.gradientConfig.layout === 'vertical') {
          window.removeEventListener('scroll', this.scroll, true);
        }

      }
    }, 100);
  }

  setHeaderFixedLayout(e) {
    const flag = !!(e.target.checked);
    this.changeHeaderFixedLayout(flag);
  }

  changeHeaderFixedLayout(flag) {
    if (flag) {
      document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
    } else {
      document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
      // static
      if (this.gradientConfig.layout === 'vertical' && this.menuFixedLayout) {
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        window.removeEventListener('scroll', this.scroll, true);
      }
    }
  }

  setBoxLayout(e) {
    const flag = !!(e.target.checked);
    this.changeBoxLayout(flag);
  }

  changeBoxLayout(flag) {
    if (flag) {
      document.querySelector('body').classList.add('container');
      document.querySelector('body').classList.add('box-layout');
    } else {
      document.querySelector('body').classList.remove('box-layout');
      document.querySelector('body').classList.remove('container');
    }
  }

  setHeaderBackground(background) {
    this.headerBackgroundColor = background;
    this.gradientConfig.headerBackColor = background;
    document.querySelector('.pcoded-header').classList.remove('header-blue');
    document.querySelector('.pcoded-header').classList.remove('header-red');
    document.querySelector('.pcoded-header').classList.remove('header-purple');
    document.querySelector('.pcoded-header').classList.remove('header-info');
    document.querySelector('.pcoded-header').classList.remove('header-dark');
    document.querySelector('.pcoded-header').classList.remove('header-orenge');
    document.querySelector('.pcoded-header').classList.remove('header-green');
    document.querySelector('.pcoded-header').classList.remove('header-yellow');
    document.querySelector('.pcoded-header').classList.remove('header-orchidgreen');
    document.querySelector('.pcoded-header').classList.remove('header-indigogreen');
    document.querySelector('.pcoded-header').classList.remove('header-darkgreen');
    document.querySelector('.pcoded-header').classList.remove('header-darkblue');

    if (background !== 'header-default') {
      document.querySelector('.pcoded-header').classList.add(background);
    }
  }

}
