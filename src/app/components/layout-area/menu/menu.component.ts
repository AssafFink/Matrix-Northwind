import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ng g c components/layout-area/menu

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
