import { OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { ErrorOptions } from '../interfaces/errors.interface';
import { NgxMistakesDirective } from './ngx-mistakes.directive';
export declare class NgxMistakeDirective implements OnInit, OnDestroy, DoCheck {
    private ngxMistakes;
    ngxError: ErrorOptions;
    when: ErrorOptions;
    hidden: boolean;
    rules: string[];
    errorNames: string[];
    subscription: Subscription;
    _states: Subject<string[]>;
    states: Observable<string[]>;
    constructor(ngxMistakes: NgxMistakesDirective);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
