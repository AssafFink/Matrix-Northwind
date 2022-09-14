import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home-area/home.module';
import { ProductsModule } from '../products-area/products.module';
import { AboutModule } from '../about-area/about.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// ng g m components/layout-area/layout --flat

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule, // Angular Module containing routing commands
        HomeModule,
        ProductsModule,
        AboutModule
    ]
})
export class LayoutModule { }
