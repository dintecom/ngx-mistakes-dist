import { __read, __spread } from 'tslib';
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
var toArray = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    return Array.isArray(value) ? value : [value];
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxErrorsDirective = /** @class */ (function () {
    function NgxErrorsDirective(form) {
        this.form = form;
        this.subject = new BehaviorSubject(null);
        this.ready = false;
    }
    Object.defineProperty(NgxErrorsDirective.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.ready) {
                return;
            }
            return this.control.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxErrorsDirective.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.errors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    NgxErrorsDirective.prototype.hasError = /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (name, conditions) {
        return this.checkPropState('invalid', name, conditions);
    };
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    NgxErrorsDirective.prototype.isValid = /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (name, conditions) {
        return this.checkPropState('valid', name, conditions);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxErrorsDirective.prototype.getError = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.ready) {
            return;
        }
        return this.control.getError(name);
    };
    /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    NgxErrorsDirective.prototype.checkPropState = /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (prop, name, conditions) {
        var _this = this;
        if (!this.ready) {
            return;
        }
        /** @type {?} */
        var controlPropsState = !conditions ||
            toArray(conditions).every((/**
             * @param {?} condition
             * @return {?}
             */
            function (condition) { return _this.control[condition]; }));
        if (name.charAt(0) === '*') {
            return this.control[prop] && controlPropsState;
        }
        return prop === 'valid'
            ? !this.control.hasError(name)
            : this.control.hasError(name) && controlPropsState;
    };
    /**
     * @private
     * @return {?}
     */
    NgxErrorsDirective.prototype.checkStatus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var control = this.control;
        /** @type {?} */
        var errors = control.errors;
        this.ready = true;
        if (!errors) {
            return;
        }
        // tslint:disable-next-line:forin
        for (var errorName in errors) {
            this.subject.next({ control: control, errorName: errorName });
        }
    };
    /**
     * @return {?}
     */
    NgxErrorsDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.control = this.form.control.get(this.controlName);
    };
    /**
     * @return {?}
     */
    NgxErrorsDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkStatus();
            _this.control.statusChanges.subscribe(_this.checkStatus.bind(_this));
        }));
    };
    /**
     * @return {?}
     */
    NgxErrorsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subject.unsubscribe();
    };
    NgxErrorsDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxErrors]',
                    exportAs: 'ngxErrors'
                },] }
    ];
    /** @nocollapse */
    NgxErrorsDirective.ctorParameters = function () { return [
        { type: FormGroupDirective }
    ]; };
    NgxErrorsDirective.propDecorators = {
        controlName: [{ type: Input, args: ['ngxErrors',] }]
    };
    return NgxErrorsDirective;
}());
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
var NgxErrorDirective = /** @class */ (function () {
    function NgxErrorDirective(ngxErrors) {
        this.ngxErrors = ngxErrors;
        this.hidden = true;
        this.rules = [];
        this.errorNames = [];
    }
    Object.defineProperty(NgxErrorDirective.prototype, "ngxError", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.errorNames = toArray(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxErrorDirective.prototype, "when", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rules = toArray(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxErrorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._states = new Subject();
        this.states = this._states.asObservable().pipe(distinctUntilChanged());
        /** @type {?} */
        var errors = this.ngxErrors.subject.pipe(filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return !!obj; })), 
        // tslint:disable-next-line:no-bitwise
        filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return !!~_this.errorNames.indexOf(obj.errorName); })));
        /** @type {?} */
        var states = this.states.pipe(
        // tslint:disable-next-line:no-shadowed-variable no-bitwise
        map((/**
         * @param {?} states
         * @return {?}
         */
        function (states) { return _this.rules.every((/**
         * @param {?} rule
         * @return {?}
         */
        function (rule) { return !!~states.indexOf(rule); })); })));
        this.subscription = combineLatest([states, errors]).subscribe((
        // tslint:disable-next-line:no-shadowed-variable
        // tslint:disable-next-line:no-shadowed-variable
        /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), states = _b[0], errors = _b[1];
            _this.hidden = !(states && errors.control.hasError(errors.errorName));
        }));
    };
    /**
     * @return {?}
     */
    NgxErrorDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._states.next(this.rules.filter((/**
         * @param {?} rule
         * @return {?}
         */
        function (rule) { return ((/** @type {?} */ (_this.ngxErrors.control)))[rule]; })));
    };
    /**
     * @return {?}
     */
    NgxErrorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    NgxErrorDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxError]'
                },] }
    ];
    /** @nocollapse */
    NgxErrorDirective.ctorParameters = function () { return [
        { type: NgxErrorsDirective, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return NgxErrorsDirective; })),] }] }
    ]; };
    NgxErrorDirective.propDecorators = {
        ngxError: [{ type: Input }],
        when: [{ type: Input }],
        hidden: [{ type: HostBinding, args: ['hidden',] }]
    };
    return NgxErrorDirective;
}());
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
var directives = [NgxErrorDirective, NgxErrorsDirective];
var NgxErrorsModule = /** @class */ (function () {
    function NgxErrorsModule() {
    }
    NgxErrorsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(directives),
                    exports: __spread(directives)
                },] }
    ];
    return NgxErrorsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxMistakesDirective = /** @class */ (function () {
    function NgxMistakesDirective(form) {
        this.form = form;
        this.subject = new BehaviorSubject(null);
        this.ready = false;
    }
    Object.defineProperty(NgxMistakesDirective.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.ready) {
                return;
            }
            return this.control.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMistakesDirective.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.errors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    NgxMistakesDirective.prototype.hasError = /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (name, conditions) {
        return this.checkPropState('invalid', name, conditions);
    };
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    NgxMistakesDirective.prototype.isValid = /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (name, conditions) {
        return this.checkPropState('valid', name, conditions);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxMistakesDirective.prototype.getError = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.ready) {
            return;
        }
        return this.control.getError(name);
    };
    /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    NgxMistakesDirective.prototype.checkPropState = /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (prop, name, conditions) {
        var _this = this;
        if (!this.ready) {
            return;
        }
        /** @type {?} */
        var controlPropsState = !conditions ||
            toArray(conditions).every((/**
             * @param {?} condition
             * @return {?}
             */
            function (condition) { return _this.control[condition]; }));
        if (name.charAt(0) === '*') {
            return this.control[prop] && controlPropsState;
        }
        return prop === 'valid'
            ? !this.control.hasError(name)
            : this.control.hasError(name) && controlPropsState;
    };
    /**
     * @private
     * @return {?}
     */
    NgxMistakesDirective.prototype.checkStatus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var control = this.control;
        /** @type {?} */
        var errors = control.errors;
        this.ready = true;
        if (!errors) {
            return;
        }
        // tslint:disable-next-line:forin
        for (var errorName in errors) {
            this.subject.next({ control: control, errorName: errorName });
        }
    };
    /**
     * @return {?}
     */
    NgxMistakesDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.arr && !isNaN(this.idx)) {
            /** @type {?} */
            var arr = (/** @type {?} */ (this.form.control.get(this.arr)));
            if (arr) {
                /** @type {?} */
                var control = arr.at(this.idx);
                if (control) {
                    this.control = control.get(this.controlName);
                }
            }
        }
        else {
            this.control = this.form.control.get(this.controlName);
        }
    };
    /**
     * @return {?}
     */
    NgxMistakesDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkStatus();
            _this.control.statusChanges.subscribe(_this.checkStatus.bind(_this));
        }));
    };
    /**
     * @return {?}
     */
    NgxMistakesDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subject.unsubscribe();
    };
    NgxMistakesDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ngxErrors]',
                    exportAs: 'ngxErrors'
                },] }
    ];
    /** @nocollapse */
    NgxMistakesDirective.ctorParameters = function () { return [
        { type: FormGroupDirective }
    ]; };
    NgxMistakesDirective.propDecorators = {
        controlName: [{ type: Input, args: ['ngxErrors',] }],
        arr: [{ type: Input }],
        idx: [{ type: Input }]
    };
    return NgxMistakesDirective;
}());
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
var NgxMistakeDirective = /** @class */ (function () {
    function NgxMistakeDirective(ngxMistakes) {
        this.ngxMistakes = ngxMistakes;
        this.hidden = true;
        this.rules = [];
        this.errorNames = [];
    }
    Object.defineProperty(NgxMistakeDirective.prototype, "ngxError", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.errorNames = toArray(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMistakeDirective.prototype, "when", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rules = toArray(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMistakeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._states = new Subject();
        this.states = this._states.asObservable().pipe(distinctUntilChanged());
        /** @type {?} */
        var errors = this.ngxMistakes.subject.pipe(filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return !!obj; })), 
        // tslint:disable-next-line:no-bitwise
        filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return !!~_this.errorNames.indexOf(obj.errorName); })));
        /** @type {?} */
        var states = this.states.pipe(
        // tslint:disable-next-line:no-shadowed-variable no-bitwise
        map((/**
         * @param {?} states
         * @return {?}
         */
        function (states) { return _this.rules.every((/**
         * @param {?} rule
         * @return {?}
         */
        function (rule) { return !!~states.indexOf(rule); })); })));
        this.subscription = combineLatest([states, errors]).subscribe((
        // tslint:disable-next-line:no-shadowed-variable
        // tslint:disable-next-line:no-shadowed-variable
        /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), states = _b[0], errors = _b[1];
            _this.hidden = !(states && errors.control.hasError(errors.errorName));
        }));
    };
    /**
     * @return {?}
     */
    NgxMistakeDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._states.next(this.rules.filter((/**
         * @param {?} rule
         * @return {?}
         */
        function (rule) { return ((/** @type {?} */ (_this.ngxMistakes.control)))[rule]; })));
    };
    /**
     * @return {?}
     */
    NgxMistakeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    NgxMistakeDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxError]'
                },] }
    ];
    /** @nocollapse */
    NgxMistakeDirective.ctorParameters = function () { return [
        { type: NgxMistakesDirective, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return NgxMistakesDirective; })),] }] }
    ]; };
    NgxMistakeDirective.propDecorators = {
        ngxError: [{ type: Input }],
        when: [{ type: Input }],
        hidden: [{ type: HostBinding, args: ['hidden',] }]
    };
    return NgxMistakeDirective;
}());
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
var directives$1 = [NgxMistakeDirective, NgxMistakesDirective];
var NgxMistakesModule = /** @class */ (function () {
    function NgxMistakesModule() {
    }
    NgxMistakesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(directives$1),
                    exports: __spread(directives$1)
                },] }
    ];
    return NgxMistakesModule;
}());

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
