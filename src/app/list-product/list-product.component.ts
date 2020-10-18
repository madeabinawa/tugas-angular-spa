import { Component, OnInit } from '@angular/core';
import { bookProduct } from '../book';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products = bookProduct;

  constructor() { }

  ngOnInit(): void {
  }

  keranjang() {
    window.alert("Produk ini telah masuk kedalam Cart");
  }

  wishlist() {
    window.alert("Produk ini telah masuk kedalam Wishlist");
  }



}
