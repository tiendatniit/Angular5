webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
// import the required animation functions from the angular animations module

var fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        // css styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/_animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__ = __webpack_require__("./src/app/_animations/fade-in.animation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_in_out_animation__ = __webpack_require__("./src/app/_animations/slide-in-out.animation.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "./src/app/_animations/slide-in-out.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export slideInOutAnimation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
// import the required animation functions from the angular animations module

var slideInOutAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8 blog-main\">\n            <h3 class=\"pb-3 mb-4 font-italic border-bottom\">\n                From the Firehose\n            </h3>\n\n            <div class=\"blog-post\">\n                <h2 class=\"blog-post-title\">Sample blog post</h2>\n                <p class=\"blog-post-meta\">January 1, 2014 by\n                    <a href=\"#\">Mark</a>\n                </p>\n\n                <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography,\n                    images, and code are all supported.</p>\n                <hr>\n                <p>Cum sociis natoque penatibus et magnis\n                    <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia\n                    quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit\n                    amet fermentum.</p>\n                <blockquote>\n                    <p>Curabitur blandit tempus porttitor.\n                        <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies\n                        vehicula ut id elit.</p>\n                </blockquote>\n                <p>Etiam porta\n                    <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia\n                    bibendum nulla sed consectetur.</p>\n                <h2>Heading</h2>\n                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus,\n                    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,\n                    vestibulum at eros.</p>\n                <h3>Sub-heading</h3>\n                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                <pre><code>Example code block</code></pre>\n                <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,\n                    tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\n                <h3>Sub-heading</h3>\n                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum\n                    nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus\n                    commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n                <ul>\n                    <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n                    <li>Donec id elit non mi porta gravida at eget metus.</li>\n                    <li>Nulla vitae elit libero, a pharetra augue.</li>\n                </ul>\n                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n                <ol>\n                    <li>Vestibulum id ligula porta felis euismod semper.</li>\n                    <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                    <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\n                </ol>\n                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\n            </div>\n            <!-- /.blog-post -->\n\n            <div class=\"blog-post\">\n                <h2 class=\"blog-post-title\">Another blog post</h2>\n                <p class=\"blog-post-meta\">December 23, 2013 by\n                    <a href=\"#\">Jacob</a>\n                </p>\n\n                <p>Cum sociis natoque penatibus et magnis\n                    <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia\n                    quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit\n                    amet fermentum.</p>\n                <blockquote>\n                    <p>Curabitur blandit tempus porttitor.\n                        <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies\n                        vehicula ut id elit.</p>\n                </blockquote>\n                <p>Etiam porta\n                    <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia\n                    bibendum nulla sed consectetur.</p>\n                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus,\n                    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,\n                    vestibulum at eros.</p>\n            </div>\n            <!-- /.blog-post -->\n\n            <div class=\"blog-post\">\n                <h2 class=\"blog-post-title\">New feature</h2>\n                <p class=\"blog-post-meta\">December 14, 2013 by\n                    <a href=\"#\">Chris</a>\n                </p>\n\n                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum\n                    nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus\n                    commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n                <ul>\n                    <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n                    <li>Donec id elit non mi porta gravida at eget metus.</li>\n                    <li>Nulla vitae elit libero, a pharetra augue.</li>\n                </ul>\n                <p>Etiam porta\n                    <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia\n                    bibendum nulla sed consectetur.</p>\n                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n            </div>\n            <!-- /.blog-post -->\n\n            <nav class=\"blog-pagination\">\n                <a class=\"btn btn-outline-primary\" href=\"#\">Older</a>\n                <a class=\"btn btn-outline-secondary disabled\" href=\"#\">Newer</a>\n            </nav>\n\n        </div>\n        <!-- /.blog-main -->\n\n        <aside class=\"col-md-4 blog-sidebar\">\n            <div class=\"p-3 mb-3 bg-light rounded\">\n                <h4 class=\"font-italic\">About</h4>\n                <p class=\"mb-0\">Etiam porta\n                    <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia\n                    bibendum nulla sed consectetur.</p>\n            </div>\n\n            <div class=\"p-3\">\n                <h4 class=\"font-italic\">Archives</h4>\n                <ol class=\"list-unstyled mb-0\">\n                    <li>\n                        <a href=\"#\">March 2014</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">February 2014</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">January 2014</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">December 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">November 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">October 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">September 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">August 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">July 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">June 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">May 2013</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">April 2013</a>\n                    </li>\n                </ol>\n            </div>\n\n            <div class=\"p-3\">\n                <h4 class=\"font-italic\">Elsewhere</h4>\n                <ol class=\"list-unstyled\">\n                    <li>\n                        <a href=\"#\">GitHub</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Twitter</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Facebook</a>\n                    </li>\n                </ol>\n            </div>\n        </aside>\n        <!-- /.blog-sidebar -->\n\n    </div>\n    <!-- /.row -->\n\n</main>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n \n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("./src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' },
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nar_bar_nar_bar_component__ = __webpack_require__("./src/app/nar-bar/nar-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__policy_policy_component__ = __webpack_require__("./src/app/policy/policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { FormsModule } from '@angular/forms';









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'policy', component: __WEBPACK_IMPORTED_MODULE_7__policy_policy_component__["a" /* PolicyComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nar_bar_nar_bar_component__["a" /* NarBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__policy_policy_component__["a" /* PolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__nar_bar_nar_bar_component__["a" /* NarBarComponent */], __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <img class=\"d-block mx-auto mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n    <h2>Checkout form</h2>\n    <p class=\"lead\">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4 order-md-2 mb-4\">\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n        <span class=\"text-muted\">Your cart</span>\n        <span class=\"badge badge-secondary badge-pill\">3</span>\n      </h4>\n      <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Product name</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$12</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Second product</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$8</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Third item</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$5</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between bg-light\">\n          <div class=\"text-success\">\n            <h6 class=\"my-0\">Promo code</h6>\n            <small>EXAMPLECODE</small>\n          </div>\n          <span class=\"text-success\">-$5</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between\">\n          <span>Total (USD)</span>\n          <strong>$20</strong>\n        </li>\n      </ul>\n\n      <form class=\"card p-2\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n          <div class=\"input-group-append\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-8 order-md-1\">\n      <h4 class=\"mb-3\">Billing address</h4>\n      <form class=\"needs-validation\" novalidate=\"\">\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Valid first name is required.\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Valid last name is required.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"username\">Username</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">@</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required=\"\">\n            <div class=\"invalid-feedback\" style=\"width: 100%;\">\n              Your username is required.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n          <div class=\"invalid-feedback\">\n            Please enter a valid email address for shipping updates.\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address\">Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required=\"\">\n          <div class=\"invalid-feedback\">\n            Please enter your shipping address.\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-5 mb-3\">\n            <label for=\"country\">Country</label>\n            <select class=\"custom-select d-block w-100\" id=\"country\" required=\"\">\n              <option value=\"\">Choose...</option>\n              <option>United States</option>\n            </select>\n            <div class=\"invalid-feedback\">\n              Please select a valid country.\n            </div>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"state\">State</label>\n            <select class=\"custom-select d-block w-100\" id=\"state\" required=\"\">\n              <option value=\"\">Choose...</option>\n              <option>California</option>\n            </select>\n            <div class=\"invalid-feedback\">\n              Please provide a valid state.\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"zip\">Zip</label>\n            <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Zip code required.\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n          <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n          <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n        </div>\n        <hr class=\"mb-4\">\n\n        <h4 class=\"mb-3\">Payment</h4>\n\n        <div class=\"d-block my-3\">\n          <div class=\"custom-control custom-radio\">\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\">\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n            <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-name\">Name on card</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\">\n            <small class=\"text-muted\">Full name as displayed on card</small>\n            <div class=\"invalid-feedback\">\n              Name on card is required\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-number\">Credit card number</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Credit card number is required\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">Expiration</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Expiration date required\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">CVV</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Security code required\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n      </form>\n    </div>\n  </div>\n\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2017-2018 Company Name</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("./src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import fade in animation

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.scss")],
            // make fade in animation available to this component
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n    <div class=\"sidebar-sticky\">\n      <ul class=\"nav flex-column\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\n              <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\n              <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n            </svg>\n            Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\">\n              <path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path>\n              <polyline points=\"13 2 13 9 20 9\"></polyline>\n            </svg>\n            Orders\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\">\n              <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n              <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n              <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n            </svg>\n            Products\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\">\n              <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path>\n              <circle cx=\"9\" cy=\"7\" r=\"4\"></circle>\n              <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path>\n              <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>\n            </svg>\n            Customers\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\">\n              <line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line>\n              <line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line>\n              <line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>\n            </svg>\n            Reports\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\">\n              <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n              <polyline points=\"2 17 12 22 22 17\"></polyline>\n              <polyline points=\"2 12 12 17 22 12\"></polyline>\n            </svg>\n            Integrations\n          </a>\n        </li>\n      </ul>\n\n      <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n        <span>Saved reports</span>\n        <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n            stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\">\n            <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n            <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>\n            <line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>\n          </svg>\n        </a>\n      </h6>\n      <ul class=\"nav flex-column mb-2\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n              <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n              <polyline points=\"14 2 14 8 20 8\"></polyline>\n              <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n              <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n              <polyline points=\"10 9 9 9 8 9\"></polyline>\n            </svg>\n            Current month\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n              <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n              <polyline points=\"14 2 14 8 20 8\"></polyline>\n              <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n              <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n              <polyline points=\"10 9 9 9 8 9\"></polyline>\n            </svg>\n            Last quarter\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n              <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n              <polyline points=\"14 2 14 8 20 8\"></polyline>\n              <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n              <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n              <polyline points=\"10 9 9 9 8 9\"></polyline>\n            </svg>\n            Social engagement\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n              stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n              <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n              <polyline points=\"14 2 14 8 20 8\"></polyline>\n              <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n              <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n              <polyline points=\"10 9 9 9 8 9\"></polyline>\n            </svg>\n            Year-end sale\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n    <div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n      <div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n        <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n      </div>\n      <div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n        <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n      <h1 class=\"h2\">Dashboard</h1>\n      <div class=\"btn-toolbar mb-2 mb-md-0\">\n        <div class=\"btn-group mr-2\">\n          <button class=\"btn btn-sm btn-outline-secondary\">Share</button>\n          <button class=\"btn btn-sm btn-outline-secondary\">Export</button>\n        </div>\n        <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n            stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\">\n            <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n            <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line>\n            <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line>\n            <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>\n          </svg>\n          This week\n        </button>\n      </div>\n    </div>\n\n    <canvas class=\"my-4 chartjs-render-monitor\" id=\"myChart\" width=\"1271\" height=\"536\" style=\"display: block; width: 1271px; height: 536px;\"></canvas>\n\n    <h2>Section title</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-sm\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Header</th>\n            <th>Header</th>\n            <th>Header</th>\n            <th>Header</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1,001</td>\n            <td>Lorem</td>\n            <td>ipsum</td>\n            <td>dolor</td>\n            <td>sit</td>\n          </tr>\n          <tr>\n            <td>1,002</td>\n            <td>amet</td>\n            <td>consectetur</td>\n            <td>adipiscing</td>\n            <td>elit</td>\n          </tr>\n          <tr>\n            <td>1,003</td>\n            <td>Integer</td>\n            <td>nec</td>\n            <td>odio</td>\n            <td>Praesent</td>\n          </tr>\n          <tr>\n            <td>1,003</td>\n            <td>libero</td>\n            <td>Sed</td>\n            <td>cursus</td>\n            <td>ante</td>\n          </tr>\n          <tr>\n            <td>1,004</td>\n            <td>dapibus</td>\n            <td>diam</td>\n            <td>Sed</td>\n            <td>nisi</td>\n          </tr>\n          <tr>\n            <td>1,005</td>\n            <td>Nulla</td>\n            <td>quis</td>\n            <td>sem</td>\n            <td>at</td>\n          </tr>\n          <tr>\n            <td>1,006</td>\n            <td>nibh</td>\n            <td>elementum</td>\n            <td>imperdiet</td>\n            <td>Duis</td>\n          </tr>\n          <tr>\n            <td>1,007</td>\n            <td>sagittis</td>\n            <td>ipsum</td>\n            <td>Praesent</td>\n            <td>mauris</td>\n          </tr>\n          <tr>\n            <td>1,008</td>\n            <td>Fusce</td>\n            <td>nec</td>\n            <td>tellus</td>\n            <td>sed</td>\n          </tr>\n          <tr>\n            <td>1,009</td>\n            <td>augue</td>\n            <td>semper</td>\n            <td>porta</td>\n            <td>Mauris</td>\n          </tr>\n          <tr>\n            <td>1,010</td>\n            <td>massa</td>\n            <td>Vestibulum</td>\n            <td>lacinia</td>\n            <td>arcu</td>\n          </tr>\n          <tr>\n            <td>1,011</td>\n            <td>eget</td>\n            <td>nulla</td>\n            <td>Class</td>\n            <td>aptent</td>\n          </tr>\n          <tr>\n            <td>1,012</td>\n            <td>taciti</td>\n            <td>sociosqu</td>\n            <td>ad</td>\n            <td>litora</td>\n          </tr>\n          <tr>\n            <td>1,013</td>\n            <td>torquent</td>\n            <td>per</td>\n            <td>conubia</td>\n            <td>nostra</td>\n          </tr>\n          <tr>\n            <td>1,014</td>\n            <td>per</td>\n            <td>inceptos</td>\n            <td>himenaeos</td>\n            <td>Curabitur</td>\n          </tr>\n          <tr>\n            <td>1,015</td>\n            <td>sodales</td>\n            <td>ligula</td>\n            <td>in</td>\n            <td>libero</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"footer__inner\">\r\n            <div class=\"footer__item\">\r\n                <form action=\"//getbootstrap.us13.list-manage.com/subscribe/post?u=e3428dd6b8fda73bc5ba8b6e6&amp;id=198881a019\" method=\"post\"\r\n                    id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" target=\"_blank\" novalidate=\"\">\r\n                    <div class=\"d-md-flex justify-content-between align-items-center\">\r\n                        <div class=\"form-group\">\r\n                            <h5 class=\"mb-1\">Get new themes in your inbox!</h5>\r\n                            <div class=\"form-text mt-0\">New themes or big discounts. Never spam.</div>\r\n                        </div>\r\n                        <div id=\"signup_footer\" class=\"d-flex align-items-start\">\r\n                            <div class=\"form-group w-100 mr-2\">\r\n                                <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\r\n                                    <input type=\"text\" name=\"b_e3428dd6b8fda73bc5ba8b6e6_198881a019\" tabindex=\"-1\" value=\"\">\r\n                                </div>\r\n                                <input id=\"mce-EMAIL\" class=\"footer__email-input form-control form-control--muted\" name=\"EMAIL\" type=\"email\" aria-describedby=\"footerEmail\"\r\n                                    placeholder=\"Email address\">\r\n                            </div>\r\n                            <input class=\"btn btn-brand\" type=\"submit\" value=\"Subscribe\" name=\"subscibe\" id=\"mc-embedded-subscribe\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"footer__item d-lg-flex justify-content-lg-between align-items-lg-center\">\r\n                <ul id=\"menu-footer\" class=\"nav sub-nav footer__sub-nav\">\r\n                    <li id=\"menu-item-1194\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-1194\">\r\n                        <a title=\"Help Center\" href=\"https://themes.zendesk.com/hc/en-us\">Help Center</a>\r\n                    </li>\r\n                    <li id=\"menu-item-119\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-119\">\r\n                        <a title=\"Terms of Service\" href=\"https://themes.getbootstrap.com/terms/\">Terms of Service</a>\r\n                    </li>\r\n                    <li id=\"menu-item-117\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-117\">\r\n                        <a title=\"Licenses\" href=\"https://themes.getbootstrap.com/licenses/\">Licenses</a>\r\n                    </li>\r\n                </ul>\r\n                <p class=\"hidden-sm-down d-none d-lg-block\">Trying to redownload a theme? Use our\r\n                    <a href=\"https://themes.getbootstrap.com/redownload/\">redownload page.</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  text-align: center;\n  bottom: 0;\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album bg-light\">\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        style=\"height: 225px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd3200d%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd3200d%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top wow fadeInUp\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd32011%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd32011%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd32013%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd32013%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd32015%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd32015%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd32018%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd32018%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd3201a%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd3201a%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd3201c%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd3201c%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd3201f%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd3201f%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 box-shadow\">\n                    <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                        src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627dd32021%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627dd32021%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                        data-holder-rendered=\"true\" style=\"height: 225px; width: 100%; display: block;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This\n                            content is a little bit longer.</p>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                            </div>\n                            <small class=\"text-muted\">9 mins</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("./src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")],
            // make fade in animation available to this component
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nar-bar/nar-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img [class.hide] = \"true\" [src]=\"'assets/img/bosch.jpg'\" class=\"navbar-brand logo-heigh\" /> </header> -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <button (click)=\"toggleCollapse()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" \n    data-target=\"#navbarsExample05\"\n    aria-controls=\"navbarsExample05\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div [class.show]=\"show\" class=\"collapse navbar-collapse\" id=\"navbarsExample05\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"/policy\" routerLinkActive=\"active\">Policy</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-md-0\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nar-bar/nar-bar.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 80px; }\n\n.starter-template {\n  padding: 3rem 1.5rem;\n  text-align: center; }\n\n.logo-heigh {\n  height: 100px; }\n"

/***/ }),

/***/ "./src/app/nar-bar/nar-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NarBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("./src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NarBarComponent = /** @class */ (function () {
    function NarBarComponent() {
        this.show = false;
    }
    NarBarComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    NarBarComponent.prototype.ngOnInit = function () {
    };
    NarBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nar-bar',
            template: __webpack_require__("./src/app/nar-bar/nar-bar.component.html"),
            styles: [__webpack_require__("./src/app/nar-bar/nar-bar.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' },
        }),
        __metadata("design:paramtypes", [])
    ], NarBarComponent);
    return NarBarComponent;
}());



/***/ }),

/***/ "./src/app/policy/policy.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"M-Stage M-Stage--smallSupergraphic M-Stage--lightBackground\">\n    <div class=\"M-Stage__wrapper\">\n      <div class=\"M-Stage__container\">\n        <div class=\"M-Stage__text container\">\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <h1 class=\"M-Stage__mainHeadline\">Privacy statement</h1>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2\">\n              <h3 class=\"M-Stage__bottomSubline\">Data protection policy of the Bosch Group</h3>\n            </div>\n          </div>\n          <div class=\"M-Stage__storyLine\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"M-Table M-Table--squash\" data-js-component=\"table\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 M-Table__container\">\n              <!-- <table><tr> </tr></table> <table><tr> <a href=\"/terms-of-use/provider/\" ><span class=\"A-Link__linkText\">Provider</span></a> <a href=\"/terms-of-use/legal-notice/\" ><span class=\"A-Link__linkText\">Legal notice</span></a> <b>Privacy statement</b> <a href=\"/terms-of-use/cookies/\" ><span class=\"A-Link__linkText\">Cookies</span></a> </tr></table> -->\n              <table class=\"M-Table__contentWrapper\">\n                <tbody class=\"M-Table__content\">\n                  <tr class=\"M-Table__row M-Table__headlineRow\">\n                    <th class=\"M-Table__cell M-Table__cell--head\">\n                      <a href=\"/terms-of-use/provider/\">\n                        <span class=\"A-Link__linkText\">Provider</span>\n                      </a>\n                    </th>\n                    <th class=\"M-Table__cell M-Table__cell--head\">\n                      <a href=\"/terms-of-use/legal-notice/\">\n                        <span class=\"A-Link__linkText\">Legal notice</span>\n                      </a>\n                    </th>\n                    <th class=\"M-Table__cell M-Table__cell--head\">\n                      <b>Privacy statement</b>\n                    </th>\n                    <th class=\"M-Table__cell M-Table__cell--head\">\n                      <a href=\"/terms-of-use/cookies/\">\n                        <span class=\"A-Link__linkText\">Cookies</span>\n                      </a>\n                    </th>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"M-Text-TextIntro col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2\">\n        <div class=\" M-Text-TextIntro__text\">\n          <div class=\"A-Text-RichText\">\n            <p>Bosch is pleased to have you visit our internet sites and welcomes your interest in the company and its products.\n              </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Bosch respects your privacy </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>The protection of your privacy in the processing of your personal data is an important concern to which we pay\n              special attention during our business processes. Any personal data collected by our websites during your visit\n              is processed confidentially and in strict accordance with legal provisions. Data protection and information\n              security are part of our corporate policy. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Collection and processing of personal data </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>No personal data is stored unless voluntarily disclosed by you for a specific purpose, e.g. in the context of\n              a registration, a survey, a contest, or in performance of a contract. </p>\n            <p>In addition, the following information is collected when visiting our website: IP addresses, the website from\n              which you visit us (referrer), pages viewed, files downloaded (downloads), videos viewed/audio tracks listened\n              to, individual links clicked, search words or search phrases (site search), duration of visit, browser used,\n              etc. If the visit is a result of online advertising such as banners, video ads, search engine advertising,\n              etc., we also record which banner, adword, etc. motivated the visit to Bosch websites. </p>\n            <p>The insights gained enable us to further optimize our websites and tailor them even better to our visitors’ needs.\n              </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Newsletter </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>Our website can be used to subscribe to newsletters. The data provided during the newsletter registration will\n              be used only for the purposes of sending out the newsletter, provided you have not consented to other use.\n              You can cancel the subscription at any time by using the unsubscribe option provided in the newsletter. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Use of cookies </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>Information on the cookies in use for this website can be found under\n              <a href=\"/terms-of-use/cookies/\">\n                <span class=\"A-Link__linkText\">Cookies</span>\n              </a>. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Use of the Webtrends web analytics tool </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>Bosch uses the Webtrends web analytics tool to measure and analyze website traffic. </p>\n            <p>This data is collected in anonymized form so that it can no longer be traced back to a user. In particular, this\n              is done by anonymizing the IP address. </p>\n            <p>Cookies are used for metrics to enable website usage to be analyzed. In particular, Bosch uses them to improve\n              data quality. The information generated about the use of websites is transmitted anonymized to the statistics\n              server (statse.webtrendslive.com) which is operated by Webtrends Inc, 555 SW Oak Street, Suite 300, Portland,\n              OR 97204, United States (“Webtrends”) in the United States of America. </p>\n            <p>Only authorized persons have access to this anonymized data. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Use of social plugins as part of social media </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>\n              <b>Facebook</b>\n              <br>Bosch websites use social plugins (“plugins”) from the social network Facebook.com, which is operated by Facebook\n              Inc., Palo Alto, CA, USA (“Facebook”). The plugins are identified with the Facebook logo or the suffix “Facebook”,\n              “like”, or “share”. </p>\n            <p>If you visit a page on our website that contains such plugins, they are initially disabled. The plugins are not\n              enabled until you click the button that is provided. By enabling the plugins, you establish the connection\n              to Facebook and declare your consent to the transmission of data to Facebook. If you are logged into Facebook,\n              Facebook can associate the visit with your Facebook account. If you press the respective button, the corresponding\n              information is transmitted directly to Facebook by your browser and stored there. </p>\n            <p>For information about the scope and purpose of data collection, the further processing and use of the data by\n              Facebook, and your rights and the settings you can configure to protect your privacy, please refer to the Facebook\n              Data Protection Notice. </p>\n            <p>If you do not want Facebook to collect data about you via our website, you have to log out of Facebook before\n              visiting our site. </p>\n            <p> </p>\n            <p>\n              <b>Google+</b>\n              <br>Bosch websites use social plugins (“plugins”) from the social network plus.google.com, which is operated by\n              Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (“Google”). The plugins are identified\n              with the Google+ logo or the suffix “Google+” or “Google plus”, or “+1”. </p>\n            <p>If you visit a page on our website that contains such plugins, they are initially disabled. The plugins are not\n              enabled until you click the button that is provided. By enabling the plugins, you establish the connection\n              to Google and declare your consent to the transmission of data to Google. If you are logged into Google+, Google\n              can associate the visit with your Google+ account. If you press the respective button, the corresponding information\n              is transmitted directly to Google by your browser and stored there. </p>\n            <p>For information about the scope and purpose of data collection, the further processing and use of the data by\n              Google+, and your rights and the settings you can configure to protect your privacy, please refer to the Google\n              Data Protection Notice. </p>\n            <p>If you do not want Google to collect data about you via our website, you have to log out of Google+ before visiting\n              our site. </p>\n            <p> </p>\n            <p>\n              <b>YouTube</b>\n              <br>Bosch websites use the YouTube video platform operated by YouTube LLC, 901 Cherry Ave. San Bruno, CA 94066\n              USA. YouTube is a platform that enables playback of audio and video files. </p>\n            <p>When you load a page on our website, the integrated YouTube player establishes a connection to YouTube in order\n              to ensure the technical transmission of the video or audio file. When the connection to YouTube is established,\n              data is transferred to YouTube. </p>\n            <p>For information about the scope and purpose of data collection, the further processing and use of the data by\n              YouTube, and your rights and the settings you can configure to protect your privacy, please refer to the YouTube\n              Data Protection Notice. </p>\n            <p> </p>\n            <p>\n              <b>Twitter</b>\n              <br>Bosch websites use social plugins (“plugins”) of the social network Twitter, which is operated by Twitter Inc.,\n              1355 Market Street, Suite 900, San Francisco, CA 94103, USA (“Twitter”). The plugins are identified with a\n              Twitter logo or the suffix “tweet”. </p>\n            <p>If you visit a page on our website that contains such plugins, they are initially disabled. The plugins are not\n              enabled until you click the button that is provided. By enabling the plugins, you establish the connection\n              to Twitter and give your consent to the transmission of data to Twitter. If you are logged into Twitter, Twitter\n              can associate the visit with your Twitter account. If you press the respective button, the corresponding information\n              is transmitted directly to Twitter by your browser and stored there. </p>\n            <p>For information about the scope and purpose of data collection, the further processing and use of the data by\n              Twitter, and your rights and the settings you can configure to protect your privacy, please refer to the Twitter\n              Data Protection Notice. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Use of external links </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>Bosch websites may contain links to third-party websites operated by providers that are not associated with us.\n              After you click the link, we no longer have any influence over the collection, storage, or processing of any\n              personal data transmitted by clicking the link (such as the IP address or URL of the page that contains the\n              link), as the behaviour of third parties is, by nature, beyond our control. Therefore, Bosch is not responsible\n              for the processing of personal data by third parties. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Use of personal data and purpose specification </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>Bosch, or a service provider engaged by Bosch, uses your personal data for the purpose of technical administration\n              of websites, customer administration, product surveys, or inquiries you submit to Bosch and only in the scope\n              necessary for this purpose or according to the description of processing purposes given at the corresponding\n              locations of our websites. Our employees and the service providers engaged by Bosch are obliged to maintain\n              confidentiality and to comply with the provisions of the German Federal Data Protection Act. </p>\n            <p>Moreover, all necessary technical and organizational measures are taken to comply with data protection rules.\n              </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Security </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>Bosch takes security precautions to ensure that the data we have under our control is protected against manipulation,\n              loss, destruction, and unauthorized access or disclosure. Our security measures are being continuously improved\n              in accordance with the state of technological developments. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Advertising </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>When you provide us with personal data, we use it to inform you about our products and services and, where applicable,\n              to include you in surveys about them, provided you have given us your express consent to use your personal\n              data for advertising purposes. If you have granted your consent for such use, but no longer wish to receive\n              advertising from Bosch, you can revoke your consent at any time. Your data is then deleted, or provided that\n              it is necessary for billing and accounting purposes, blocked accordingly. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Revoking consent </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>You can also revoke your consent to the future collection, processing, and use of your personal data. </p>\n            <p>Personal data will be deleted if the consent for its storage is revoked, if the data is no longer needed for\n              the purpose for which it was collected, or if storage of the data is inadmissible due to other legal reasons.\n              </p>\n            <p>Data which is necessary for billing and accounting purposes or which is subject to the legal obligation to preserve\n              is not affected. </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"M-Text-Monolith M-Text-Monolith--leftAligned col-md-10 col-xs-12 col-sm-12\" itemscope=\"\" itemtype=\"https://schema.org/NewsArticle\">\n        <p class=\"M-Text-Monolith__introtext\"> Contact </p>\n        <div class=\"M-Text-Monolith__description\">\n          <div class=\"A-Text-RichText\">\n            <p>To obtain more information or to submit suggestions or complaints regarding the processing of your personal data,\n              you can contact our chief data security officer. </p>\n            <p>If incorrect information has been stored despite our efforts to maintain correct and up-to-date data, we will\n              correct this upon your request. </p>\n            <p> </p>\n            <p>Mr. Matthias Goebel\n              <br>Chief Officer Corporate Data Security\n              <br>Information Security and Privacy (C/ISP)\n              <br>Robert Bosch GmbH\n              <br>Postfach 30 02 20\n              <br>70442 Stuttgart\n              <br>GERMANY </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/policy/policy.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/policy/policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyComponent = /** @class */ (function () {
    function PolicyComponent() {
    }
    PolicyComponent.prototype.ngOnInit = function () {
    };
    PolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-policy',
            template: __webpack_require__("./src/app/policy/policy.component.html"),
            styles: [__webpack_require__("./src/app/policy/policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PolicyComponent);
    return PolicyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map