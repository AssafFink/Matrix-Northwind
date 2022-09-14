import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

// ng g s services/products --flat=false

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    // AJAX --> Asynchronous Javascript And Xml
    
    public async getAllProducts(): Promise<ProductModel[]> {
        const products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
        // const products = await lastValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {

        const myFormData = new FormData();
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image);

        const addedProduct = await firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, myFormData));
        console.log(addedProduct);
    }

}
