/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { toArray } from '../utils/to-array';
export class NgxMistakesDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1pc3Rha2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1taXN0YWtlcy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbWlzdGFrZXMvbmd4LW1pc3Rha2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTzVDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFVL0IsWUFBb0IsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFKNUMsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFlLElBQUksQ0FBQyxDQUFDO1FBRWxELFVBQUssR0FBRyxLQUFLLENBQUM7SUFFaUMsQ0FBQzs7OztJQUVoRCxJQUFJLE1BQU07UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxVQUF3QjtRQUM3QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWSxFQUFFLFVBQXdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxD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QyxXQUFXO2tCQUNqQixLQUFLO2tCQUNMLEtBQUs7Ozs7SUFGTiwyQ0FBd0M7O0lBQ3hDLG1DQUFxQjs7SUFDckIsbUNBQXFCOztJQUVyQix1Q0FBa0Q7O0lBQ2xELHVDQUF5Qjs7SUFDekIscUNBQWM7Ozs7O0lBRUYsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXBEaXJlY3RpdmUsIEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRXJyb3JEZXRhaWxzLCBFcnJvck9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Vycm9ycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4uL3V0aWxzL3RvLWFycmF5JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25neEVycm9yc10nLFxuICBleHBvcnRBczogJ25neEVycm9ycydcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWlzdGFrZXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgnbmd4RXJyb3JzJykgY29udHJvbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgYXJyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkeDogbnVtYmVyO1xuXG4gIHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVycm9yRGV0YWlscz4obnVsbCk7XG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgcmVhZHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSkge31cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIGlmICghdGhpcy5yZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmVycm9ycztcbiAgfVxuXG4gIGdldCBoYXNFcnJvcnMoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5lcnJvcnM7XG4gIH1cblxuICBoYXNFcnJvcihuYW1lOiBzdHJpbmcsIGNvbmRpdGlvbnM6IEVycm9yT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrUHJvcFN0YXRlKCdpbnZhbGlkJywgbmFtZSwgY29uZGl0aW9ucyk7XG4gIH1cblxuICBpc1ZhbGlkKG5hbWU6IHN0cmluZywgY29uZGl0aW9uczogRXJyb3JPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tQcm9wU3RhdGUoJ3ZhbGlkJywgbmFtZSwgY29uZGl0aW9ucyk7XG4gIH1cblxuICBnZXRFcnJvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5nZXRFcnJvcihuYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQcm9wU3RhdGUoXG4gICAgcHJvcDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb25kaXRpb25zOiBFcnJvck9wdGlvbnNcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2xQcm9wc1N0YXRlID1cbiAgICAgICFjb25kaXRpb25zIHx8XG4gICAgICB0b0FycmF5KGNvbmRpdGlvbnMpLmV2ZXJ5KChjb25kaXRpb246IHN0cmluZykgPT4gdGhpcy5jb250cm9sW2NvbmRpdGlvbl0pO1xuICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gJyonKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sW3Byb3BdICYmIGNvbnRyb2xQcm9wc1N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcCA9PT0gJ3ZhbGlkJ1xuICAgICAgPyAhdGhpcy5jb250cm9sLmhhc0Vycm9yKG5hbWUpXG4gICAgICA6IHRoaXMuY29udHJvbC5oYXNFcnJvcihuYW1lKSAmJiBjb250cm9sUHJvcHNTdGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTdGF0dXMoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICBjb25zdCBlcnJvcnMgPSBjb250cm9sLmVycm9ycztcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICBpZiAoIWVycm9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGVycm9yTmFtZSBpbiBlcnJvcnMpIHtcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgY29udHJvbCwgZXJyb3JOYW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmFyciAmJiAhaXNOYU4odGhpcy5pZHgpKSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm0uY29udHJvbC5nZXQodGhpcy5hcnIpIGFzIEZvcm1BcnJheTtcbiAgICAgIGlmIChhcnIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGFyci5hdCh0aGlzLmlkeCk7XG4gICAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbC5nZXQodGhpcy5jb250cm9sTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2wuZ2V0KHRoaXMuY29udHJvbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tTdGF0dXMoKTtcbiAgICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSh0aGlzLmNoZWNrU3RhdHVzLmJpbmQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==