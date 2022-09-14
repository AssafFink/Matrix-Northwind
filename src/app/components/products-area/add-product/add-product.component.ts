import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();

    @ViewChild("myImage")
    public imageElementWrapper: ElementRef<HTMLInputElement>;

    constructor(private myProductsService: ProductsService, private router: Router) { }

    public async send() {
        try {
            const myImage = this.imageElementWrapper.nativeElement;
            this.product.image = myImage.files[0];
            await this.myProductsService.addProduct(this.product);
            alert("Product has been added.");
            this.router.navigateByUrl("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

}
