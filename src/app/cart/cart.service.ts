import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { ProductsService } from '../products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected cartList: Cart[] = [];
  constructor(private prod: ProductsService) {}

  getCartAll() {
    return this.cartList;
  }

  getInstock(id: any) {
    return this.cartList.find((i) => i.Id == id)?.InStock;
  }

  addCart(index: any, frmProduct: any) {
    let itemInCart = this.cartList.filter
      (
        (i) => i.Id == this.prod.getProductID(index)?.Id
      );
    let isItemInCart = itemInCart.length > 0;
    if (isItemInCart == false) {
      let id = this.cartList.push({
        Id: frmProduct.Id,
        Name: frmProduct.Name,
        Price: frmProduct.Price,
        InStock: frmProduct.InStock,
        Quantity: 0,
        ImageUrl: frmProduct.ImageUrl
      }) - 1;
      this.cartList[id].Quantity = this.cartList[id].Quantity! + 1;
      this.cartList[id].InStock = this.cartList[id].InStock! - 1;
      console.log(this.cartList);
    }
    else {
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].Id == this.prod.getProductID(index)?.Id) {
          this.cartList[i].Quantity = this.cartList[i].Quantity! + 1;
          this.cartList[i].InStock = this.cartList[i].InStock! - 1
        }
      }
    }
  }

  totalItem() {
    let sum = 0;
    this.cartList.forEach((item) => {
      sum += item.Quantity!;
    });
    return sum;
  }

  Total() {
    let total = 0;
    this.cartList.forEach((item) => {
      total += item.Price! * item?.Quantity!;
    });
    return total;
  }
  
  RemoveCart(index: any) {
    this.cartList[index].InStock! += 1;
    this.cartList[index].Quantity! -= 1;
    if (this.cartList[index].Quantity == 0) {
      this.cartList.splice(index, 1);
    }
  }

  DeleteAllCart()
  {
    for (let i = 0; i < this.cartList.length; i++)
    {
      this.cartList.splice(i, 1);
    }
    this.cartList = [];
  }
}
