import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';

// ng g m components/about-area/about --flat

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AboutModule { }
