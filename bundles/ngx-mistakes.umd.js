(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-mistakes', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/forms'], factory) :
    (global = global || self, factory(global['ngx-mistakes'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.forms));
}(this, function (exports, core, rxjs, operators, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            this.subject = new rxjs.BehaviorSubject(null);
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[ngxErrors]',
                        exportAs: 'ngxErrors'
                    },] }
        ];
        /** @nocollapse */
        NgxErrorsDirective.ctorParameters = function () { return [
            { type: forms.FormGroupDirective }
        ]; };
        NgxErrorsDirective.propDecorators = {
            controlName: [{ type: core.Input, args: ['ngxErrors',] }]
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
            this._states = new rxjs.Subject();
            this.states = this._states.asObservable().pipe(operators.distinctUntilChanged());
            /** @type {?} */
            var errors = this.ngxErrors.subject.pipe(operators.filter((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) { return !!obj; })), 
            // tslint:disable-next-line:no-bitwise
            operators.filter((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) { return !!~_this.errorNames.indexOf(obj.errorName); })));
            /** @type {?} */
            var states = this.states.pipe(
            // tslint:disable-next-line:no-shadowed-variable no-bitwise
            operators.map((/**
             * @param {?} states
             * @return {?}
             */
            function (states) { return _this.rules.every((/**
             * @param {?} rule
             * @return {?}
             */
            function (rule) { return !!~states.indexOf(rule); })); })));
            this.subscription = rxjs.combineLatest([states, errors]).subscribe((
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[ngxError]'
                    },] }
        ];
        /** @nocollapse */
        NgxErrorDirective.ctorParameters = function () { return [
            { type: NgxErrorsDirective, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxErrorsDirective; })),] }] }
        ]; };
        NgxErrorDirective.propDecorators = {
            ngxError: [{ type: core.Input }],
            when: [{ type: core.Input }],
            hidden: [{ type: core.HostBinding, args: ['hidden',] }]
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
            { type: core.NgModule, args: [{
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
            this.subject = new rxjs.BehaviorSubject(null);
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[ngxErrors]',
                        exportAs: 'ngxErrors'
                    },] }
        ];
        /** @nocollapse */
        NgxMistakesDirective.ctorParameters = function () { return [
            { type: forms.FormGroupDirective }
        ]; };
        NgxMistakesDirective.propDecorators = {
            controlName: [{ type: core.Input, args: ['ngxErrors',] }],
            arr: [{ type: core.Input }],
            idx: [{ type: core.Input }]
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
            this._states = new rxjs.Subject();
            this.states = this._states.asObservable().pipe(operators.distinctUntilChanged());
            /** @type {?} */
            var errors = this.ngxMistakes.subject.pipe(operators.filter((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) { return !!obj; })), 
            // tslint:disable-next-line:no-bitwise
            operators.filter((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) { return !!~_this.errorNames.indexOf(obj.errorName); })));
            /** @type {?} */
            var states = this.states.pipe(
            // tslint:disable-next-line:no-shadowed-variable no-bitwise
            operators.map((/**
             * @param {?} states
             * @return {?}
             */
            function (states) { return _this.rules.every((/**
             * @param {?} rule
             * @return {?}
             */
            function (rule) { return !!~states.indexOf(rule); })); })));
            this.subscription = rxjs.combineLatest([states, errors]).subscribe((
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[ngxError]'
                    },] }
        ];
        /** @nocollapse */
        NgxMistakeDirective.ctorParameters = function () { return [
            { type: NgxMistakesDirective, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgxMistakesDirective; })),] }] }
        ]; };
        NgxMistakeDirective.propDecorators = {
            ngxError: [{ type: core.Input }],
            when: [{ type: core.Input }],
            hidden: [{ type: core.HostBinding, args: ['hidden',] }]
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
            { type: core.NgModule, args: [{
                        declarations: __spread(directives$1),
                        exports: __spread(directives$1)
                    },] }
        ];
        return NgxMistakesModule;
    }());

    exports.NgxErrorDirective = NgxErrorDirective;
    exports.NgxErrorsDirective = NgxErrorsDirective;
    exports.NgxErrorsModule = NgxErrorsModule;
    exports.NgxMistakeDirective = NgxMistakeDirective;
    exports.NgxMistakesDirective = NgxMistakesDirective;
    exports.NgxMistakesModule = NgxMistakesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-mistakes.umd.js.map
