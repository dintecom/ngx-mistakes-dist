/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Inject, HostBinding, forwardRef } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { toArray } from '../utils/to-array';
import { NgxMistakesDirective } from './ngx-mistakes.directive';
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
            var _b = tslib_1.__read(_a, 2), states = _b[0], errors = _b[1];
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
export { NgxMistakeDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1pc3Rha2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1pc3Rha2VzLyIsInNvdXJjZXMiOlsibGliL25neC1taXN0YWtlcy9uZ3gtbWlzdGFrZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQTRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFzQkUsNkJBRVUsV0FBaUM7UUFBakMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBWHBCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFckMsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQWEsRUFBRSxDQUFDO0lBU3ZCLENBQUM7SUFwQkosc0JBQWEseUNBQVE7Ozs7O1FBQXJCLFVBQXNCLEtBQW1CO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQWEscUNBQUk7Ozs7O1FBQWpCLFVBQWtCLEtBQW1CO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBZ0JELHNDQUFROzs7SUFBUjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7O1lBRWpFLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzFDLE1BQU07Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBSyxFQUFDO1FBQ3BCLHNDQUFzQztRQUN0QyxNQUFNOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQXpDLENBQXlDLEVBQUMsQ0FDekQ7O1lBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUM3QiwyREFBMkQ7UUFDM0QsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixFQUFDLEVBQWpELENBQWlELEVBQUMsQ0FDakU7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDM0QsZ0RBQWdEOzs7Ozs7UUFDaEQsVUFBQyxFQUFnQjtnQkFBaEIsMEJBQWdCLEVBQWYsY0FBTSxFQUFFLGNBQU07WUFDZCxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdUNBQVM7OztJQUFUO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsbUJBQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUF2QyxDQUF1QyxFQUFDLENBQ25FLENBQUM7SUFDSixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkExREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBTFEsb0JBQW9CLHVCQXlCeEIsTUFBTSxTQUFDLFVBQVU7Ozt3QkFBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLEVBQUM7OzsyQkFsQi9DLEtBQUs7dUJBSUwsS0FBSzt5QkFJTCxXQUFXLFNBQUMsUUFBUTs7SUE4Q3ZCLDBCQUFDO0NBQUEsQUEzREQsSUEyREM7U0F2RFksbUJBQW1COzs7SUFTOUIscUNBQXFDOztJQUVyQyxvQ0FBcUI7O0lBQ3JCLHlDQUEwQjs7SUFDMUIsMkNBQTJCOztJQUUzQixzQ0FBMkI7O0lBQzNCLHFDQUE2Qjs7Ozs7SUFHM0IsMENBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIEluamVjdCxcbiAgSG9zdEJpbmRpbmcsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFcnJvck9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Vycm9ycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4uL3V0aWxzL3RvLWFycmF5JztcblxuaW1wb3J0IHsgTmd4TWlzdGFrZXNEaXJlY3RpdmUgfSBmcm9tICcuL25neC1taXN0YWtlcy5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ3hFcnJvcl0nXG59KVxuZXhwb3J0IGNsYXNzIE5neE1pc3Rha2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XG4gIEBJbnB1dCgpIHNldCBuZ3hFcnJvcih2YWx1ZTogRXJyb3JPcHRpb25zKSB7XG4gICAgdGhpcy5lcnJvck5hbWVzID0gdG9BcnJheSh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgd2hlbih2YWx1ZTogRXJyb3JPcHRpb25zKSB7XG4gICAgdGhpcy5ydWxlcyA9IHRvQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKSBoaWRkZW4gPSB0cnVlO1xuXG4gIHJ1bGVzOiBzdHJpbmdbXSA9IFtdO1xuICBlcnJvck5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgX3N0YXRlczogU3ViamVjdDxzdHJpbmdbXT47XG4gIHN0YXRlczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5neE1pc3Rha2VzRGlyZWN0aXZlKSlcbiAgICBwcml2YXRlIG5neE1pc3Rha2VzOiBOZ3hNaXN0YWtlc0RpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc3RhdGVzID0gbmV3IFN1YmplY3Q8c3RyaW5nW10+KCk7XG4gICAgdGhpcy5zdGF0ZXMgPSB0aGlzLl9zdGF0ZXMuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmd4TWlzdGFrZXMuc3ViamVjdC5waXBlKFxuICAgICAgZmlsdGVyKG9iaiA9PiAhIW9iaiksXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgZmlsdGVyKG9iaiA9PiAhIX50aGlzLmVycm9yTmFtZXMuaW5kZXhPZihvYmouZXJyb3JOYW1lKSlcbiAgICApO1xuXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5zdGF0ZXMucGlwZShcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZSBuby1iaXR3aXNlXG4gICAgICBtYXAoc3RhdGVzID0+IHRoaXMucnVsZXMuZXZlcnkocnVsZSA9PiAhIX5zdGF0ZXMuaW5kZXhPZihydWxlKSkpXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gY29tYmluZUxhdGVzdChbc3RhdGVzLCBlcnJvcnNdKS5zdWJzY3JpYmUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGVcbiAgICAgIChbc3RhdGVzLCBlcnJvcnNdKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gIShzdGF0ZXMgJiYgZXJyb3JzLmNvbnRyb2wuaGFzRXJyb3IoZXJyb3JzLmVycm9yTmFtZSkpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgdGhpcy5fc3RhdGVzLm5leHQoXG4gICAgICB0aGlzLnJ1bGVzLmZpbHRlcihydWxlID0+ICh0aGlzLm5neE1pc3Rha2VzLmNvbnRyb2wgYXMgYW55KVtydWxlXSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19