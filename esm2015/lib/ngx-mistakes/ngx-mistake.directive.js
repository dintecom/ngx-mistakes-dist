/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, HostBinding, forwardRef } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { toArray } from '../utils/to-array';
import { NgxMistakesDirective } from './ngx-mistakes.directive';
export class NgxMistakeDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1pc3Rha2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1pc3Rha2VzLyIsInNvdXJjZXMiOlsibGliL25neC1taXN0YWtlcy9uZ3gtbWlzdGFrZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBNEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU1oRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBa0I5QixZQUVVLFdBQWlDO1FBQWpDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQVhwQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXJDLFVBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQVN2QixDQUFDOzs7OztJQXBCSixJQUFhLFFBQVEsQ0FBQyxLQUFtQjtRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELElBQWEsSUFBSSxDQUFDLEtBQW1CO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFnQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQzs7Y0FFakUsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDMUMsTUFBTTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQztRQUNwQixzQ0FBc0M7UUFDdEMsTUFBTTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQ3pEOztjQUVLLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDN0IsMkRBQTJEO1FBQzNELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFDLENBQ2pFO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7Ozs7UUFFM0QsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQTFERixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBTFEsb0JBQW9CLHVCQXlCeEIsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzs7O3VCQWxCL0MsS0FBSzttQkFJTCxLQUFLO3FCQUlMLFdBQVcsU0FBQyxRQUFROzs7O0lBQXJCLHFDQUFxQzs7SUFFckMsb0NBQXFCOztJQUNyQix5Q0FBMEI7O0lBQzFCLDJDQUEyQjs7SUFFM0Isc0NBQTJCOztJQUMzQixxQ0FBNkI7Ozs7O0lBRzNCLDBDQUN5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxuICBJbmplY3QsXG4gIEhvc3RCaW5kaW5nLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRXJyb3JPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9lcnJvcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuLi91dGlscy90by1hcnJheSc7XG5cbmltcG9ydCB7IE5neE1pc3Rha2VzRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbWlzdGFrZXMuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd4RXJyb3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNaXN0YWtlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xuICBASW5wdXQoKSBzZXQgbmd4RXJyb3IodmFsdWU6IEVycm9yT3B0aW9ucykge1xuICAgIHRoaXMuZXJyb3JOYW1lcyA9IHRvQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHdoZW4odmFsdWU6IEVycm9yT3B0aW9ucykge1xuICAgIHRoaXMucnVsZXMgPSB0b0FycmF5KHZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnaGlkZGVuJykgaGlkZGVuID0gdHJ1ZTtcblxuICBydWxlczogc3RyaW5nW10gPSBbXTtcbiAgZXJyb3JOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIF9zdGF0ZXM6IFN1YmplY3Q8c3RyaW5nW10+O1xuICBzdGF0ZXM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ3hNaXN0YWtlc0RpcmVjdGl2ZSkpXG4gICAgcHJpdmF0ZSBuZ3hNaXN0YWtlczogTmd4TWlzdGFrZXNEaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N0YXRlcyA9IG5ldyBTdWJqZWN0PHN0cmluZ1tdPigpO1xuICAgIHRoaXMuc3RhdGVzID0gdGhpcy5fc3RhdGVzLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5neE1pc3Rha2VzLnN1YmplY3QucGlwZShcbiAgICAgIGZpbHRlcihvYmogPT4gISFvYmopLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgIGZpbHRlcihvYmogPT4gISF+dGhpcy5lcnJvck5hbWVzLmluZGV4T2Yob2JqLmVycm9yTmFtZSkpXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuc3RhdGVzLnBpcGUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGUgbm8tYml0d2lzZVxuICAgICAgbWFwKHN0YXRlcyA9PiB0aGlzLnJ1bGVzLmV2ZXJ5KHJ1bGUgPT4gISF+c3RhdGVzLmluZGV4T2YocnVsZSkpKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGNvbWJpbmVMYXRlc3QoW3N0YXRlcywgZXJyb3JzXSkuc3Vic2NyaWJlKFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXG4gICAgICAoW3N0YXRlcywgZXJyb3JzXSkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbiA9ICEoc3RhdGVzICYmIGVycm9ycy5jb250cm9sLmhhc0Vycm9yKGVycm9ycy5lcnJvck5hbWUpKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMuX3N0YXRlcy5uZXh0KFxuICAgICAgdGhpcy5ydWxlcy5maWx0ZXIocnVsZSA9PiAodGhpcy5uZ3hNaXN0YWtlcy5jb250cm9sIGFzIGFueSlbcnVsZV0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==