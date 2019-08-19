import { Directive, Input, Inject, forwardRef, HostBinding, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormGroupDirective } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ErrorDetails() { }
if (false) {
    /** @type {?} */
    ErrorDetails.prototype.control;
    /** @type {?} */
    ErrorDetails.prototype.errorName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const toArray = (/**
 * @param {?} value
 * @return {?}
 */
(value) => Array.isArray(value) ? value : [value]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxErrorsDirective {
    /**
     * @param {?} form
     */
    constructor(form) {
        this.form = form;
        this.subject = new BehaviorSubject(null);
        this.ready = false;
    }
    /**
     * @return {?}
     */
    get errors() {
        if (!this.ready) {
            return;
        }
        return this.control.errors;
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return !!this.errors;
    }
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    hasError(name, conditions) {
        return this.checkPropState('invalid', name, conditions);
    }
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    isValid(name, conditions) {
        return this.checkPropState('valid', name, conditions);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getError(name) {
        if (!this.ready) {
            return;
        }
        return this.control.getError(name);
    }
    /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    checkPropState(prop, name, conditions) {
        if (!this.ready) {
            return;
        }
        /** @type {?} */
        const controlPropsState = !conditions ||
            toArray(conditions).every((/**
             * @param {?} condition
             * @return {?}
             */
            (condition) => this.control[condition]));
        if (name.charAt(0) === '*') {
            return this.control[prop] && controlPropsState;
        }
        return prop === 'valid'
            ? !this.control.hasError(name)
            : this.control.hasError(name) && controlPropsState;
    }
    /**
     * @private
     * @return {?}
     */
    checkStatus() {
        /** @type {?} */
        const control = this.control;
        /** @type {?} */
        const errors = control.errors;
        this.ready = true;
        if (!errors) {
            return;
        }
        // tslint:disable-next-line:forin
        for (const errorName in errors) {
            this.subject.next({ control, errorName });
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.control = this.form.control.get(this.controlName);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkStatus();
            this.control.statusChanges.subscribe(this.checkStatus.bind(this));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subject.unsubscribe();
    }
}
NgxErrorsDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngxErrors]',
                exportAs: 'ngxErrors'
            },] }
];
/** @nocollapse */
NgxErrorsDirective.ctorParameters = () => [
    { type: FormGroupDirective }
];
NgxErrorsDirective.propDecorators = {
    controlName: [{ type: Input, args: ['ngxErrors',] }]
};
if (false) {
    /** @type {?} */
    NgxErrorsDirective.prototype.controlName;
    /** @type {?} */
    NgxErrorsDirective.prototype.subject;
    /** @type {?} */
    NgxErrorsDirective.prototype.control;
    /** @type {?} */
    NgxErrorsDirective.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    NgxErrorsDirective.prototype.form;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxErrorDirective {
    /**
     * @param {?} ngxErrors
     */
    constructor(ngxErrors) {
        this.ngxErrors = ngxErrors;
        this.hidden = true;
        this.rules = [];
        this.errorNames = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxError(value) {
        this.errorNames = toArray(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set when(value) {
        this.rules = toArray(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._states = new Subject();
        this.states = this._states.asObservable().pipe(distinctUntilChanged());
        /** @type {?} */
        const errors = this.ngxErrors.subject.pipe(filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => !!obj)), 
        // tslint:disable-next-line:no-bitwise
        filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => !!~this.errorNames.indexOf(obj.errorName))));
        /** @type {?} */
        const states = this.states.pipe(
        // tslint:disable-next-line:no-shadowed-variable no-bitwise
        map((/**
         * @param {?} states
         * @return {?}
         */
        states => this.rules.every((/**
         * @param {?} rule
         * @return {?}
         */
        rule => !!~states.indexOf(rule))))));
        this.subscription = combineLatest([states, errors]).subscribe((
        // tslint:disable-next-line:no-shadowed-variable
        /**
         * @param {?} __0
         * @return {?}
         */
        ([states, errors]) => {
            this.hidden = !(states && errors.control.hasError(errors.errorName));
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this._states.next(this.rules.filter((/**
         * @param {?} rule
         * @return {?}
         */
        rule => ((/** @type {?} */ (this.ngxErrors.control)))[rule])));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
NgxErrorDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngxError]'
            },] }
];
/** @nocollapse */
NgxErrorDirective.ctorParameters = () => [
    { type: NgxErrorsDirective, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NgxErrorsDirective)),] }] }
];
NgxErrorDirective.propDecorators = {
    ngxError: [{ type: Input }],
    when: [{ type: Input }],
    hidden: [{ type: HostBinding, args: ['hidden',] }]
};
if (false) {
    /** @type {?} */
    NgxErrorDirective.prototype.hidden;
    /** @type {?} */
    NgxErrorDirective.prototype.rules;
    /** @type {?} */
    NgxErrorDirective.prototype.errorNames;
    /** @type {?} */
    NgxErrorDirective.prototype.subscription;
    /** @type {?} */
    NgxErrorDirective.prototype._states;
    /** @type {?} */
    NgxErrorDirective.prototype.states;
    /**
     * @type {?}
     * @private
     */
    NgxErrorDirective.prototype.ngxErrors;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const directives = [NgxErrorDirective, NgxErrorsDirective];
class NgxErrorsModule {
}
NgxErrorsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...directives],
                exports: [...directives]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMistakesDirective {
    /**
     * @param {?} form
     */
    constructor(form) {
        this.form = form;
        this.subject = new BehaviorSubject(null);
        this.ready = false;
    }
    /**
     * @return {?}
     */
    get errors() {
        if (!this.ready) {
            return;
        }
        return this.control.errors;
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return !!this.errors;
    }
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    hasError(name, conditions) {
        return this.checkPropState('invalid', name, conditions);
    }
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    isValid(name, conditions) {
        return this.checkPropState('valid', name, conditions);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getError(name) {
        if (!this.ready) {
            return;
        }
        return this.control.getError(name);
    }
    /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    checkPropState(prop, name, conditions) {
        if (!this.ready) {
            return;
        }
        /** @type {?} */
        const controlPropsState = !conditions ||
            toArray(conditions).every((/**
             * @param {?} condition
             * @return {?}
             */
            (condition) => this.control[condition]));
        if (name.charAt(0) === '*') {
            return this.control[prop] && controlPropsState;
        }
        return prop === 'valid'
            ? !this.control.hasError(name)
            : this.control.hasError(name) && controlPropsState;
    }
    /**
     * @private
     * @return {?}
     */
    checkStatus() {
        /** @type {?} */
        const control = this.control;
        /** @type {?} */
        const errors = control.errors;
        this.ready = true;
        if (!errors) {
            return;
        }
        // tslint:disable-next-line:forin
        for (const errorName in errors) {
            this.subject.next({ control, errorName });
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.arr && !isNaN(this.idx)) {
            /** @type {?} */
            const arr = (/** @type {?} */ (this.form.control.get(this.arr)));
            if (arr) {
                /** @type {?} */
                const control = arr.at(this.idx);
                if (control) {
                    this.control = control.get(this.controlName);
                }
            }
        }
        else {
            this.control = this.form.control.get(this.controlName);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkStatus();
            this.control.statusChanges.subscribe(this.checkStatus.bind(this));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subject.unsubscribe();
    }
}
NgxMistakesDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[ngxErrors]',
                exportAs: 'ngxErrors'
            },] }
];
/** @nocollapse */
NgxMistakesDirective.ctorParameters = () => [
    { type: FormGroupDirective }
];
NgxMistakesDirective.propDecorators = {
    controlName: [{ type: Input, args: ['ngxErrors',] }],
    arr: [{ type: Input }],
    idx: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxMistakesDirective.prototype.controlName;
    /** @type {?} */
    NgxMistakesDirective.prototype.arr;
    /** @type {?} */
    NgxMistakesDirective.prototype.idx;
    /** @type {?} */
    NgxMistakesDirective.prototype.subject;
    /** @type {?} */
    NgxMistakesDirective.prototype.control;
    /** @type {?} */
    NgxMistakesDirective.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    NgxMistakesDirective.prototype.form;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMistakeDirective {
    /**
     * @param {?} ngxMistakes
     */
    constructor(ngxMistakes) {
        this.ngxMistakes = ngxMistakes;
        this.hidden = true;
        this.rules = [];
        this.errorNames = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxError(value) {
        this.errorNames = toArray(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set when(value) {
        this.rules = toArray(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._states = new Subject();
        this.states = this._states.asObservable().pipe(distinctUntilChanged());
        /** @type {?} */
        const errors = this.ngxMistakes.subject.pipe(filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => !!obj)), 
        // tslint:disable-next-line:no-bitwise
        filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => !!~this.errorNames.indexOf(obj.errorName))));
        /** @type {?} */
        const states = this.states.pipe(
        // tslint:disable-next-line:no-shadowed-variable no-bitwise
        map((/**
         * @param {?} states
         * @return {?}
         */
        states => this.rules.every((/**
         * @param {?} rule
         * @return {?}
         */
        rule => !!~states.indexOf(rule))))));
        this.subscription = combineLatest([states, errors]).subscribe((
        // tslint:disable-next-line:no-shadowed-variable
        /**
         * @param {?} __0
         * @return {?}
         */
        ([states, errors]) => {
            this.hidden = !(states && errors.control.hasError(errors.errorName));
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this._states.next(this.rules.filter((/**
         * @param {?} rule
         * @return {?}
         */
        rule => ((/** @type {?} */ (this.ngxMistakes.control)))[rule])));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
NgxMistakeDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngxError]'
            },] }
];
/** @nocollapse */
NgxMistakeDirective.ctorParameters = () => [
    { type: NgxMistakesDirective, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NgxMistakesDirective)),] }] }
];
NgxMistakeDirective.propDecorators = {
    ngxError: [{ type: Input }],
    when: [{ type: Input }],
    hidden: [{ type: HostBinding, args: ['hidden',] }]
};
if (false) {
    /** @type {?} */
    NgxMistakeDirective.prototype.hidden;
    /** @type {?} */
    NgxMistakeDirective.prototype.rules;
    /** @type {?} */
    NgxMistakeDirective.prototype.errorNames;
    /** @type {?} */
    NgxMistakeDirective.prototype.subscription;
    /** @type {?} */
    NgxMistakeDirective.prototype._states;
    /** @type {?} */
    NgxMistakeDirective.prototype.states;
    /**
     * @type {?}
     * @private
     */
    NgxMistakeDirective.prototype.ngxMistakes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const directives$1 = [NgxMistakeDirective, NgxMistakesDirective];
class NgxMistakesModule {
}
NgxMistakesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...directives$1],
                exports: [...directives$1]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxErrorDirective, NgxErrorsDirective, NgxErrorsModule, NgxMistakeDirective, NgxMistakesDirective, NgxMistakesModule };
//# sourceMappingURL=ngx-mistakes.js.map
