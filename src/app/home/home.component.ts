import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: Product[] = [];
  filterProductList: Product[] = [];

  constructor(prod: ProductsService) {
    this.products = prod.getAll_productList();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterProductList = this.products;
  }
  searching: any;
  filterResult() {
    if (!this.searching) {
      this.filterProductList = this.products;
    }
    this.filterProductList = this.products.filter((list) =>
      list?.Name.toLowerCase().includes(this.searching.toLowerCase())
    );
  }
}
