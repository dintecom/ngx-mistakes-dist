/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, HostBinding, forwardRef } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { toArray } from '../utils/to-array';
import { NgxErrorsDirective } from './ngx-errors.directive';
export class NgxErrorDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVycm9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1taXN0YWtlcy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZXJyb3JzL25neC1lcnJvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBNEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU01RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBa0I1QixZQUVVLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBWGhCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFckMsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQWEsRUFBRSxDQUFDO0lBU3ZCLENBQUM7Ozs7O0lBcEJKLElBQWEsUUFBUSxDQUFDLEtBQW1CO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsSUFBYSxJQUFJLENBQUMsS0FBbUI7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQWdCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDOztjQUVqRSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN4QyxNQUFNOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDO1FBQ3BCLHNDQUFzQztRQUN0QyxNQUFNOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FDekQ7O2NBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUM3QiwyREFBMkQ7UUFDM0QsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUMsQ0FDakU7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7OztRQUUzRCxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFMUSxrQkFBa0IsdUJBeUJ0QixNQUFNLFNBQUMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixFQUFDOzs7dUJBbEI3QyxLQUFLO21CQUlMLEtBQUs7cUJBSUwsV0FBVyxTQUFDLFFBQVE7Ozs7SUFBckIsbUNBQXFDOztJQUVyQyxrQ0FBcUI7O0lBQ3JCLHVDQUEwQjs7SUFDMUIseUNBQTJCOztJQUUzQixvQ0FBMkI7O0lBQzNCLG1DQUE2Qjs7Ozs7SUFHM0Isc0NBQ3FDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIEluamVjdCxcbiAgSG9zdEJpbmRpbmcsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFcnJvck9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Vycm9ycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4uL3V0aWxzL3RvLWFycmF5JztcblxuaW1wb3J0IHsgTmd4RXJyb3JzRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtZXJyb3JzLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25neEVycm9yXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4RXJyb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XG4gIEBJbnB1dCgpIHNldCBuZ3hFcnJvcih2YWx1ZTogRXJyb3JPcHRpb25zKSB7XG4gICAgdGhpcy5lcnJvck5hbWVzID0gdG9BcnJheSh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgd2hlbih2YWx1ZTogRXJyb3JPcHRpb25zKSB7XG4gICAgdGhpcy5ydWxlcyA9IHRvQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKSBoaWRkZW4gPSB0cnVlO1xuXG4gIHJ1bGVzOiBzdHJpbmdbXSA9IFtdO1xuICBlcnJvck5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgX3N0YXRlczogU3ViamVjdDxzdHJpbmdbXT47XG4gIHN0YXRlczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE5neEVycm9yc0RpcmVjdGl2ZSkpXG4gICAgcHJpdmF0ZSBuZ3hFcnJvcnM6IE5neEVycm9yc0RpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc3RhdGVzID0gbmV3IFN1YmplY3Q8c3RyaW5nW10+KCk7XG4gICAgdGhpcy5zdGF0ZXMgPSB0aGlzLl9zdGF0ZXMuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmd4RXJyb3JzLnN1YmplY3QucGlwZShcbiAgICAgIGZpbHRlcihvYmogPT4gISFvYmopLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgIGZpbHRlcihvYmogPT4gISF+dGhpcy5lcnJvck5hbWVzLmluZGV4T2Yob2JqLmVycm9yTmFtZSkpXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuc3RhdGVzLnBpcGUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGUgbm8tYml0d2lzZVxuICAgICAgbWFwKHN0YXRlcyA9PiB0aGlzLnJ1bGVzLmV2ZXJ5KHJ1bGUgPT4gISF+c3RhdGVzLmluZGV4T2YocnVsZSkpKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGNvbWJpbmVMYXRlc3QoW3N0YXRlcywgZXJyb3JzXSkuc3Vic2NyaWJlKFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXG4gICAgICAoW3N0YXRlcywgZXJyb3JzXSkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbiA9ICEoc3RhdGVzICYmIGVycm9ycy5jb250cm9sLmhhc0Vycm9yKGVycm9ycy5lcnJvck5hbWUpKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMuX3N0YXRlcy5uZXh0KFxuICAgICAgdGhpcy5ydWxlcy5maWx0ZXIocnVsZSA9PiAodGhpcy5uZ3hFcnJvcnMuY29udHJvbCBhcyBhbnkpW3J1bGVdKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=