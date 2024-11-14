import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  protected productList: Product[] = [
    {
      Id: 1,
      Name: 'Chó bông',
      Price: 80000,
      ReleaseDate: '01/01/2024',
      ImageUrl: './assets/IMG/cho.png',
      starRating: 4.7,
      InStock: 20,
    },
    {
      Id: 2,
      Name: 'Thỏ bông',
      Price: 250000,
      ReleaseDate: '02/02/2024',
      ImageUrl: './assets/IMG/thobong.jpg',
      starRating: 4.8,
      InStock: 20,
    },
    {
      Id: 3,
      Name: 'Cừu len',
      Price: 185000,
      ReleaseDate: '03/03/2024',
      ImageUrl: './assets/IMG/cuu.png',
      starRating: 4.5,
      InStock: 20,
    },
    {
      Id: 4,
      Name: 'Ếch bông',
      Price: 100000,
      ReleaseDate: '04/04/2024',
      ImageUrl: './assets/IMG/echbong.jpg',
      starRating: 4.0,
      InStock: 20,
    },
    {
      Id: 5,
      Name: 'Panda bông',
      Price: 350000,
      ReleaseDate: '05/05/2024',
      ImageUrl: './assets/IMG/panda.jpg',
      starRating: 3.7,
      InStock: 20,
    },
    {
      Id: 6,
      Name: 'Teddy len',
      Price: 300000,
      ReleaseDate: '06/06/2024',
      ImageUrl: './assets/IMG/teddylen.jpg',
      starRating: 5.0,
      InStock: 20,
    },
  ];
  getAll_productList(): Product[] {
    return this.productList;
  }

  AutoID() {
    var max = 0;
    this.productList.forEach((item) => {
      if (item.Id > max) {
        max = item.Id;
      }
    });
    return max + 1;
  }

  AddProduct(frmProd: any, fileImg: any) {
    var index = this.productList.push(frmProd) - 1;
    this.productList[index].ImageUrl = fileImg;
    console.log(this.productList);
  }

  EditProduct(index: number) {
    return this.productList[index];
  }

  UpdateProduct(index: number, frmProduct: any, fileImg: string) {
    console.log(frmProduct.Name);
    this.productList[index].Name = frmProduct.Name;
    this.productList[index].Id = frmProduct.Id;
    this.productList[index].Price = frmProduct.Price;
    this.productList[index].ReleaseDate = frmProduct.ReleaseDate;
    this.productList[index].ImageUrl = fileImg;
  }

  DeleteProduct(index: number) {
    if (confirm('Bạn có muốn xóa sản phẩm này không?'))
      this.productList.splice(index, 1);
  }

  getProductID(id: any): Product | undefined {
    return this.productList.find((x) => x.Id == id);
  }
}
