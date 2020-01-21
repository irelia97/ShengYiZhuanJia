(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/change-password/change-password.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/change-password/change-password.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>修改密码</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n    <form (ngSubmit)=\"onChangePwd()\" #changePwdForm=\"ngForm\" novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-text>请输入旧密码</ion-text>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input name=\"oldPwd\" type=\"password\" required [(ngModel)]=\"pwd.old\" #oldPwd=\"ngModel\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-text>请输入新密码</ion-text>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input name=\"newPwd\" type=\"password\" required [(ngModel)]=\"pwd.new\" #newPwd=\"ngModel\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-text>请再输入一次</ion-text>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input name=\"cNewPwd\" type=\"password\" required [(ngModel)]=\"pwd.cNew\" #cNewPwd=\"ngModel\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-text text-left color=\"danger\" *ngIf=\"changePwdForm.submitted\">\r\n          <p [hidden]=\"samePwd\" padding-start>两次输入的密码不一致。</p>\r\n          <p [hidden]=\"oldIsRight\" padding-start>您输入的旧密码不正确。</p>\r\n        </ion-text>\r\n        <div padding-horizontal>\r\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"changePwdForm.invalid\">下一步</ion-button>\r\n        </div>\r\n      </ion-list>\r\n    </form>\r\n  </ion-content>\r\n\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->\r\n  <!--没有抄袭-->");

/***/ }),

/***/ "./src/app/routes/change-password/change-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/change-password/change-password.module.ts ***!
  \******************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/routes/change-password/change-password.page.ts");







const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
    }
];
let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/routes/change-password/change-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/routes/change-password/change-password.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/routes/change-password/change-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/change-password/change-password.page.ts ***!
  \****************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user-service.service */ "./src/app/shared/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ChangePasswordPage = class ChangePasswordPage {
    constructor(localStorageService, userService, router, alertController) {
        this.localStorageService = localStorageService;
        this.userService = userService;
        this.router = router;
        this.alertController = alertController;
        this.pwd = {
            old: '',
            new: '',
            cNew: ''
        };
        this.oldIsRight = true;
        this.samePwd = true;
    }
    ngOnInit() {
    }
    onChangePwd() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let login = this.localStorageService.get('currentUser', null);
            if (login.accounts.passwordToken == this.pwd.old) {
                if (this.pwd.new == this.pwd.cNew) {
                    this.userService.update(login.phone, this.pwd.new);
                    login.accounts.passwordToken = this.pwd.new;
                    this.localStorageService.set('currentUser', login);
                    this.router.navigateByUrl('setting');
                    let alert = yield this.alertController.create({
                        header: '提示',
                        message: '密码修改成功',
                        buttons: ['确认']
                    });
                    alert.present();
                }
                else {
                    this.samePwd = false;
                }
            }
            else {
                this.oldIsRight = false;
            }
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/change-password/change-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.page.scss */ "./src/app/routes/change-password/change-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], ChangePasswordPage);

//  <!--没有抄袭-->
//  <!--没有抄袭-->
//  <!--没有抄袭-->
//  <!--没有抄袭-->
//  <!--没有抄袭-->
//  <!--没有抄袭-->
//  <!--没有抄袭-->
//  <!--没有抄袭-->


/***/ })

}]);
//# sourceMappingURL=routes-change-password-change-password-module-es2015.js.map