/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { toArray } from '../utils/to-array';
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
export { NgxErrorsDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVycm9ycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWlzdGFrZXMvIiwic291cmNlcyI6WyJsaWIvbmd4LWVycm9ycy9uZ3gtZXJyb3JzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVDO0lBWUUsNEJBQW9CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBSjVDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsQ0FBQztRQUVsRCxVQUFLLEdBQUcsS0FBSyxDQUFDO0lBRWlDLENBQUM7SUFFaEQsc0JBQUksc0NBQU07Ozs7UUFBVjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLE9BQU87YUFDUjtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7Ozs7O0lBRUQscUNBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsVUFBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsb0NBQU87Ozs7O0lBQVAsVUFBUSxJQUFZLEVBQUUsVUFBd0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsSUFBWTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7Ozs7SUFFTywyQ0FBYzs7Ozs7OztJQUF0QixVQUNFLElBQVksRUFDWixJQUFZLEVBQ1osVUFBd0I7UUFIMUIsaUJBaUJDO1FBWkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7O1lBQ0ssaUJBQWlCLEdBQ3JCLENBQUMsVUFBVTtZQUNYLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxTQUFpQixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBdkIsQ0FBdUIsRUFBQztRQUMzRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBSSxLQUFLLE9BQU87WUFDckIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVPLHdDQUFXOzs7O0lBQW5COztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTzs7WUFDdEIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFDRCxpQ0FBaUM7UUFDakMsS0FBSyxJQUFNLFNBQVMsSUFBSSxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFBQSxpQkFLQztRQUpDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBckZGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFYUSxrQkFBa0I7Ozs4QkFheEIsS0FBSyxTQUFDLFdBQVc7O0lBZ0ZwQix5QkFBQztDQUFBLEFBdEZELElBc0ZDO1NBakZZLGtCQUFrQjs7O0lBQzdCLHlDQUF3Qzs7SUFFeEMscUNBQWtEOztJQUNsRCxxQ0FBeUI7O0lBQ3pCLG1DQUFjOzs7OztJQUVGLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwRGlyZWN0aXZlLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFcnJvckRldGFpbHMsIEVycm9yT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZXJyb3JzLmludGVyZmFjZSc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi4vdXRpbHMvdG8tYXJyYXknO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ3hFcnJvcnNdJyxcbiAgZXhwb3J0QXM6ICduZ3hFcnJvcnMnXG59KVxuZXhwb3J0IGNsYXNzIE5neEVycm9yc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCduZ3hFcnJvcnMnKSBjb250cm9sTmFtZTogc3RyaW5nO1xuXG4gIHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVycm9yRGV0YWlscz4obnVsbCk7XG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgcmVhZHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSkge31cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIGlmICghdGhpcy5yZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmVycm9ycztcbiAgfVxuXG4gIGdldCBoYXNFcnJvcnMoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5lcnJvcnM7XG4gIH1cblxuICBoYXNFcnJvcihuYW1lOiBzdHJpbmcsIGNvbmRpdGlvbnM6IEVycm9yT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrUHJvcFN0YXRlKCdpbnZhbGlkJywgbmFtZSwgY29uZGl0aW9ucyk7XG4gIH1cblxuICBpc1ZhbGlkKG5hbWU6IHN0cmluZywgY29uZGl0aW9uczogRXJyb3JPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tQcm9wU3RhdGUoJ3ZhbGlkJywgbmFtZSwgY29uZGl0aW9ucyk7XG4gIH1cblxuICBnZXRFcnJvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5nZXRFcnJvcihuYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQcm9wU3RhdGUoXG4gICAgcHJvcDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb25kaXRpb25zOiBFcnJvck9wdGlvbnNcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2xQcm9wc1N0YXRlID1cbiAgICAgICFjb25kaXRpb25zIHx8XG4gICAgICB0b0FycmF5KGNvbmRpdGlvbnMpLmV2ZXJ5KChjb25kaXRpb246IHN0cmluZykgPT4gdGhpcy5jb250cm9sW2NvbmRpdGlvbl0pO1xuICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gJyonKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sW3Byb3BdICYmIGNvbnRyb2xQcm9wc1N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcCA9PT0gJ3ZhbGlkJ1xuICAgICAgPyAhdGhpcy5jb250cm9sLmhhc0Vycm9yKG5hbWUpXG4gICAgICA6IHRoaXMuY29udHJvbC5oYXNFcnJvcihuYW1lKSAmJiBjb250cm9sUHJvcHNTdGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTdGF0dXMoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICBjb25zdCBlcnJvcnMgPSBjb250cm9sLmVycm9ycztcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICBpZiAoIWVycm9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGVycm9yTmFtZSBpbiBlcnJvcnMpIHtcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgY29udHJvbCwgZXJyb3JOYW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sLmdldCh0aGlzLmNvbnRyb2xOYW1lKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tTdGF0dXMoKTtcbiAgICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSh0aGlzLmNoZWNrU3RhdHVzLmJpbmQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==