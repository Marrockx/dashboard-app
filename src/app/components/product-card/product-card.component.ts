import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  title: string = 'Remember Me';
  description: string = 'hei';
  imageUrl: string = '';

  @Input() product: any;

  @Output() like = new EventEmitter();
  @Output() share = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  likeItem(favoriteStatus: boolean) {
    console.log('liked')
    this.like.emit(this.product.isFavorite = !favoriteStatus);
  }

  shareItem() {
    console.log('shared')
    this.share.emit(this.product);
  }

}
