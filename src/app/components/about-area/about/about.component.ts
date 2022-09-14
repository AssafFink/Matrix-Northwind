import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// ng g c components/about-area/about

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private myTitle: Title) { }

    ngOnInit(): void {
        this.myTitle.setTitle("Northwind - About");
    }
}
