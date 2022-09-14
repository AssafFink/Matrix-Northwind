import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription, takeLast } from 'rxjs';
import { GeneratorService } from 'src/app/services/generator/generator.service';

@Component({
    selector: 'app-test-observable',
    templateUrl: './test-observable.component.html',
    styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnDestroy {

    public arr: number[] = [];
    public isComplete = false;
    private subscription: Subscription;

    constructor(private myGeneratorService: GeneratorService) { }

    public start(): void {

        // Observable without any operator on the reported data: 
        this.subscription = this.myGeneratorService.generate(20)
            .subscribe(
                num => this.arr.push(num),
                err => alert(err.message),
                () => this.isComplete = true
            );

        // // Observable with filter operator (on-the-fly): 
        // this.subscription = this.myGeneratorService.generate(20).pipe(filter(n => n % 2 === 0))
        //     .subscribe(
        //         num => this.arr.push(num),
        //         err => alert(err.message),
        //         () => this.isComplete = true
        //     );

        // // Observable with map operator (on-the-fly): 
        // this.subscription = this.myGeneratorService.generate(20).pipe(map(n => n ** 2))
        //     .subscribe(
        //         num => this.arr.push(num),
        //         err => alert(err.message),
        //         () => this.isComplete = true
        //     );

        // // Observable with takeLast operator (on-complete): 
        // this.subscription = this.myGeneratorService.generate(20).pipe(takeLast(5))
        //     .subscribe(
        //         num => this.arr.push(num),
        //         err => alert(err.message),
        //         () => this.isComplete = true
        //     );
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
