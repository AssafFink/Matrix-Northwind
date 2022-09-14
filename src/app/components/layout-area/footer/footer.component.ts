import { Component, OnInit } from '@angular/core';

// ng g c components/layout-area/footer

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public year: number;

    constructor() { }

    ngOnInit(): void {
        const now = new Date();
        this.year = now.getFullYear();
    }

}
