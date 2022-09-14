import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';

// ng g m components/products-area/products --flat

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductCardComponent,
        AddProductComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class ProductsModule { }
