import { OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroupDirective, AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ErrorDetails, ErrorOptions } from '../interfaces/errors.interface';
export declare class NgxMistakesDirective implements OnChanges, OnDestroy, AfterViewInit {
    private form;
    controlName: string;
    arr: string;
    idx: number;
    subject: BehaviorSubject<ErrorDetails>;
    control: AbstractControl;
    ready: boolean;
    constructor(form: FormGroupDirective);
    readonly errors: import("@angular/forms").ValidationErrors;
    readonly hasErrors: boolean;
    hasError(name: string, conditions: ErrorOptions): boolean;
    isValid(name: string, conditions: ErrorOptions): boolean;
    getError(name: string): any;
    private checkPropState;
    private checkStatus;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
