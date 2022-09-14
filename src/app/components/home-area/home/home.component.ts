import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// ng g c components/home-area/home

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private myTitle: Title) { }

    ngOnInit(): void {
        this.myTitle.setTitle("Northwind - Home");
    }

}