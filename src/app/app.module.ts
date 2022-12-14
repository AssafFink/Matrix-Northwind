import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout-area/layout.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { ColorsService } from './services/colors/colors.service';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        HttpClientModule
    ],
    // providers: [ColorsService], // Scope #3 - Application Level
    bootstrap: [LayoutComponent],
})
export class AppModule { }
