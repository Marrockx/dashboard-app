import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dashboard-app';
  toggled: boolean = false;

  links = [
    { path: '/dashboard', icon: 'dashboard', title: 'Dashboard' },
    { path: '/products', icon: 'eco', title: 'Products' },
    { path: '/categories', icon: 'spa', title: 'Categories' },
    { path: 'cart', icon: 'shopping_bag', title: 'Cart' },
    { path: '/settings', icon: 'settings', title: 'Settings' }
  ];


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

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

  modeToggle() {
    this.toggled = !this.toggled;
    document.body.classList.toggle('dark-theme');
  }
}
