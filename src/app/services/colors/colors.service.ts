import { Injectable } from '@angular/core';

// ng g s services/colors --flat=false

@Injectable({
    providedIn: 'root' // Scope #3 - Application Level
    // providedIn: "any" // Scope #4 - One instance for the entire app, different instance for each lazy loading module
    // providedIn: "platform" // Scope #5 - One instance per several apps in a single workspace.
})
export class ColorsService {

    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }

}
