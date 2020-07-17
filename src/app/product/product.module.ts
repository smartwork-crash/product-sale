import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [ProductComponent, CartComponent, ProductListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
