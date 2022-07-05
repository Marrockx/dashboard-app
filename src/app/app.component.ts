import { AfterViewInit, Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'dashboard-app';
  toggled: boolean = false;

  links = [
    { path: '/dashboard', icon: 'dashboard', title: 'Dashboard' },
    { path: '/products', icon: 'eco', title: 'Products' },
    { path: '/categories', icon: 'spa', title: 'Categories' },
    { path: 'cart', icon: 'shopping_bag', title: 'Cart' },
    { path: '/settings', icon: 'settings', title: 'Settings' }
  ];

  theme: Theme = "light-theme";


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.autoFocus = false;
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  initializeTheme = (): void => { this.renderer.addClass(this.document.body, this.theme); }

  modeToggle() {
    // this.toggled = !this.toggled;
    this.document.body.classList.replace(
      this.theme,
      (this.theme === "light-theme")
        ? (this.theme = "dark-theme")
        : this.theme = "light-theme"
    );
  }


}


export type Theme = 'light-theme' | 'dark-theme';