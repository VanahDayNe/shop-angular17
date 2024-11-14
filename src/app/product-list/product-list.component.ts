import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList: Product[] = [];

  viewStar(str: any)
  {
    alert(`${str}`);
  }

  constructor(private prod: ProductsService)
  {
    this.productList = prod.getAll_productList();
  }
     
   formProduct = new FormGroup({
    Id: new FormControl<number>(1),
    Name: new FormControl<string>(''),
    ReleaseDate: new FormControl<string>(''),
    Price: new FormControl<number>(0),
    starRating: new FormControl<number>(5),
    ImageUrl: new FormControl<string>(''),
  });


  file: string = '';
  onChange(event: any)
  {
    var str = event.target.files[0].name;
    this.file = "/assets/IMG/" + str;
    console.log(this.file);
  }

  isAdd: number = 1;
  isUpdate: number = 0;
  Add()
  {
    this.formProduct.controls.Id.setValue(this.prod.AutoID());
    this.prod.AddProduct(this.formProduct.value, this.file);
  }

  id: any;
  Edit(index: number)
  {
    this.id = index;
    this.formProduct.controls['Name'].setValue(this.prod.EditProduct(index).Name);
    this.formProduct.controls['Id'].setValue(this.prod.EditProduct(index).Id);
    this.formProduct.controls['ReleaseDate'].setValue(this.prod.EditProduct(index).ReleaseDate);
    this.formProduct.controls['Price'].setValue(this.prod.EditProduct(index).Price);
    this.file = this.prod.EditProduct(index).ImageUrl;
  }

  Update()
  {
    this.prod.UpdateProduct(this.id, this.formProduct.value, this.file);
  }

  Delete(index: any)
  {
    this.prod.DeleteProduct(index);
  }
}
