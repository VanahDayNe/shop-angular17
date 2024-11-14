import { Component } from '@angular/core';
import { Product } from '../product';
import { Cart } from './cart';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productDetail: Product | undefined;
  cartList: Cart[] = [];
  InStock: number = 0;
  constructor(private router: ActivatedRoute, private prod: ProductsService, private cartService: CartService)
  {
    this.cartList = cartService.getCartAll();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let id = Number(this.router.snapshot.params['id']);
    this.productDetail = this.prod.getProductID(id);
    this.InStock = this.productDetail?.InStock!;
  }

  Add()
  {
    this.cartService.addCart(this.productDetail?.Id!, this.productDetail);
    this.InStock = this.cartService.getInstock(this.productDetail?.Id!)!;
  }

  ItemCount()
  {
    return this.cartService.totalItem();
  }

  ItemSum()
  {
    return this.cartService.Total();
  }

  Remove(index: any)
  {
    this.cartService.RemoveCart(index);
  }

  DeleteAll()
  {
    this.cartService.DeleteAllCart();
  }
}
