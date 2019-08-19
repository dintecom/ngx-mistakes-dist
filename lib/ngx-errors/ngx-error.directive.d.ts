import { OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { ErrorOptions } from '../interfaces/errors.interface';
import { NgxErrorsDirective } from './ngx-errors.directive';
export declare class NgxErrorDirective implements OnInit, OnDestroy, DoCheck {
    private ngxErrors;
    ngxError: ErrorOptions;
    when: ErrorOptions;
    hidden: boolean;
    rules: string[];
    errorNames: string[];
    subscription: Subscription;
    _states: Subject<string[]>;
    states: Observable<string[]>;
    constructor(ngxErrors: NgxErrorsDirective);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
