import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { environment } from 'src/environments/environment';

// ng g c components/products-area/product-details

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public imageSource: string;

    constructor(
        private myActivatedRoute: ActivatedRoute,
        private myProductsService: ProductsService) { }

    async ngOnInit(): Promise<void> {
        try {
            const id = +this.myActivatedRoute.snapshot.params["productId"];
            this.product = await this.myProductsService.getOneProduct(id);
            this.imageSource = environment.productImagesUrl + this.product.imageName;
        }
        catch (err: any) {
            alert(err.message);
        }

    }

}
