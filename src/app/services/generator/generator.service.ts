import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {

    public generate(count: number): Observable<number> {
        
        return new Observable((observer: Observer<number>) => {

            const timerId = setInterval(() => {

                try {
                    const num = Math.floor(Math.random() * 100);

                    observer.next(num);

                    count--;

                    if (count === 0) {
                        clearInterval(timerId);
                        observer.complete();
                    }
                }
                catch (err: any) {
                    clearInterval(timerId);
                    observer.error(err);
                }

            }, 500);

        });
    }

}
