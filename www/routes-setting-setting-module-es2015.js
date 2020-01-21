(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-setting-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/setting/setting.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/setting/setting.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>设置</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content color=\"medium\">\r\n    <ion-list inset=\"true\">\r\n      <ion-item detail href=\"/shopsetting\">\r\n        <ion-label>店铺设置</ion-label>\r\n      </ion-item>\r\n    <ion-item detail href=\"/change-password\">\r\n      <ion-label>修改密码</ion-label>\r\n    </ion-item>\r\n    </ion-list>\r\n    <ion-list inset=\"true\">\r\n      <ion-item detail href=\"/about-us\">\r\n        <ion-label>关于</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>联系客服</ion-label>\r\n        <ion-note slot=\"end\"><a href=\"Tel:13067373231\">13067373231</a></ion-note>\r\n      </ion-item>\r\n      <ion-item detail (click)=\"checkUpdate()\">\r\n        <ion-label>版本号: {{version}}</ion-label>\r\n        <ion-note slot=\"end\">检测更新</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list inset=\"true\">\r\n      <ion-item detail (click)=\"onLogout()\">\r\n        <ion-label>安全退出</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    <!-- ÆäËûÊ¡ÂÔ -->\r\n  </ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/routes/setting/setting.module.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/setting/setting.module.ts ***!
  \**************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/routes/setting/setting.page.ts");







const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
let SettingPageModule = class SettingPageModule {
};
SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })
], SettingPageModule);



/***/ }),

/***/ "./src/app/routes/setting/setting.page.scss":
/*!**************************************************!*\
  !*** ./src/app/routes/setting/setting.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/routes/setting/setting.page.ts":
/*!************************************************!*\
  !*** ./src/app/routes/setting/setting.page.ts ***!
  \************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let SettingPage = class SettingPage {
    constructor(localStorageService, router, alertController) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.alertController = alertController;
    }
    ionViewWillEnter() {
        let appConfig = this.localStorageService.get('App', {
            hasRun: false,
            version: '1.1.1'
        });
        this.version = appConfig.version;
    }
    ngOnInit() {
    }
    onLogout() {
        this.localStorageService.remove('login');
        this.router.navigateByUrl('login');
    }
    checkUpdate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: '提示',
                message: '已经是最新版本',
                buttons: ['确认']
            });
            alert.present();
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/setting/setting.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.page.scss */ "./src/app/routes/setting/setting.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=routes-setting-setting-module-es2015.js.map