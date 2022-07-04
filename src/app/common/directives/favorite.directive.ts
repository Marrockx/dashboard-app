import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[favorite]'
})
export class FavoriteDirective {

  @HostBinding('class.is-favorite') isFavorite: boolean = true;
  @HostBinding('class.is-favorite-hovering') hovering: boolean = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set favorite(value: any) {
    this.isFavorite = value;
  }
  constructor() { }

}
