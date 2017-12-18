webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- About Section -->\n  <div class=\"w3-row w3-padding-64\">\n    <div class=\"w3-col m6 w3-padding-large w3-hide-small\">\n     <img src=\"assets/img/main2.png\" class=\"w3-round w3-image w3-opacity-min\" alt=\"Table Setting\"><br>\n     <img src=\"http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/images/amexpub/0039/4779/201310-ss-best-indian-restaurants-gandhi-mahal.jpg?itok=49SVj9pT\" class=\"w3-round w3-image w3-opacity-min\" alt=\"Table Setting\">\n    </div>\n\n    <div class=\"w3-col m6 w3-padding-large\">\n      <h1 class=\"w3-center\">About conFusion</h1><br>\n      <h5 class=\"w3-center\">Started in 2010,</h5>\n      <p class=\"w3-large\">\n        Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.\n         With its unique brand of world fusion cuisine that can be found nowhere else,\n          it enjoys patronage from the A-list clientele in Hong Kong.\n          Featuring four of the best three-star Michelin chefs in the world,\n          you never know what will arrive on your plate the next time you visit us.</p>\n      The restaurant traces its humble beginnings to <em>The Frying Pan</em>,\n         a successful chain started by our CEO, Mr. Peter Pan,\n          that featured for the first time the world's best cuisines in a pan.\n      <p class=\"w3-large w3-text-grey w3-hide-medium\">The restaurant traces its humble beginnings to <em>The Frying Pan</em>,\n         a successful chain started by our CEO, Mr. Peter Pan,\n          that featured for the first time the world's best cuisines in a pan.</p>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">\n            <a routerLink=\"/aboutus\">More>></a></button>\n    </div>\n  </div>\n  <hr>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "  <ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\n    <li class=\"breadcrumb-item\">About Us</li>\n  </ul>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12\">\n      <h3>About Us</h3>\n      <hr>\n      <br>\n    </div>\n      <div class=\"col-xs-12 col-sm-12 col-lg-4\">\n          <h2>Our History</h2>\n        </div>\n          <div class=\"col-xs-12 col-sm-12 col-lg-8\">\n          <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.\n             With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.\n               Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n          <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>,\n             a successful chain started by our CEO, Mr. Peter Pan,\n              that featured for the first time the world's best cuisines in a pan.</p>\n      </div>\n  </div>\n  <div class=\"row\">\n             <div class=\"col-xs-12 col-sm-12 col-lg-4\">\n                 <h2>Corporate Leadership</h2>\n                 <hr>\n              </div>\n              <div class=\"col-xs-12 col-sm-12 col-lg-8\">\n              <app-leader></app-leader>\n              </div>\n        </div>\n  <app-facts></app-facts>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__("../../../../../src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dishes_service__ = __webpack_require__("../../../../../src/app/dishes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__leaders_service__ = __webpack_require__("../../../../../src/app/leaders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__promotions_service__ = __webpack_require__("../../../../../src/app/promotions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__leader_leader_component__ = __webpack_require__("../../../../../src/app/leader/leader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__promotion_promotion_component__ = __webpack_require__("../../../../../src/app/promotion/promotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dish_dish_component__ = __webpack_require__("../../../../../src/app/dish/dish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__facts_facts_component__ = __webpack_require__("../../../../../src/app/facts/facts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__leader_leader_component__["a" /* LeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__promotion_promotion_component__["a" /* PromotionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__dish_dish_component__["a" /* DishComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__facts_facts_component__["a" /* FactsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__dishes_service__["a" /* DishesService */], __WEBPACK_IMPORTED_MODULE_9__config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_15__leaders_service__["a" /* LeadersService */], __WEBPACK_IMPORTED_MODULE_16__promotions_service__["a" /* PromotionsService */], __WEBPACK_IMPORTED_MODULE_26__users_service__["a" /* UsersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        tokenName: 'token',
        tokenGetter: (function () { return localStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  text-align: center;\n}\n.badge {\n  background-color: red ;\n  border: solid 1px grey ;\n  text-align: center;\n}\na {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row w3-serif\">\n    <ul class=\"nav\">\n      <li  class=\"col-xs-12 col-sm-12\" *ngFor=\"let dish of dishes\">\n        <div class=\"row\">\n          <div class=\"col-xs-3 col-sm-3\">\n            <img class=\"img img-responsive menu-icon\" src=\"{{dish.image}}\" alt=\"{{dish.name}}\">\n          </div>\n          <div class=\"col-xs-9 col-sm-9\">\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-7 col-lg-8\">\n                <a routerLink=\"/dish/{{dish._id}}\" class=\"w3-wide\">{{dish.name}}</a>\n              </div>\n              <div class=\"col-xs-6 col-sm-5 col-lg-4\">\n                <span class=\"badge w3-badge\">{{dish.price/100}}$</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dishes_service__ = __webpack_require__("../../../../../src/app/dishes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(DishesService, ConfigService) {
        this.DishesService = DishesService;
        this.ConfigService = ConfigService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.updatCategoryTemp();
    };
    CategoryComponent.prototype.ngOnChanges = function () {
        this.updatCategoryTemp();
    };
    CategoryComponent.prototype.updatCategoryTemp = function () {
        var _this = this;
        if (this.category.length > 0) {
            this.DishesService.getCategory(this.category)
                .subscribe(function (dishes) {
                dishes.forEach(_this.ConfigService.editImageLink);
                _this.dishes = dishes;
            });
        }
        else {
            this.DishesService.getDishes()
                .subscribe(function (dishes) {
                dishes.forEach(_this.ConfigService.editImageLink);
                _this.dishes = dishes;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CategoryComponent.prototype, "category", void 0);
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dishes_service__["a" /* DishesService */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li:hover {\n  background-color: #DCDCDC ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-12\">\n    <h3 *ngIf=\"dish.comments.length>0\">Comments : </h3>\n  </div>\n  <div class=\"col-xs-12 col-sm-12\">\n      <ul class=\"nav navbar-nav\">\n        <li *ngFor=\"let comment of dish.comments\">\n        <div class=\"row\" *ngIf=\"!isEditing\">\n          <div class=\"col-xs-8 col-sm-8\">\n            <h5>{{comment.author.username}}<span class=\"badge\">{{comment.rating}}</span></h5>\n          </div>\n          <div class=\"col-xs-2 col-sm-2\">\n            <button type=\"button\" class=\"btn btn-info btn-sm\"\n            *ngIf=\"commentOwner(comment)\"\n            (click)=\"setEditing(comment)\">Edit</button>\n          </div>\n          <div class=\"col-xs-2 col-sm-2\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\"\n            *ngIf=\"commentOwner(comment)\"\n            (click)=\"deleteComment(comment)\">X</button>\n          </div>\n          <div class=\"col-xs-12 col-sm-12\">\n            <p class=\"w3-wide w3-serif\">{{comment.comment}}</p>\n          </div>\n          <hr>\n          </div>\n        </li>\n      </ul>\n      <div class=\"row\" *ngIf=\"isEditing\">\n        <div class=\"col-xs-12 col-sm-7 offset-sm-3\">\n          <div class=\"row\">\n            <form class=\"form-horizontal\">\n              <div class=\"form-group\">\n                <label for=\"commentedit\">comment : <input type=\"text-area\" id=\"commentedit\"\n                  name=\"commentedit\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"commentedit\"\n                  style=\"min-height : 100px ;\"></label>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"ratingedit\">Rating : <input type=\"number\" name=\"ratingedit\" id=\"ratingedit\"\n                  min=\"1\" max=\"5\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"ratingedit\"></label>\n              </div>\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-info btn-lg form-control\"\n                 (click)=\"editComment()\">Edit comment</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n  </div>\n  </div>\n  <div class=\"row\" *ngIf=\"!isEditing&&loggedin\">\n    <div class=\"col-xs-11 offset-xs-1 col-sm-2\">\n      <h6> <small>comment as </small>{{username}}  </h6>\n    </div>\n    <div class=\"col-xs-11 offset-xs-1 col-sm-8 offset-sm-2\">\n      <div class=\"row\">\n        <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label for=\"comment\">comment : <input type=\"text-area\" id=\"comment\"\n              name=\"comment\"\n              placeholder=\"leave your comment here : \"\n              class=\"form-control\"\n              [(ngModel)]=\"comment\"\n              style=\"min-height : 100px ;\"></label>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"rating\">Rating : <input type=\"number\" name=\"rating\" id=\"rating\" value=\"1\"\n              min=\"1\" max=\"5\"\n              class=\"form-control\"\n              [(ngModel)]=\"rating\"></label>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg form-control\"\n             (click)=\"postComment()\">Add comment</button>\n          </div>\n        </form>\n      </div>\n    </div>\n</div>\n<div class=\"row w3-serif\" *ngIf=\"!loggedin\">\n  <a routerLink=\"/login\">Log in </a>&nbsp; or &nbsp;<a routerLink=\"/signup\"> sign up </a>&nbsp; to comment\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dish__ = __webpack_require__("../../../../../src/app/dish.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dishes_service__ = __webpack_require__("../../../../../src/app/dishes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsComponent = (function () {
    function CommentsComponent(DishesService) {
        this.DishesService = DishesService;
        this.isEditing = false;
        this.username = localStorage.getItem('currentUser');
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.loggedin = Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    CommentsComponent.prototype.postComment = function () {
        this.DishesService.postComment(this.rating, this.comment, this.dish._id)
            .subscribe(function (dish) {
            document.location.reload(true);
        }, function () { return console.log('error occured'); });
    };
    CommentsComponent.prototype.deleteComment = function (comment) {
        this.DishesService.deleteComment(this.dish._id, comment._id)
            .subscribe(function (dish) {
            document.location.reload(true);
        }, function () { return console.log('error occured !'); });
    };
    CommentsComponent.prototype.editComment = function () {
        this.DishesService.editComment(this.dish._id, this.currentEditing._id, this.ratingedit, this.commentedit)
            .subscribe(function (dish) {
            document.location.reload(true);
        }, function () { return console.log('error occured !'); });
    };
    CommentsComponent.prototype.commentOwner = function (comment) {
        if (comment.author.username === localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    };
    CommentsComponent.prototype.setEditing = function (comment) {
        this.isEditing = true;
        this.commentedit = comment.comment;
        this.ratingedit = comment.rating;
        this.currentEditing = comment;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dish__["a" /* Dish */])
    ], CommentsComponent.prototype, "dish", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dishes_service__["a" /* DishesService */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var api = 'https://confusion1995.herokuapp.com';
var ConfigService = (function () {
    function ConfigService() {
        this.url = api;
    }
    ConfigService.prototype.editImageLink = function (dish) {
        dish.image = api + "/" + dish.image;
    };
    ConfigService.prototype.editPromoImg = function (promo) {
        promo.image = api + "/" + promo.image;
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main component for a primary marketing message or call to action -->\n<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\n    <li class=\"breadcrumb-item\">Contact Us</li>\n</ul>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n            </div>\n            <div class=\"col-xs-12 col-sm-12\">\n               <h3>Contact Us</h3>\n               <hr>\n            </div>\n        </div>\n\n        <div class=\"row\">\n           <div class=\"col-xs-12 col-sm-12\">\n              <h3>Location Information</h3>\n           </div>\n            <div class=\"col-xs-12 col-sm-6\">\n                   <h5>Our Address</h5>\n                    <address style=\"font-size: 100%\">\n\t\t              121, Clear Water Bay Road<br>\n\t\t              Clear Water Bay, Kowloon<br>\n\t\t              HONG KONG<br>\n\t\t              <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n\t\t              <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n\t\t              <i class=\"fa fa-envelope\"></i>:\n                        <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n\t\t           </address>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n                <h5>Map of our Location</h5><br>\n                <img src=\"http://www.thesheikhofsharm.com/wp-content/uploads/2012/02/Indian-restaurant-sharm-MughalMagal7map.jpg\"\n                class=\"img img-responsive\" alt=\"MAP\" style=\"max-width : 250px ;\">\n            </div>\n            <div class=\"col-xs-12 col-sm-11\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                 <a type=\"button\" class=\"btn btn-primary\" href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n                 <a type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-skype\"></i> Skype</a>\n                 <a type=\"button\" class=\"btn btn-success\" href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n             </div>\n            </div>\n        </div>\n<br><br><br>\n<hr>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dish.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dish; });
var Dish = (function () {
    function Dish() {
    }
    return Dish;
}());



/***/ }),

/***/ "../../../../../src/app/dish/dish.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background-color: \t#F0FFF0 ;\n}\n.row {\n  padding : 20px ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dish/dish.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\n    <li class=\"breadcrumb-item\"><a routerLink=\"/menu\">Menu</a></li>\n    <li class=\"breadcrumb-item\">{{dish.name}}</li>\n</ul>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-8\">\n      <h1>{{dish.name}}<span class=\"badge badge-info\">{{dish.price/100}}$</span></h1>\n      <p class=\"w3-serif\">{{dish.description}}</p>\n    </div>\n    <div class=\"col-xs-6 col-sm-3 offset-sm-1\">\n      <img class=\"img img-responsive dish-view\" src=\"{{dish.image}}\" alt=\"photo not found\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12\">\n      <!--comments-->\n      <app-comments [dish]=\"dish\"></app-comments>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dish/dish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dishes_service__ = __webpack_require__("../../../../../src/app/dishes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishComponent = (function () {
    function DishComponent(DishesService, route, ConfigService) {
        this.DishesService = DishesService;
        this.route = route;
        this.ConfigService = ConfigService;
        this.url = this.ConfigService.url;
    }
    DishComponent.prototype.ngOnInit = function () {
        this.setDish();
    };
    DishComponent.prototype.setDish = function () {
        var _this = this;
        this.DishesService.getDish(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.ConfigService.editImageLink(_this.dish);
        });
    };
    DishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dish',
            template: __webpack_require__("../../../../../src/app/dish/dish.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dish/dish.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dishes_service__["a" /* DishesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]])
    ], DishComponent);
    return DishComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dishes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
};
var DishesService = (function () {
    function DishesService(http, ConfigService, HTTP) {
        this.http = http;
        this.ConfigService = ConfigService;
        this.HTTP = HTTP;
        this.message = '';
        this.url = this.ConfigService.url;
    }
    DishesService.prototype.log = function (message) {
        this.message += message;
    };
    /*Get All Dishes : */
    DishesService.prototype.getDishes = function () {
        var _this = this;
        var url = this.url + "/dishes";
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (dishes) {
            _this.log('fetched dishes');
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getDishes', [])));
    };
    /*Get dishes by category */
    DishesService.prototype.getCategory = function (category) {
        var _this = this;
        var url = this.url + "/dishes";
        return this.http.get(url + "?category=" + category)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (dishes) {
            _this.log('fetched' + category);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getDishes', [])));
    };
    DishesService.prototype.getDish = function (id) {
        var _this = this;
        var url = this.url + "/dishes";
        return this.http.get(url + "/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (dish) {
            _this.log('fetched dish with id' + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getDish', null)));
    };
    DishesService.prototype.postComment = function (rating, comment, dishId) {
        var _this = this;
        var url = this.url + "/dishes/" + dishId + "/comments";
        return this.HTTP.post(url, JSON.stringify({ 'rating': rating, 'comment': comment }), httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (dish) { return _this.log('comment posted'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('post comment : ', null)));
    };
    DishesService.prototype.deleteComment = function (dishId, commentId) {
        var _this = this;
        var url = this.url + "/dishes/" + dishId + "/comments/" + commentId;
        return this.HTTP.delete(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (dish) { return _this.log('comment deleted'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('delete comment : ', null)));
    };
    DishesService.prototype.editComment = function (dishId, commentId, rating, comment) {
        var _this = this;
        var url = this.url + "/dishes/" + dishId + "/comments/" + commentId;
        return this.HTTP.put(url, JSON.stringify({ 'rating': rating, 'comment': comment }), httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (dish) { return _this.log('comment edited'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('edit comment : ', null)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DishesService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            console.error(_this.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    DishesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]])
    ], DishesService);
    return DishesService;
}());



/***/ }),

/***/ "../../../../../src/app/facts/facts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facts/facts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n     <div class=\"col-xs-12 col-sm-12 col-lg-4\">\n         <h2>Facts &amp; Figures</h2>\n     </div>\n     <div class=\"col-xs-12 col-sm-12 col-lg-8\">\n         <div class=\"table-responsive\">\n         <table class=\"table table-striped table-hover\">\n             <tr>\n                 <td>&nbsp;</td>\n                 <th>2013</th>\n                 <th>2014</th>\n                 <th>2015</th>\n             </tr>\n             <tr>\n                 <th>Employees</th>\n                 <td>15</td>\n                 <td>30</td>\n                 <td>40</td>\n             </tr>\n             <tr>\n                 <th>Guests Served</th>\n                 <td>15000</td>\n                 <td>45000</td>\n                 <td>100,000</td>\n             </tr>\n             <tr>\n                 <th>Special Events</th>\n                 <td>3</td>\n                 <td>20</td>\n                 <td>45</td>\n             </tr>\n             <tr>\n                 <th>Annual Turnover</th>\n                 <td>$251,325</td>\n                 <td>$1,250,375</td>\n                 <td>~$3,000,000</td>\n             </tr>\n         </table>\n         </div>\n     </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/facts/facts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FactsComponent = (function () {
    function FactsComponent() {
    }
    FactsComponent.prototype.ngOnInit = function () {
    };
    FactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facts',
            template: __webpack_require__("../../../../../src/app/facts/facts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/facts/facts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FactsComponent);
    return FactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"w3-center w3-light-grey w3-padding-32\">\n  <p>Powered by <a href=\"https://github.com/MKhayralla\" title=\"git\" target=\"_blank\" class=\"w3-hover-text-green\">Mahmoud Khayralla</a></p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"w3-display-container w3-content w3-wide\" style=\"max-width:1600px;min-width:500px\" id=\"home\">\n  <img class=\"w3-image\" src=\"assets/img/1513210016207.png\" alt=\"Delicious Food\" width=\"1600\" height=\"800\">\n  <div class=\"w3-display-bottomleft w3-padding-large w3-opacity\">\n    <h1 class=\"w3-xxlarge\" style=\"color : #F8F8FF\t ;\">ConFusion</h1>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-about></app-about>\n<app-promotion></app-promotion>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/leader/leader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leader/leader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <ul>\n      <li *ngFor=\"let leader of leaders\">\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-12 col-lg-4\">\n            <h3>{{leader.name}}</h3>\n          </div>\n          <div class=\"col-xs-6 col-sm-12 col-lg-4\">\n            <h4><small>{{leader.designation}}</small></h4>\n          </div>\n          <div class=\"col-xs-12 col-sm-12\">\n            <p>{{leader.description}}</p>\n          </div>\n          <hr>\n          <br>\n        </div>\n      </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/leader/leader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaders_service__ = __webpack_require__("../../../../../src/app/leaders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderComponent = (function () {
    function LeaderComponent(ConfigService, LeadersService) {
        this.ConfigService = ConfigService;
        this.LeadersService = LeadersService;
    }
    LeaderComponent.prototype.ngOnInit = function () {
        this.fetchLeaders();
    };
    LeaderComponent.prototype.fetchLeaders = function () {
        var _this = this;
        this.LeadersService.getLeaders()
            .subscribe(function (leaders) {
            _this.leaders = leaders;
        });
    };
    LeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leader',
            template: __webpack_require__("../../../../../src/app/leader/leader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/leader/leader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__leaders_service__["a" /* LeadersService */]])
    ], LeaderComponent);
    return LeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/leaders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var LeadersService = (function () {
    function LeadersService(http, ConfigService) {
        this.http = http;
        this.ConfigService = ConfigService;
        this.message = '';
        this.url = this.ConfigService.url;
    }
    LeadersService.prototype.log = function (message) {
        this.message += message;
    };
    /*Get All Leaders : */
    LeadersService.prototype.getLeaders = function () {
        var _this = this;
        var url = this.url + "/leaders";
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (leaders) {
            _this.log('fetched leaders');
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getLeaders : ', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LeadersService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            console.error(_this.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    LeadersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */]])
    ], LeadersService);
    return LeadersService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6 offset-sm-3\">\n      <form class=\"form-horizontal\" style=\"padding-top : 50px ;\" >\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"username\" name=\"username\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" name=\"password\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <button name=\"button\" class=\"form-control btn btn-info\" (click)=\"login()\">Log In</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 offset-sm-3 w3-serif alert alert-danger\" *ngIf=\"wrong\">\n      Make Sure of the username and the password\n    </div>\n    <div class=\"col-xs-12 col-sm-9 offset-sm-3\">\n      <small class=\"w3-serif w3-wide\">don't have an account ?</small>\n      <a routerLink=\"/signup\" class=\"w3-serif\">sign up</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(UsersService, router) {
        this.UsersService = UsersService;
        this.router = router;
        this.wrong = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.UsersService.login(this.username, this.password)
            .subscribe(function (result) {
            if (result) {
                console.log('logged in successfully !');
                _this.router.navigate(['/']);
                document.location.reload();
            }
            else {
                _this.wrong = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding-top: 50px ;\n  padding-left: 20px ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\n    <li class=\"breadcrumb-item\">Menu</li>\n</ul>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <ul class=\"nav\">\n      <li *ngFor=\"let category of categories\">\n        <a (click)=\"setCategory(category)\" class=\"w3-button\">{{category|uppercase}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"row\">\n      <app-category [category]=\"current\"></app-category>\n  </div>\n</div>\n\n\n\n<hr>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dishes_service__ = __webpack_require__("../../../../../src/app/dishes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(dishService) {
        this.dishService = dishService;
        this.categories = ['appetizer', 'mains', 'dessert', 'drinks', 'specials', 'buffet', 'brunch'];
        this.current = '';
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    MenuComponent.prototype.getMenu = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) {
            _this.dishes = dishes;
        });
    };
    MenuComponent.prototype.setCategory = function (cat) {
        this.current = cat;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dishes_service__["a" /* DishesService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (sit on top) -->\n<div class=\"w3-top\">\n  <div class=\"w3-bar w3-white w3-padding w3-card\" style=\"letter-spacing:4px;\">\n    <a routerLink='/home' class=\"w3-bar-item w3-button\"><img\n       src=\"assets/img/logo.png\" class=\"img img-responsive\" alt=\"ConFusion\"\n       style=\"max-width : 25px ;\"></a>\n    <!-- Right-sided navbar links. Hide them on small screens -->\n    <div class=\"w3-right w3-hide-small\">\n      <a routerLink=\"/aboutus\" class=\"w3-bar-item w3-button\">About</a>\n      <a routerLink=\"/menu\" class=\"w3-bar-item w3-button\">Menu</a>\n      <a routerLink=\"/contact\" class=\"w3-bar-item w3-button\">Contact</a>\n      <a routerLink=\"/login\" (click)=\"set\" *ngIf=\"!loggedin\" class=\"w3-bar-item w3-button\">Log In</a>\n      <a *ngIf=\"loggedin\" (click)=\"logOut()\" class=\"w3-bar-item w3-button\">Log Out</a>\n    </div>\n    <div class=\"w3-right\">\n      <a class=\"w3-button w3-hide-medium w3-hide-large\" (click)=\"toggleMenu()\">|||</a>\n    </div>\n  </div>\n  <div class=\"w3-white w3-right nav w3-hide-medium w3-hide-large\">\n    <ul *ngIf=\"toggled\">\n      <li><a routerLink=\"/aboutus\" class=\"w3-button\">About</a></li>\n      <li><a routerLink=\"/menu\" class=\"w3-button\">Menu</a></li>\n      <li><a routerLink=\"/contact\" class=\"w3-button\">Contact</a></li>\n      <li *ngIf=\"!loggedin\"><a routerLink=\"/login\" (click)=\"set\" class=\"w3-button\">Log In</a></li>\n      <li *ngIf=\"loggedin\"><a (click)=\"logOut()\" class=\"w3-button\">Log Out</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(UsersService) {
        this.UsersService = UsersService;
        this.isNavbarCollapsed = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.set();
        this.toggled = false;
    };
    NavbarComponent.prototype.ngOnChanges = function () {
        this.set();
    };
    NavbarComponent.prototype.logOut = function () {
        this.UsersService.logOut();
        this.set();
        document.location.reload();
    };
    NavbarComponent.prototype.set = function () {
        this.loggedin = Object(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    NavbarComponent.prototype.toggleMenu = function () {
        this.toggled = !this.toggled;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/promotion/promotion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promotion/promotion.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- promotions Section -->\n  <div class=\"w3-row w3-padding-64\">\n    <div class=\"w3-col l6 w3-padding-large\">\n      <h1 class=\"w3-center\">Promotions</h1><br>\n      <ul class=\"nav\">\n        <li *ngFor=\"let dish of promotions\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-9\">\n                <h4>{{dish.name}}</h4>\n                  <span class=\"badge badge-danger\">{{dish.label}}</span>\n                  <span class=\"badge badge-info badge-pill\">{{dish.price/100}}$</span>\n                <p class=\"w3-text-grey\">{{dish.description}}</p>\n              </div>\n              <div class=\"col-xs-6 col-sm-3\">\n                <img src=\"{{dish.image}}\" class=\"img img-responsive\" alt=\"photo not found\">\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <h3 class=\"w3-center\"><a routerLink=\"/menu\">complete menu</a></h3><br>\n    </div>\n    <div class=\"w3-col l6 w3-padding-large\">\n      <img src=\"assets/img/main.png\" class=\"img img-responsive w3-round w3-image w3-opacity-min\"\n       alt=\"Menu\">\n    </div>\n  </div>\n\n\n  <hr>\n"

/***/ }),

/***/ "../../../../../src/app/promotion/promotion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promotions_service__ = __webpack_require__("../../../../../src/app/promotions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromotionComponent = (function () {
    function PromotionComponent(PromotionsService, ConfigService) {
        this.PromotionsService = PromotionsService;
        this.ConfigService = ConfigService;
    }
    PromotionComponent.prototype.ngOnInit = function () {
        this.initPromo();
    };
    PromotionComponent.prototype.initPromo = function () {
        var _this = this;
        this.PromotionsService.getPromotions()
            .subscribe(function (dishes) {
            dishes.forEach(_this.ConfigService.editPromoImg);
            _this.promotions = dishes;
        });
    };
    PromotionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-promotion',
            template: __webpack_require__("../../../../../src/app/promotion/promotion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/promotion/promotion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__promotions_service__["a" /* PromotionsService */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], PromotionComponent);
    return PromotionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/promotions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var PromotionsService = (function () {
    function PromotionsService(ConfigService, http) {
        this.ConfigService = ConfigService;
        this.http = http;
        this.message = '';
        this.url = this.ConfigService.url;
    }
    PromotionsService.prototype.log = function (message) {
        this.message += message;
    };
    PromotionsService.prototype.getPromotions = function () {
        var _this = this;
        var url = this.url;
        return this.http.get(url + "/promotions")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* tap */])(function (promotions) { return _this.log('fetched promotions'); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('Promotions : ', [])));
    };
    PromotionsService.prototype.getPromotion = function (id) {
        var _this = this;
        var url = this.url;
        return this.http.get(url + "/promotions/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* tap */])(function (promotion) {
            _this.log("fetched promotion with id " + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('Promotions : ', null)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PromotionsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            console.error(_this.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    PromotionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PromotionsService);
    return PromotionsService;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dish_dish_component__ = __webpack_require__("../../../../../src/app/dish/dish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'dish/:id', component: __WEBPACK_IMPORTED_MODULE_2__dish_dish_component__["a" /* DishComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_6__aboutus_aboutus_component__["a" /* AboutusComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6 offset-sm-3\">\n      <form #signupform=\"ngForm\" class=\"form-horizontal\" style=\"padding-top : 50px ;\" novalidate>\n        <div class=\"form-group\">\n          <input required type=\"text\" [(ngModel)]=\"username\" placeholder=\"username\" name=\"username\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input required type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" name=\"password\"\n          #pass=\"ngModel\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input required type=\"password\" [(ngModel)]=\"passwordConfirm\" placeholder=\"confirm password\"\n          name=\"passwordConfirm\"\n          #passConfirm=\"ngModel\" class=\"form-control\">\n        </div>\n        <div class=\"form-group alert alert-danger\" *ngIf=\"(password!==passwordConfirm)&&pass.touched&&pass.dirty\">\n          password doesn't match !\n        </div>\n        <div class=\"form-group\">\n          <button name=\"button\"\n          [disabled]=\"signupform.invalid||password!==passwordConfirm\"\n          class=\"form-control btn btn-info\" (click)=\"signup()\">Sign Up</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(UsersService, router) {
        this.UsersService = UsersService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.UsersService.signUp(this.username, this.password)
            .subscribe(function (result) {
            if (result) {
                console.log('signed up successfully !');
                alert('signed up successfully !');
                _this.router.navigate(['/login']);
                document.location.reload();
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__("../../../../../src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UsersService = (function () {
    function UsersService(http, ConfigService, router) {
        this.http = http;
        this.ConfigService = ConfigService;
        this.router = router;
        this.message = '';
        this.url = this.ConfigService.url;
    }
    UsersService.prototype.log = function (message) {
        this.message += message;
    };
    /*log in */
    UsersService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.url + "/users/login", JSON.stringify({ username: username, password: password }), httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (response) {
            console.log(JSON.stringify(response));
            // login successful if there's a jwt token in the response
            var token = response && response.token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                localStorage.setItem('currentUser', username);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('log in : ', null)));
    };
    /*Sign up*/
    UsersService.prototype.signUp = function (username, password) {
        var _this = this;
        return this.http.post(this.url + "/users/signup", JSON.stringify({ username: username, password: password }), httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (response) {
            // signup successful if there's a jwt token in the response
            var token = response && response.token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                localStorage.setItem('currentUser', username);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed signup
                return false;
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('sign up : ', null)));
    };
    /*Log Out*/
    UsersService.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UsersService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            console.error(_this.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map