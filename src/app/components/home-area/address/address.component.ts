import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors/colors.service';

// ng g c components/home-area/address

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css'],
    // providers: [ColorsService] // Scope #1 - Component Level Service
})
export class AddressComponent implements OnInit, OnDestroy {

    public tooltip = "Our Address";

    public myStyle = {
        backgroundColor: ""
    }

    constructor(private myColorsService: ColorsService) { // DI
        console.log("ctor");
    }

    ngOnInit(): void { // Mount
        console.log("On Init");
        this.myStyle.backgroundColor = this.myColorsService.getRandomColor();
    }

    ngOnDestroy(): void {
        console.log("On Destroy");
    }

}
