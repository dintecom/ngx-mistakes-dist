/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Inject, HostBinding, forwardRef } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { toArray } from '../utils/to-array';
import { NgxErrorsDirective } from './ngx-errors.directive';
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
            var _b = tslib_1.__read(_a, 2), states = _b[0], errors = _b[1];
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
export { NgxErrorDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVycm9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1taXN0YWtlcy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZXJyb3JzL25neC1lcnJvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQTRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFzQkUsMkJBRVUsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFYaEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVyQyxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBYSxFQUFFLENBQUM7SUFTdkIsQ0FBQztJQXBCSixzQkFBYSx1Q0FBUTs7Ozs7UUFBckIsVUFBc0IsS0FBbUI7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYSxtQ0FBSTs7Ozs7UUFBakIsVUFBa0IsS0FBbUI7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7Ozs7SUFnQkQsb0NBQVE7OztJQUFSO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQzs7WUFFakUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDeEMsTUFBTTs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLEVBQUM7UUFDcEIsc0NBQXNDO1FBQ3RDLE1BQU07Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxDQUN6RDs7WUFFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQzdCLDJEQUEyRDtRQUMzRCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLEVBQUMsRUFBakQsQ0FBaUQsRUFBQyxDQUNqRTtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztRQUMzRCxnREFBZ0Q7Ozs7OztRQUNoRCxVQUFDLEVBQWdCO2dCQUFoQiwwQkFBZ0IsRUFBZixjQUFNLEVBQUUsY0FBTTtZQUNkLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxtQkFBQSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQXJDLENBQXFDLEVBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQTFERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFMUSxrQkFBa0IsdUJBeUJ0QixNQUFNLFNBQUMsVUFBVTs7O3dCQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsRUFBQzs7OzJCQWxCN0MsS0FBSzt1QkFJTCxLQUFLO3lCQUlMLFdBQVcsU0FBQyxRQUFROztJQThDdkIsd0JBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXZEWSxpQkFBaUI7OztJQVM1QixtQ0FBcUM7O0lBRXJDLGtDQUFxQjs7SUFDckIsdUNBQTBCOztJQUMxQix5Q0FBMkI7O0lBRTNCLG9DQUEyQjs7SUFDM0IsbUNBQTZCOzs7OztJQUczQixzQ0FDcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgRG9DaGVjayxcbiAgSW5qZWN0LFxuICBIb3N0QmluZGluZyxcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVycm9yT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZXJyb3JzLmludGVyZmFjZSc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi4vdXRpbHMvdG8tYXJyYXknO1xuXG5pbXBvcnQgeyBOZ3hFcnJvcnNEaXJlY3RpdmUgfSBmcm9tICcuL25neC1lcnJvcnMuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd4RXJyb3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hFcnJvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcbiAgQElucHV0KCkgc2V0IG5neEVycm9yKHZhbHVlOiBFcnJvck9wdGlvbnMpIHtcbiAgICB0aGlzLmVycm9yTmFtZXMgPSB0b0FycmF5KHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB3aGVuKHZhbHVlOiBFcnJvck9wdGlvbnMpIHtcbiAgICB0aGlzLnJ1bGVzID0gdG9BcnJheSh2YWx1ZSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpIGhpZGRlbiA9IHRydWU7XG5cbiAgcnVsZXM6IHN0cmluZ1tdID0gW107XG4gIGVycm9yTmFtZXM6IHN0cmluZ1tdID0gW107XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBfc3RhdGVzOiBTdWJqZWN0PHN0cmluZ1tdPjtcbiAgc3RhdGVzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTmd4RXJyb3JzRGlyZWN0aXZlKSlcbiAgICBwcml2YXRlIG5neEVycm9yczogTmd4RXJyb3JzRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdGF0ZXMgPSBuZXcgU3ViamVjdDxzdHJpbmdbXT4oKTtcbiAgICB0aGlzLnN0YXRlcyA9IHRoaXMuX3N0YXRlcy5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZ3hFcnJvcnMuc3ViamVjdC5waXBlKFxuICAgICAgZmlsdGVyKG9iaiA9PiAhIW9iaiksXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgZmlsdGVyKG9iaiA9PiAhIX50aGlzLmVycm9yTmFtZXMuaW5kZXhPZihvYmouZXJyb3JOYW1lKSlcbiAgICApO1xuXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5zdGF0ZXMucGlwZShcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZSBuby1iaXR3aXNlXG4gICAgICBtYXAoc3RhdGVzID0+IHRoaXMucnVsZXMuZXZlcnkocnVsZSA9PiAhIX5zdGF0ZXMuaW5kZXhPZihydWxlKSkpXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gY29tYmluZUxhdGVzdChbc3RhdGVzLCBlcnJvcnNdKS5zdWJzY3JpYmUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGVcbiAgICAgIChbc3RhdGVzLCBlcnJvcnNdKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gIShzdGF0ZXMgJiYgZXJyb3JzLmNvbnRyb2wuaGFzRXJyb3IoZXJyb3JzLmVycm9yTmFtZSkpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgdGhpcy5fc3RhdGVzLm5leHQoXG4gICAgICB0aGlzLnJ1bGVzLmZpbHRlcihydWxlID0+ICh0aGlzLm5neEVycm9ycy5jb250cm9sIGFzIGFueSlbcnVsZV0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==