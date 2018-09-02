(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _paper_paper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper/paper.component */ "./src/app/paper/paper.component.ts");
/* harmony import */ var _paper_edit_paper_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-edit/paper-edit.component */ "./src/app/paper-edit/paper-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'paper', component: _paper_paper_component__WEBPACK_IMPORTED_MODULE_3__["PaperComponent"] },
    { path: 'paper/edit', component: _paper_edit_paper_edit_component__WEBPACK_IMPORTED_MODULE_4__["PaperEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: -apple-system,SF UI Text,Helvetica Neue,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Zen Hei,sans-serif;\n  font-weight: lighter;\n}\n#main-content {\n  /*margin-top: 6rem;*/\n  margin-top: 2rem;\n}\n.navbar-brand {\n  font-size: 1.5rem;\n}\n.form-group {\n  width: 100%;\n}\n#right-nav {\n  padding-left: 15px;\n  border-left: 1px solid gray;\n  box-sizing: border-box;\n}\n#right-nav .row {\n  margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">AI Testing Repository</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\" [class.active]=\"selectedNav === 'home'\" (click)=\"onSelectNav('home')\">Home</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/paper\" [skipLocationChange]=\"'false'\" [queryParams]=\"{ type: 1 }\" [class.active]=\"selectedNav === 'paper'\" (click)=\"onSelectNav('paper')\">Paper</a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container\" id=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"col-md-4\" id=\"right-nav\">\n      <div class=\"row\">\n        <!--<div class=\"input-group-prepend\">-->\n        <!--<div class=\"input-group-text\">-->\n        <!--<p-dropdown [options]=\"types\"></p-dropdown>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<input type=\"text\" class=\"form-control\"/>-->\n        <div class=\"form-group\">\n          <h4>Quick Search</h4>\n        </div>\n        <div class=\"form-group\">\n          <p-dropdown [options]=\"types\" [(ngModel)]=\"queryParams.type\"></p-dropdown>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"ui-inputgroup\">\n            <input type=\"text\" pInputText placeholder=\"Keyword\" [(ngModel)]=\"queryParams.keywords\">\n            <button pButton type=\"button\" label=\"Search\" routerLink=\"/paper\" [queryParams]=\"queryParams\"></button>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <span>View all <a routerLink=\"/paper\" [queryParams]=\"{ type: 1 }\">papers</a></span>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <h4>Paper Upload</h4>\n        </div>\n        <div class=\"form-group\">\n          <button pButton type=\"button\" routerLink=\"/paper/edit\" label=\"Edit\" (click)=\"onSelectNav('paper')\"></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(route, location) {
        this.route = route;
        this.location = location;
        if (location) {
            var path = location.path();
            this.selectedNav = path.substring(1, path.length);
            if (this.selectedNav == '') {
                this.selectedNav = 'home';
            }
        }
        else {
            this.selectedNav = 'home';
        }
        this.types = [
            { label: 'By paper title', value: _config__WEBPACK_IMPORTED_MODULE_3__["Config"].type_title },
            { label: 'By author name', value: _config__WEBPACK_IMPORTED_MODULE_3__["Config"].type_author }
        ];
        this.queryParams = {
            type: _config__WEBPACK_IMPORTED_MODULE_3__["Config"].type_title,
        };
    }
    AppComponent.prototype.onSelectNav = function (nav) {
        this.selectedNav = nav;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _paper_paper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paper/paper.component */ "./src/app/paper/paper.component.ts");
/* harmony import */ var _paper_edit_paper_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./paper-edit/paper-edit.component */ "./src/app/paper-edit/paper-edit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _paper_paper_component__WEBPACK_IMPORTED_MODULE_15__["PaperComponent"],
                _paper_edit_paper_edit_component__WEBPACK_IMPORTED_MODULE_16__["PaperEditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["PaginatorModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_8__["FieldsetModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextareaModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_11__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_12__["MessageModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.isValid = function (obj) {
        return !(obj == undefined || obj == null || obj == '');
    };
    Config.base_url = ''; // 居然要加http!!!不然不会算作http请求，不能跨域
    Config.type_title = 1;
    Config.type_author = 2;
    return Config;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/model/paper.ts":
/*!********************************!*\
  !*** ./src/app/model/paper.ts ***!
  \********************************/
/*! exports provided: Paper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return Paper; });
var Paper = /** @class */ (function () {
    function Paper(parameters) {
        this.authors = [];
        this.title = '';
        this.publishJournal = '';
        this.paperAbstract = '';
        this.url = '';
        this.publishTime = '';
        this.authors = parameters.authors;
        this.title = parameters.title;
        this.publishJournal = parameters.publishJournal;
        this.paperAbstract = parameters.paperAbstract;
        this.url = parameters.url;
        this.showAbstract = false;
        this.publishTime = parameters.publishTime;
    }
    Paper.prototype.getAuthorsStr = function () {
        var result = '';
        for (var i = 0; i < this.authors.length; i++) {
            if (i == 0) {
                result += this.authors[i]['name'];
            }
            else {
                result += (' and ' + this.authors[i]['name']);
            }
        }
        return result;
    };
    return Paper;
}());



/***/ }),

/***/ "./src/app/paper-edit/paper-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/paper-edit/paper-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group h5 {\n  width: 100%;\n}\n.form-group {\n  width: 100%;\n  padding-right: 8rem;\n}\n.ui-inputgroup {\n  padding: 0;\n}\n.authors-list {\n  margin-top: 8px;\n  font-size: 1.3rem;\n}\n.delete-btn {\n  cursor: pointer;\n}\n.badge {\n  margin-right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/paper-edit/paper-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/paper-edit/paper-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h4>Paper Upload</h4>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"form-group\">\n    <h5>Title</h5>\n    <input type=\"text\" pInputText class=\"col-md-12\" [(ngModel)]=\"paper.title\" (change)=\"checkTitle(paper.title)\"/>\n  </div>\n  <div class=\"form-group\">\n    <h5>Authors</h5>\n    <div class=\"ui-inputgroup col-md-12\">\n      <input type=\"text\" pInputText class=\"col-md-12\" [(ngModel)]=\"authorName\"/>\n      <button pButton type=\"button\" icon=\"pi pi-plus\" class=\"ui-button-info\" (click)=\"addAuthor(authorName)\"></button>\n    </div>\n    <div class=\"authors-list\">\n      <span class=\"badge badge-primary\" *ngFor=\"let author of paper.authors\">{{ author }}&nbsp;<span class=\"delete-btn\" (click)=\"deleteAuthor(author)\">&times;</span></span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <h5>Publish Journal</h5>\n    <input type=\"text\" pInputText class=\"col-md-12\" [(ngModel)]=\"paper.publishJournal\"/>\n  </div>\n  <div class=\"form-group\">\n    <h5>Publish Time</h5>\n    <!--<input type=\"text\" pInputText placeholder=\"Time\" class=\"col-md-12\"/>-->\n    <p-calendar [inputStyleClass]=\"'col-md-12'\"\n                [styleClass]=\"'col-md-12'\"\n                [style]=\"{ padding: '0' }\"\n                [(ngModel)]=\"paper.publishTime\" dateFormat=\"dd/mm/yy\"></p-calendar>\n  </div>\n  <div class=\"form-group\">\n    <h5>URL</h5>\n    <input type=\"text\" pInputText class=\"col-md-12\" [(ngModel)]=\"paper.url\"/>\n  </div>\n  <div class=\"form-group\">\n    <h5>Abstract</h5>\n    <textarea pInputTextarea [(ngModel)]=\"paper.paperAbstract\" class=\"col-md-12\" [rows]=\"5\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <button pButton type=\"button\" icon=\"pi pi-file\" label=\"Save\" class=\"ui-button-success\" (click)=\"uploadPaper()\"></button>\n    &nbsp;&nbsp;\n    <button pButton type=\"button\" icon=\"pi pi-refresh\" label=\"Reset\" class=\"ui-button-secondary\" (click)=\"reset()\"></button>\n  </div>\n</div>\n<p-toast key=\"info\"></p-toast>\n"

/***/ }),

/***/ "./src/app/paper-edit/paper-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paper-edit/paper-edit.component.ts ***!
  \****************************************************/
/*! exports provided: PaperEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperEditComponent", function() { return PaperEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _service_paper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/paper.service */ "./src/app/service/paper.service.ts");
/* harmony import */ var _model_paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/paper */ "./src/app/model/paper.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaperEditComponent = /** @class */ (function () {
    function PaperEditComponent(paperService, messageService) {
        this.paperService = paperService;
        this.messageService = messageService;
        this.paper = new _model_paper__WEBPACK_IMPORTED_MODULE_3__["Paper"]({
            authors: [],
            title: '',
            publishTime: '',
            paperAbstract: '',
            publishJournal: '',
            url: ''
        });
    }
    PaperEditComponent.prototype.ngOnInit = function () {
    };
    PaperEditComponent.prototype.addAuthor = function (author) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["Config"].isValid(author)) {
            for (var i = 0; i < this.paper.authors.length; i++) {
                if (this.paper.authors[i] === author) {
                    return;
                }
            }
            this.paper.authors.push(author);
        }
    };
    PaperEditComponent.prototype.deleteAuthor = function (author) {
        for (var i = 0; i < this.paper.authors.length; i++) {
            if (this.paper.authors[i] === author) {
                this.paper.authors.splice(i, 1);
                break;
            }
        }
    };
    PaperEditComponent.prototype.uploadPaper = function () {
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["Config"].isValid(this.paper.title)) {
            this.showError('Title cannot be empty!');
            return;
        }
        if (this.paper.authors.length < 1) {
            this.showError('Enter at least 1 author!');
            return;
        }
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["Config"].isValid(this.paper.publishJournal)) {
            this.showError('Publish Journal cannot be empty!');
            return;
        }
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["Config"].isValid(this.paper.url)) {
            this.showError('URL cannot be empty!');
            return;
        }
        this.paperService.uploadPaper(this.paper)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    PaperEditComponent.prototype.reset = function () {
        this.paper = new _model_paper__WEBPACK_IMPORTED_MODULE_3__["Paper"]({
            authors: [],
            title: '',
            publishTime: '',
            paperAbstract: '',
            publishJournal: '',
            url: ''
        });
    };
    PaperEditComponent.prototype.showError = function (msg) {
        this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
    };
    PaperEditComponent.prototype.showWarning = function (msg) {
        this.messageService.add({ key: 'info', severity: 'warn', summary: 'Warn Message', detail: msg });
    };
    PaperEditComponent.prototype.showInfo = function (msg) {
        this.messageService.add({ key: 'info', severity: 'info', summary: 'Info Message', detail: msg });
    };
    PaperEditComponent.prototype.checkTitle = function (title) {
        var _this = this;
        console.log(title);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["Config"].isValid(title)) {
            this.paperService.checkTitle(title)
                .subscribe(function (res) {
                if (res['code'] != 200) {
                    _this.showError(res['message']);
                    return;
                }
                var data = res['data'];
                if (data > 0) {
                    _this.showInfo('Paper exists!');
                    return;
                }
            });
        }
    };
    PaperEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paper-edit',
            template: __webpack_require__(/*! ./paper-edit.component.html */ "./src/app/paper-edit/paper-edit.component.html"),
            styles: [__webpack_require__(/*! ./paper-edit.component.css */ "./src/app/paper-edit/paper-edit.component.css")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_service_paper_service__WEBPACK_IMPORTED_MODULE_2__["PaperService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PaperEditComponent);
    return PaperEditComponent;
}());



/***/ }),

/***/ "./src/app/paper/paper.component.css":
/*!*******************************************!*\
  !*** ./src/app/paper/paper.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paper-list {\n  font-size: 0.8rem;\n  padding-left: 0;\n  margin-top: 10px;\n}\n.paper {\n  border-top: 1px solid black;\n  padding: 10px;\n}\n.paper p {\n  margin-bottom: 1px;\n}\n.paper a {\n  color: #08c;\n  padding: 2px 8px;\n  border-right: 1px solid gray;\n  cursor: pointer;\n}\n.paper a:last-child {\n  border: none;\n}\n.pagination {\n  margin: 0 auto;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/paper/paper.component.html":
/*!********************************************!*\
  !*** ./src/app/paper/paper.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h4>Paper List</h4>\n  <div class=\"paper-list col-md-12\">\n    <div class=\"paper\" *ngFor=\"let paper of papers\">\n      <p>{{ paper.getAuthorsStr() }}</p>\n      <p><strong>{{ paper.title }}</strong></p>\n      <p>{{ paper.publishJournal }}</p>\n      <div class=\"text-right\">\n        <a (click)=\"toggleAbstract(paper)\">Abstract</a>\n        <a href=\"{{ paper.url }}\" target=\"_blank\">URL</a>\n      </div>\n      <p [hidden]=\"!paper.showAbstract\">\n        <strong>Abstract: </strong>{{ paper.paperAbstract }}\n      </p>\n    </div>\n  </div>\n  <div class=\"pagination\" *ngIf=\"totalElements == 0\">\n    <span>No results</span>\n  </div>\n  <div class=\"pagination\">\n    <p-paginator *ngIf=\"totalElements != 0\"\n                 [rows]=\"pageSize\"\n                 [totalRecords]=\"totalElements\"\n                 (onPageChange)=\"paginate($event)\"></p-paginator>\n  </div>\n</div>\n<p-toast key=\"info\"></p-toast>\n"

/***/ }),

/***/ "./src/app/paper/paper.component.ts":
/*!******************************************!*\
  !*** ./src/app/paper/paper.component.ts ***!
  \******************************************/
/*! exports provided: PaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperComponent", function() { return PaperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/paper */ "./src/app/model/paper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _service_paper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/paper.service */ "./src/app/service/paper.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaperComponent = /** @class */ (function () {
    function PaperComponent(route, paperService, messageService) {
        this.route = route;
        this.paperService = paperService;
        this.messageService = messageService;
        // const params = route.snapshot.queryParamMap;
        // this.type = Config.isValid(params.get('type')) ? parseInt(params.get('type')) : Config.type_title;
        // this.keywords = params.get('keywords');
        this.papers = [];
        this.currentPage = 1;
        this.pageSize = 10;
        this.totalPages = 0;
        this.totalElements = 0;
    }
    PaperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (queryParams) {
            _this.type = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].isValid(queryParams['type']) ? parseInt(queryParams['type']) : _config__WEBPACK_IMPORTED_MODULE_3__["Config"].type_title;
            _this.keywords = queryParams['keywords'];
            _this.searchPaper();
        });
    };
    PaperComponent.prototype.searchPaper = function () {
        var _this = this;
        this.paperService.getPapers(this.type, this.keywords, this.currentPage, this.pageSize)
            .subscribe(function (res) {
            if (res['code'] != 200) {
                _this.showError(res['message']);
                return;
            }
            var data = res['data'];
            var content = data['content'];
            _this.papers = [];
            for (var i = 0; i < content.length; i++) {
                _this.papers.push(new _model_paper__WEBPACK_IMPORTED_MODULE_1__["Paper"](content[i]));
            }
            // this.currentPage = data['currentPage'];
            // this.pageSize = data['pageSize'];
            _this.totalPages = data['totalPages'];
            _this.totalElements = data['totalElements'];
        });
    };
    PaperComponent.prototype.toggleAbstract = function (paper) {
        paper.showAbstract = !paper.showAbstract;
    };
    PaperComponent.prototype.paginate = function ($event) {
        this.currentPage = $event['page'] + 1;
        this.searchPaper();
    };
    PaperComponent.prototype.showError = function (msg) {
        this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
    };
    PaperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paper',
            template: __webpack_require__(/*! ./paper.component.html */ "./src/app/paper/paper.component.html"),
            styles: [__webpack_require__(/*! ./paper.component.css */ "./src/app/paper/paper.component.css")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_paper_service__WEBPACK_IMPORTED_MODULE_4__["PaperService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], PaperComponent);
    return PaperComponent;
}());



/***/ }),

/***/ "./src/app/service/paper.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/paper.service.ts ***!
  \******************************************/
/*! exports provided: PaperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperService", function() { return PaperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaperService = /** @class */ (function () {
    function PaperService(http) {
        this.http = http;
    }
    PaperService.prototype.getPapers = function (type, keywords, currentPage, pageSize) {
        var url = '';
        if (_config__WEBPACK_IMPORTED_MODULE_3__["Config"].isValid(keywords)) {
            url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].base_url + "/api/paper/findByKeyword?type=" + type + "&currentPage=" + currentPage + "&pageSize=" + pageSize + "&keywords=" + keywords;
        }
        else {
            url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].base_url + "/api/paper/findByKeyword?type=" + type + "&currentPage=" + currentPage + "&pageSize=" + pageSize;
        }
        return this.http.get(url, {
            responseType: 'json',
            withCredentials: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPapers', {})));
    };
    PaperService.prototype.uploadPaper = function (paper) {
        var url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].base_url + "/api/paper/create";
        return this.http.post(url, paper, {
            responseType: 'json',
            withCredentials: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('uploadPaper', {})));
    };
    PaperService.prototype.checkTitle = function (title) {
        var url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].base_url + "/api/paper/isExistTitle?title=" + title;
        return this.http.get(url, {
            responseType: 'json',
            withCredentials: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('checkTitle', {})));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PaperService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            // this.ms.showError(error.message);
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            result['message'] = error.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PaperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PaperService);
    return PaperService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hermc/Documents/Projects/Java/AITestingRepository/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map