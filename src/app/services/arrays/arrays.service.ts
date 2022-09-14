import { Injectable } from '@angular/core';

// ng g s services/arrays --flat=false

@Injectable({
    providedIn: 'root'
})
export class ArraysService {

    public getAverage(arr: number[]): number {
        let sum = 0;
        for (const item of arr) {
            sum += item;
        }
        return sum / arr.length;
    }

}
