import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Product[]=[];
  constructor(private service:CartService) { }

  ngOnInit() {
    this.items = this.service.getItems();
  }

}
