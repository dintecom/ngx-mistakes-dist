/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { toArray } from '../utils/to-array';
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
export { NgxMistakesDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1pc3Rha2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1taXN0YWtlcy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbWlzdGFrZXMvbmd4LW1pc3Rha2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVDO0lBZUUsOEJBQW9CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBSjVDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsQ0FBQztRQUVsRCxVQUFLLEdBQUcsS0FBSyxDQUFDO0lBRWlDLENBQUM7SUFFaEQsc0JBQUksd0NBQU07Ozs7UUFBVjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLE9BQU87YUFDUjtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7Ozs7O0lBRUQsdUNBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsVUFBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsc0NBQU87Ozs7O0lBQVAsVUFBUSxJQUFZLEVBQUUsVUFBd0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9B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QUM7SUFDN0IsQ0FBQzs7Z0JBbEdGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFYUSxrQkFBa0I7Ozs4QkFjeEIsS0FBSyxTQUFDLFdBQVc7c0JBQ2pCLEtBQUs7c0JBQ0wsS0FBSzs7SUEwRlIsMkJBQUM7Q0FBQSxBQW5HRCxJQW1HQztTQTlGWSxvQkFBb0I7OztJQUUvQiwyQ0FBd0M7O0lBQ3hDLG1DQUFxQjs7SUFDckIsbUNBQXFCOztJQUVyQix1Q0FBa0Q7O0lBQ2xELHVDQUF5Qjs7SUFDekIscUNBQWM7Ozs7O0lBRUYsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXBEaXJlY3RpdmUsIEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRXJyb3JEZXRhaWxzLCBFcnJvck9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Vycm9ycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4uL3V0aWxzL3RvLWFycmF5JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25neEVycm9yc10nLFxuICBleHBvcnRBczogJ25neEVycm9ycydcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWlzdGFrZXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgnbmd4RXJyb3JzJykgY29udHJvbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgYXJyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkeDogbnVtYmVyO1xuXG4gIHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVycm9yRGV0YWlscz4obnVsbCk7XG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgcmVhZHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSkge31cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIGlmICghdGhpcy5yZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmVycm9ycztcbiAgfVxuXG4gIGdldCBoYXNFcnJvcnMoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5lcnJvcnM7XG4gIH1cblxuICBoYXNFcnJvcihuYW1lOiBzdHJpbmcsIGNvbmRpdGlvbnM6IEVycm9yT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrUHJvcFN0YXRlKCdpbnZhbGlkJywgbmFtZSwgY29uZGl0aW9ucyk7XG4gIH1cblxuICBpc1ZhbGlkKG5hbWU6IHN0cmluZywgY29uZGl0aW9uczogRXJyb3JPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tQcm9wU3RhdGUoJ3ZhbGlkJywgbmFtZSwgY29uZGl0aW9ucyk7XG4gIH1cblxuICBnZXRFcnJvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5nZXRFcnJvcihuYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQcm9wU3RhdGUoXG4gICAgcHJvcDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb25kaXRpb25zOiBFcnJvck9wdGlvbnNcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2xQcm9wc1N0YXRlID1cbiAgICAgICFjb25kaXRpb25zIHx8XG4gICAgICB0b0FycmF5KGNvbmRpdGlvbnMpLmV2ZXJ5KChjb25kaXRpb246IHN0cmluZykgPT4gdGhpcy5jb250cm9sW2NvbmRpdGlvbl0pO1xuICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gJyonKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sW3Byb3BdICYmIGNvbnRyb2xQcm9wc1N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcCA9PT0gJ3ZhbGlkJ1xuICAgICAgPyAhdGhpcy5jb250cm9sLmhhc0Vycm9yKG5hbWUpXG4gICAgICA6IHRoaXMuY29udHJvbC5oYXNFcnJvcihuYW1lKSAmJiBjb250cm9sUHJvcHNTdGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTdGF0dXMoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICBjb25zdCBlcnJvcnMgPSBjb250cm9sLmVycm9ycztcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICBpZiAoIWVycm9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGVycm9yTmFtZSBpbiBlcnJvcnMpIHtcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgY29udHJvbCwgZXJyb3JOYW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmFyciAmJiAhaXNOYU4odGhpcy5pZHgpKSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm0uY29udHJvbC5nZXQodGhpcy5hcnIpIGFzIEZvcm1BcnJheTtcbiAgICAgIGlmIChhcnIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGFyci5hdCh0aGlzLmlkeCk7XG4gICAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbC5nZXQodGhpcy5jb250cm9sTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2wuZ2V0KHRoaXMuY29udHJvbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tTdGF0dXMoKTtcbiAgICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSh0aGlzLmNoZWNrU3RhdHVzLmJpbmQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==