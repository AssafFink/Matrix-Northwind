import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

// ng g c components/products-area/product-list

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[];

    constructor(
        private myTitle: Title,
        private myProductsService: ProductsService) { }

    async ngOnInit(): Promise<void> {
        try {
            this.myTitle.setTitle("Northwind - Products");
            this.products = await this.myProductsService.getAllProducts();
            console.log(this.products);
        }
        catch (err: any) {
            alert(err.message);
        }
    }
}
