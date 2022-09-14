import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

// ng g c components/products-area/product-card

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    public product: ProductModel;

    public imageSource: string;

    ngOnInit(): void {
        this.imageSource = environment.productImagesUrl + this.product.imageName;
    }

}
