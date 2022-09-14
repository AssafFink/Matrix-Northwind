import { Component, OnInit } from '@angular/core';
import { ArraysService } from 'src/app/services/arrays/arrays.service';

// ng g c components/home-area/average

@Component({
    selector: 'app-average',
    templateUrl: './average.component.html',
    styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {

    public arr = [10, 20, 30, 40, 50, 60];
    public avg: number;

    constructor(private myArraysService: ArraysService) { }

    ngOnInit(): void {
        this.avg = this.myArraysService.getAverage(this.arr);
    }

}
