import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { ColorsService } from 'src/app/services/colors/colors.service';
import { AverageComponent } from './average/average.component';
import { TestObservableComponent } from './test-observable/test-observable.component';

// ng g m components/home-area/home --flat

@NgModule({
    declarations: [
        HomeComponent,
        AddressComponent,
        AverageComponent,
        TestObservableComponent
    ],
    imports: [
        CommonModule
    ],
    // providers: [ColorsService] // Scope #2 - Module Level
})
export class HomeModule { }
