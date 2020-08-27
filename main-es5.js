(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar *ngIf=\"isUser\">\r\n\r\n  <igx-avatar [initials]=\"initials\"\r\n              roundShape=\"true\"\r\n              size=\"small\"\r\n  >\r\n  </igx-avatar>\r\n\r\n  <button mat-button routerLink=\"/\">Home</button>\r\n\r\n  <button mat-button routerLink=\"/mygsp\">GSPs</button>\r\n\r\n  <button mat-button routerLink=\"/leaderboard\">LeaderBoard</button>\r\n\r\n  <button mat-button (click)=\"logout()\">Logout </button>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit/edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <div class=\"title\">\n    <h3>Update Your GSP for: </h3>\n    <igx-avatar\n      class=\"icon\"\n      [src]=\"avatar\"\n      size=\"large\"\n      bgColor=\"#ffffff00\"\n      roundShape=\"true\"\n    ></igx-avatar>\n  </div>\n\n  <form class=\"form\">\n\n    <mat-form-field>\n      <mat-label>Current GSP</mat-label>\n      <input matInput type=\"number\" [(ngModel)]=\"gsp\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n\n    <mat-slider class=\"mat-form-field\"\n                [max]=\"8000000\"\n                [min]=\"0\"\n                [(ngModel)]=\"gsp\"\n                [ngModelOptions]=\"{standalone: true}\"\n                thumbLabel\n                [displayWith]=\"formatLabel\">\n    </mat-slider>\n\n    <p class=\"main-text\">\n      Favorite\n    </p>\n      <mat-radio-group class=\"radio-group\" [(ngModel)]=\"favorite\" [ngModelOptions]=\"{standalone: true}\">\n        <mat-radio-button [value]=\"true\" [disabled]=\"hasMain\">\n          Yes\n        </mat-radio-button>\n        <mat-radio-button [value]=\"false\">\n          No\n        </mat-radio-button>\n      </mat-radio-group>\n\n\n  </form>\n\n\n  <button mat-button routerLink=\"/mygsp\" (click)=\"editCard()\" class=\"save\">Save</button>\n\n</mat-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fighter/fighter.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fighter/fighter.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isElite; else elseBlock2\">\n  <mat-card class=\"fighter-card\" matTooltip=\"{{username}}\">\n    <div>\n      <igx-avatar class=\"icon\"\n                  [src]=\"avatar\"\n                  roundShape=\"true\"\n                  size=\"medium\"\n                  bgColor=\"#ffffff00\"\n      ></igx-avatar>\n    </div>\n\n    <div class=\"star\">\n      <div *ngIf=\"isFavorite; else elseBlock\">\n        <igx-avatar class=\"star\"\n                    [src]=\"star\"\n                    roundShape=\"true\"\n                    size=\"small\"\n                    bgColor=\"#ffffff00\"\n        ></igx-avatar>\n      </div>\n      <ng-template #elseBlock>\n        <igx-avatar class=\"star\"\n                    icon=\"sentiment_satisfied\"\n                    roundShape=\"true\"\n                    size=\"small\"\n                    bgColor=\"#ffffff00\"\n        ></igx-avatar>\n      </ng-template>\n    </div>\n\n    <section>\n      <div class=\"user-gsp\">{{gsp | number}} GSP</div>\n      <div class=\"date\">{{date | date}}</div>\n      <div class=\"average-gsp\">{{avggsp | number}} AVG GSP</div>\n    </section>\n\n    <div class=\"menu\">\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Delete or edit\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"edit()\">\n          <mat-icon>edit</mat-icon>\n          <span>Edit</span>\n        </button>\n        <button mat-menu-item (click)=\"delete(fighter.createdDate)\">\n          <mat-icon>delete</mat-icon>\n          <span>Delete</span>\n        </button>\n      </mat-menu>\n    </div>\n\n\n  </mat-card>\n</div>\n\n\n\n\n\n<ng-template #elseBlock2>\n  <mat-card class=\"fighter-card2\" matTooltip=\"{{username}}\">\n    <div>\n      <igx-avatar class=\"icon\"\n                  [src]=\"avatar\"\n                  roundShape=\"true\"\n                  size=\"medium\"\n                  bgColor=\"#ffffff00\"\n      ></igx-avatar>\n    </div>\n\n    <div class=\"star\">\n      <div *ngIf=\"isFavorite; else elseBlock\">\n        <igx-avatar class=\"star\"\n                    [src]=\"star\"\n                    roundShape=\"true\"\n                    size=\"small\"\n                    bgColor=\"#ffffff00\"\n        ></igx-avatar>\n      </div>\n      <ng-template #elseBlock>\n        <igx-avatar class=\"star\"\n                    icon=\"sentiment_satisfied\"\n                    roundShape=\"true\"\n                    size=\"small\"\n                    bgColor=\"#ffffff00\"\n        ></igx-avatar>\n      </ng-template>\n    </div>\n\n    <section>\n      <div class=\"user-gsp\">{{gsp | number}} GSP</div>\n      <div class=\"date\">{{date | date}}</div>\n      <div class=\"average-gsp\">{{avggsp | number}} AVG GSP</div>\n    </section>\n\n    <div class=\"menu\">\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Delete or edit\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"edit()\">\n          <mat-icon>edit</mat-icon>\n          <span>Edit</span>\n        </button>\n        <button mat-menu-item (click)=\"delete(fighter.createdDate)\">\n          <mat-icon>delete</mat-icon>\n          <span>Delete</span>\n        </button>\n      </mat-menu>\n    </div>\n\n\n  </mat-card>\n</ng-template>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <h3 class=\"text\">Submit Your GSP!</h3>\r\n  <img\r\n    class=\"icon\"\r\n    [src]=\"avatar\"\r\n    size=\"medium\"\r\n    bgColor=\"#ffffff00\"\r\n    height=\"100px\"\r\n    width=\"300px\"\r\n  >\r\n  <form class=\"form\">\r\n    <mat-form-field appearance=\"standard\" class=\"width\">\r\n      <mat-label>Select character</mat-label>\r\n      <mat-select [(ngModel)]=\"fighter\" [ngModelOptions]=\"{standalone: true}\">\r\n        <mat-option *ngFor=\"let fighter of characters\" value=\"{{fighter}}\">{{fighter}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"standard\">\r\n      <mat-label>GSP</mat-label>\r\n      <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"GSP\" [ngModelOptions]=\"{standalone: true}\">\r\n    </mat-form-field>\r\n\r\n\r\n  </form>\r\n  <button mat-flat-button color=\"accent\" class=\"button\" (click)=\"submit()\">Submit</button>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lbcard/lbcard.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lbcard/lbcard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isElite; else elseBlock2\">\n\n  <mat-card class=\"rank-card\">\n\n    <div>\n      <p class=\"ranking\">{{LBCard.rank}}</p>\n    </div>\n\n    <div>\n      <div *ngIf=\"isUser(); else elseBlock\">\n        <igx-avatar\n          [initials]=\"initials\"\n          roundShape=\"true\"\n          size=\"medium\"\n          bgColor=\"grey\"\n        >\n        </igx-avatar>\n      </div>\n\n      <ng-template #elseBlock>\n        <igx-avatar [initials]=\"initials\"\n                    roundShape=\"true\"\n                    size=\"medium\"\n                    bgColor=\"{{color}}\"\n        >\n        </igx-avatar>\n      </ng-template>\n    </div>\n\n    <section class=\"avggsp\">\n      <p class=\"title\">Average GSP:</p>\n      <p class=\"avggsp-number\">{{avggsp | number}} GSP</p>\n    </section>\n\n    <section class=\"topgsp\">\n      <p class=\"title\">Top GSP:</p>\n      <p class=\"topgsp-number\">{{topgsp | number}} GSP</p>\n    </section>\n\n    <section class=\"main\">\n      <p class=\"title\">Main:</p>\n      <igx-avatar class=\"icon\"\n                  [src]=\"avatar\"\n                  size=\"medium\"\n                  bgColor=\"#ffffff00\"\n      ></igx-avatar>\n    </section>\n\n  </mat-card>\n</div>\n\n<ng-template #elseBlock2>\n  <mat-card class=\"rank-card2\">\n\n    <div>\n      <p class=\"ranking\">{{LBCard.rank}}</p>\n    </div>\n\n    <div>\n      <div *ngIf=\"isUser(); else elseBlock\">\n        <igx-avatar\n          [initials]=\"initials\"\n          roundShape=\"true\"\n          size=\"medium\"\n          bgColor=\"grey\"\n        >\n        </igx-avatar>\n      </div>\n\n      <ng-template #elseBlock>\n        <igx-avatar [initials]=\"initials\"\n                    roundShape=\"true\"\n                    size=\"medium\"\n                    bgColor=\"{{color}}\"\n        >\n        </igx-avatar>\n      </ng-template>\n    </div>\n\n    <section class=\"avggsp\">\n      <p class=\"title\">Average GSP:</p>\n      <p class=\"avggsp-number\">{{avggsp | number}} GSP</p>\n    </section>\n\n    <section class=\"topgsp\">\n      <p class=\"title\">Top GSP:</p>\n      <p class=\"topgsp-number\">{{topgsp | number}} GSP</p>\n    </section>\n\n    <section class=\"main\">\n      <p class=\"title\">Main:</p>\n      <igx-avatar class=\"icon\"\n                  [src]=\"avatar\"\n                  size=\"medium\"\n                  bgColor=\"#ffffff00\"\n      ></igx-avatar>\n    </section>\n\n\n\n  </mat-card>\n</ng-template>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leaderboard/leaderboard.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leaderboard/leaderboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lbcard-container\">\n\n  <app-lbcard class=\"card-item\" *ngFor=\"let LBCard of LBCards\" [LBCard]=\"LBCard\">\n  </app-lbcard>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"login-card\">\r\n  <mat-card >\r\n    <mat-card-header>\r\n\r\n      <mat-card-title>Login</mat-card-title>\r\n\r\n    </mat-card-header>\r\n\r\n    <mat-card-content>\r\n\r\n\r\n\r\n\r\n      <p>\r\n        <mat-form-field appearance=\"legacy\">\r\n          <mat-label>Username</mat-label>\r\n          <input type=\"text\" matInput [(ngModel)]='username'  placeholder=\"or email\" >\r\n\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>Password</mat-label>\r\n          <input matInput type=\"password\" [(ngModel)]='password' placeholder=\"\" >\r\n\r\n\r\n        </mat-form-field>\r\n      </p>\r\n\r\n\r\n\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button [disabled]=\"loading\" (click)=\"login()\">Login</button>\r\n      <button mat-button routerLink=\"/register\">Register</button>\r\n\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-gsp/my-gsp.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-gsp/my-gsp.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"fighter-container\">\n    <app-fighter class=\"card-item\" *ngFor=\"let fighter of fighters\" [fighter]=\"fighter\" (deleteEvent)=\"deleteFighter($event)\"></app-fighter>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"registration-card\">\n    <mat-card-header>\n\n      <mat-card-title>Registration</mat-card-title>\n\n    </mat-card-header>\n\n    <mat-card-content>\n\n\n\n\n\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\n          <mat-hint *ngIf=\"submitted && f.firstName.errors\" >\n            <mat-hint *ngIf=\"f.firstName.errors.required\">First Name is required</mat-hint>\n            <mat-hint *ngIf=\"f.firstName.errors.pattern\">First Name is using illegal characters.</mat-hint>\n          </mat-hint>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\n          <mat-hint *ngIf=\"submitted && f.lastName.errors\" >\n            <mat-hint *ngIf=\"f.lastName.errors.required\">Last Name is required</mat-hint>\n            <mat-hint *ngIf=\"f.lastName.errors.pattern\">Last Name is using illegal characters.</mat-hint>\n          </mat-hint>\n        </mat-form-field>\n      </div>\n\n\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n          <mat-hint *ngIf=\"submitted && f.email.errors\" >\n            <mat-hint *ngIf=\"f.email.errors.required\">Email is required</mat-hint>\n            <mat-hint *ngIf=\"f.email.errors.pattern\">Email is typed with errors.</mat-hint>\n          </mat-hint>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-group\">\n\n        <mat-form-field>\n          <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n          <mat-hint *ngIf=\"submitted && f.username.errors\" >\n            <mat-hint *ngIf=\"f.username.errors.required\">Username is required</mat-hint>\n            <mat-hint *ngIf=\"f.username.errors.pattern\">Username is using illegal characters.</mat-hint>\n          </mat-hint>\n        </mat-form-field>\n\n      </div>\n\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n          <mat-hint *ngIf=\"submitted && f.password.errors\" >\n            <mat-hint *ngIf=\"f.password.errors.required\">password is required</mat-hint>\n            <mat-hint *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters.</mat-hint>\n          </mat-hint>\n        </mat-form-field>\n      </div>\n\n\n    </mat-card-content>\n    <mat-card-actions>\n\n      <button mat-button [disabled]=\"loading\">Register</button>\n      <!--      <img class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />-->\n      <button mat-button  routerLink=\"/login\" >Cancel</button>\n      <mat-spinner  *ngIf=\"loading\" [diameter]=\"30\"></mat-spinner>\n\n    </mat-card-actions>\n  </mat-card>\n\n</form>\n"

/***/ }),

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

/***/ "./src/app/_models/fighter.ts":
/*!************************************!*\
  !*** ./src/app/_models/fighter.ts ***!
  \************************************/
/*! exports provided: Fighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fighter", function() { return Fighter; });
var Fighter = /** @class */ (function () {
    function Fighter() {
    }
    return Fighter;
}());



/***/ }),

/***/ "./src/app/_models/fightericon.ts":
/*!****************************************!*\
  !*** ./src/app/_models/fightericon.ts ***!
  \****************************************/
/*! exports provided: FighterIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterIcon", function() { return FighterIcon; });
var FighterIcon;
(function (FighterIcon) {
    FighterIcon["Kirby"] = "https://www.elitegsp.com/flairs/6-min.png";
    FighterIcon["Fox"] = "https://www.elitegsp.com/flairs/7-min.png";
    FighterIcon["Cloud"] = "https://www.elitegsp.com/flairs/61-min.png";
    FighterIcon["Pikachu"] = "https://www.elitegsp.com/flairs/8-min.png";
    FighterIcon["Mario"] = "https://www.elitegsp.com/flairs/1-min.png";
    FighterIcon["Luigi"] = "https://www.elitegsp.com/flairs/9-min.png";
    FighterIcon["Marth"] = "https://www.elitegsp.com/flairs/21-min.png";
    FighterIcon["Roy"] = "https://www.elitegsp.com/flairs/25-min.png";
    FighterIcon["Falco"] = "https://www.elitegsp.com/flairs/20-min.png";
    FighterIcon["MKnight"] = "https://www.elitegsp.com/flairs/27-min.png";
    FighterIcon["Peach"] = "https://www.elitegsp.com/flairs/13-min.png";
    FighterIcon["Pichu"] = "https://www.elitegsp.com/flairs/19-min.png";
    FighterIcon["CFalcon"] = "https://www.elitegsp.com/flairs/11-min.png";
    FighterIcon["Ganon"] = "https://www.elitegsp.com/flairs/23-min.png";
    FighterIcon["Yoshi"] = "https://www.elitegsp.com/flairs/5-min.png";
    FighterIcon["star"] = "https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png";
    FighterIcon["None"] = "https://img.icons8.com/ios/50/000000/not-applicable.png";
    FighterIcon["cfal"] = "https://giantbomb1.cbsistatic.com/uploads/original/13/138431/2579812-i%20love%20f-zero.png";
})(FighterIcon || (FighterIcon = {}));


/***/ }),

/***/ "./src/app/_models/lbcard.ts":
/*!***********************************!*\
  !*** ./src/app/_models/lbcard.ts ***!
  \***********************************/
/*! exports provided: LBCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LBCard", function() { return LBCard; });
var LBCard = /** @class */ (function () {
    function LBCard() {
    }
    return LBCard;
}());



/***/ }),

/***/ "./src/app/_services/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.auth.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    //Added HttpClient
    function AuthService(http) {
        this.http = http;
        //This is used to keep track of the deleted notification number, corresponds to the user
        this.increment = 0;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        //this is used by app.component.ts
        // currentUser is turned into an Observable that will allow other parts of the app to subscribe and get notified when currentUserSubject changes.
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (username, password) {
        // Changed to network based authentication strategy.
        var _this = this;
        // Read more here: https://angular.io/guide/http
        return this.http.post("http://localhost:3030/user/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            _this.increment = 0;
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // notify all subscribers that user has logged out.
        this.currentUserSubject.next(null);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/fighter.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/fighter.service.ts ***!
  \**********************************************/
/*! exports provided: FighterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterService", function() { return FighterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ "./src/app/_services/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FighterService = /** @class */ (function () {
    function FighterService(notif, http) {
        this.notif = notif;
        this.http = http;
    }
    FighterService.prototype.submit = function (record, username) {
        return this.http.post("http://localhost:3030/fighter/submit/" + username, record);
    };
    FighterService.prototype.edit = function (values, username) {
        return this.http.post("http://localhost:3030/fighter/edit/" + username, values);
    };
    FighterService.prototype.delete = function (date, username) {
        return this.http.delete("http://localhost:3030/fighter/" + date + "/" + username);
    };
    FighterService.prototype.getAll = function () {
        return this.http.get("http://localhost:3030/fighter/get");
    };
    FighterService.ctorParameters = function () { return [
        { type: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    FighterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FighterService);
    return FighterService;
}());



/***/ }),

/***/ "./src/app/_services/lbcard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/lbcard.service.ts ***!
  \*********************************************/
/*! exports provided: LBCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LBCardService", function() { return LBCardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ "./src/app/_services/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LBCardService = /** @class */ (function () {
    function LBCardService(notif, http) {
        this.notif = notif;
        this.http = http;
    }
    LBCardService.prototype.getAll = function () {
        return this.http.get("http://localhost:3030/lbcard/getlbcards");
    };
    LBCardService.ctorParameters = function () { return [
        { type: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    LBCardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LBCardService);
    return LBCardService;
}());



/***/ }),

/***/ "./src/app/_services/notification.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/notification.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar, zone) {
        this.snackBar = snackBar;
        this.zone = zone;
    }
    NotificationService.prototype.showNotif = function (message, action, duration) {
        if (action === void 0) { action = 'error'; }
        if (duration === void 0) { duration = 4000; }
        // consider not using zone. However, the snackbar is know not to work outside it.
        // zone is a built in service that allows running async tasks that don't require UI updates.
        // this.zone.run(() => {
        this.snackBar.open(message, action, { duration: duration }).onAction().subscribe(function () {
            console.log('Notififcation action performed');
        });
    };
    NotificationService.prototype.notImplementedWarning = function (message, duration) {
        if (duration === void 0) { duration = 4000; }
        // @ts-ignore
        this.snackBar.open("\"" + message + "\" is not implemented", 'error', { duration: duration }).onAction().subscribe(function () {
        });
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ "./src/app/_services/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(notif, http) {
        this.notif = notif;
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post("http://localhost:3030/user/register", user);
    };
    UserService.prototype.getAll = function () {
        return this.http.get("http://localhost:3030/user/allusers");
    };
    UserService.ctorParameters = function () { return [
        { type: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/auth-guard.service */ "./src/app/_services/auth-guard.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _my_gsp_my_gsp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-gsp/my-gsp.component */ "./src/app/my-gsp/my-gsp.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _fighter_fighter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fighter/fighter.component */ "./src/app/fighter/fighter.component.ts");
/* harmony import */ var _lbcard_lbcard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lbcard/lbcard.component */ "./src/app/lbcard/lbcard.component.ts");












var routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }, { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'mygsp', component: _my_gsp_my_gsp_component__WEBPACK_IMPORTED_MODULE_7__["MyGSPComponent"] }, { path: 'leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LeaderboardComponent"] },
    { path: 'edit/:date/:fighter/:gsp/:favorite', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"] }, { path: 'fighter', component: _fighter_fighter_component__WEBPACK_IMPORTED_MODULE_10__["FighterComponent"] },
    { path: 'lbcard', component: _lbcard_lbcard_component__WEBPACK_IMPORTED_MODULE_11__["LBCardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.title = 'HW5Angular';
        this.authService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    Object.defineProperty(AppComponent.prototype, "isUser", {
        get: function () {
            return this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "initials", {
        get: function () {
            return this.currentUser.firstName[0] + this.currentUser.lastName[0];
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fighter_fighter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fighter/fighter.component */ "./src/app/fighter/fighter.component.ts");
/* harmony import */ var _my_gsp_my_gsp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-gsp/my-gsp.component */ "./src/app/my-gsp/my-gsp.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _lbcard_lbcard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lbcard/lbcard.component */ "./src/app/lbcard/lbcard.component.ts");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "./src/app/interceptors/jwt.interceptor.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _fighter_fighter_component__WEBPACK_IMPORTED_MODULE_12__["FighterComponent"],
                _my_gsp_my_gsp_component__WEBPACK_IMPORTED_MODULE_13__["MyGSPComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_14__["LeaderboardComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"],
                _lbcard_lbcard_component__WEBPACK_IMPORTED_MODULE_17__["LBCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_16__["IgxAvatarModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 800px;\r\n}\r\n\r\n.title {\r\n  display: grid;\r\n  grid-template-columns: 600px 20px;\r\n  margin-left: 100px;\r\n}\r\n\r\n.icon {\r\n  margin-top: 20px;\r\n  margin-left: -100px\r\n}\r\n\r\n.radio-group {\r\n  margin-left: 280px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 500px;\r\n  margin-left: 125px;\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\ninput[type=number]::-webkit-outer-spin-button,\r\ninput[type=number]::-webkit-inner-spin-button {\r\n  opacity: 1;\r\n}\r\n\r\n.save {\r\n  margin-left: 300px;\r\n  padding-top: 50px\r\n}\r\n\r\n.checkbox {\r\n  margin-top: -50px\r\n}\r\n\r\n.main-text {\r\n  font-size: 25px;\r\n  margin-left: 290px\r\n}\r\n\r\n.mat-radio-button {\r\n  padding-right: 10px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwMHB4XHJcbn1cclxuXHJcbi5yYWRpby1ncm91cCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjVweDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zYXZlIHtcclxuICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHhcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICBtYXJnaW4tdG9wOiAtNTBweFxyXG59XHJcblxyXG4ubWFpbi10ZXh0IHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI5MHB4XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _models_fightericon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/fightericon */ "./src/app/_models/fightericon.ts");
/* harmony import */ var _services_fighter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/fighter.service */ "./src/app/_services/fighter.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");








var EditComponent = /** @class */ (function () {
    function EditComponent(route, notifService, auth, fighterService, userSerivce) {
        this.route = route;
        this.notifService = notifService;
        this.auth = auth;
        this.fighterService = fighterService;
        this.userSerivce = userSerivce;
        this.gsp = 0;
        this.fighter = '';
        this.fighters = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.favorite = params['favorite'].toString() === 'true';
            _this.date = params['date'];
            _this.gsp = params['gsp'];
            _this.fighter = params['fighter'];
        });
        this.hasMain = this.auth.currentUserValue.hasMain;
        this.avatar = this.getIcon();
        console.log(this.auth.currentUserValue.hasMain);
        console.log('Has Main is: ' + this.hasMain);
        console.log('Favorite is: ' + this.favorite);
    };
    EditComponent.prototype.editCard = function () {
        var _this = this;
        this.fighterService.edit({ date: this.date,
            gsp: this.gsp, fighter: this.fighter, favorite: this.favorite, hasMain: this.hasMain }, this.auth.currentUserValue.username)
            .subscribe(function () {
            console.log(_this.auth.currentUserValue.username);
            _this.notifService.showNotif('Update Saved', 'confirmation');
        }, function (error) {
            _this.notifService.showNotif(error);
        });
    };
    EditComponent.prototype.getIcon = function () {
        if (this.fighter == 'Kirby') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Kirby;
        }
        else if (this.fighter == 'Fox') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Fox;
        }
        else if (this.fighter == 'Marth') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Marth;
        }
        else if (this.fighter == 'Falco') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Falco;
        }
        else if (this.fighter == 'Mario') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Mario;
        }
        else if (this.fighter == 'Pikachu') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Pikachu;
        }
        else if (this.fighter == 'Captain Falcon') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].CFalcon;
        }
        else if (this.fighter == 'Ganondorf') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Ganon;
        }
        else if (this.fighter == 'Cloud') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Cloud;
        }
        else if (this.fighter == 'Luigi') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Luigi;
        }
        else if (this.fighter == 'Meta Knight') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].MKnight;
        }
        else if (this.fighter == 'Peach') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Peach;
        }
        else if (this.fighter == 'Roy') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Roy;
        }
        else if (this.fighter == 'Yoshi') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Yoshi;
        }
        else if (this.fighter == 'Pichu') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].Pichu;
        }
        else {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_5__["FighterIcon"].None;
        }
    };
    EditComponent.prototype.formatLabel = function (value) {
        if (value >= 1000000) {
            return (Math.round(value / 100000) / 10) + 'm';
        }
        return value;
    };
    EditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_fighter_service__WEBPACK_IMPORTED_MODULE_6__["FighterService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_fighter_service__WEBPACK_IMPORTED_MODULE_6__["FighterService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/fighter/fighter.component.css":
/*!***********************************************!*\
  !*** ./src/app/fighter/fighter.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n  margin-top: 10px;\r\n  grid-area: icon;\r\n}\r\n\r\n.date {\r\n  grid-area: date;\r\n  font-style: oblique;\r\n\r\n}\r\n\r\n.user-gsp {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  grid-area: gsp;\r\n}\r\n\r\n.average-gsp {\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n  color: grey;\r\n  grid-area: avggsp;\r\n}\r\n\r\n.star {\r\n  grid-area: star;\r\n  margin-top: 25px;\r\n  margin-left: 25px;\r\n}\r\n\r\n.menu{\r\n  grid-area: menu;\r\n  justify-self: end;\r\n  align-self: start;\r\n}\r\n\r\n.fighter-card {\r\n  display: grid;\r\n  width: 350px;\r\n  grid-template-columns: 80px 200px;\r\n  grid-template-rows: 30px;\r\n  grid-template-areas:\r\n    \". . menu\"\r\n    \". gsp .\"\r\n    \"icon date .\"\r\n    \"icon . .\"\r\n    \". star .\";\r\n  background-color: gold;\r\n}\r\n\r\n.fighter-card2 {\r\n  display: grid;\r\n  width: 350px;\r\n  grid-template-columns: 80px 200px;\r\n  grid-template-rows: 30px;\r\n  grid-template-areas:\r\n    \". . menu\"\r\n    \". gsp .\"\r\n    \"icon date .\"\r\n    \"icon . .\"\r\n    \". star .\";\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlnaHRlci9maWdodGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4Qjs7Ozs7Y0FLWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4Qjs7Ozs7Y0FLWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmlnaHRlci9maWdodGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBncmlkLWFyZWE6IGljb247XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBncmlkLWFyZWE6IGRhdGU7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuXHJcbn1cclxuXHJcbi51c2VyLWdzcCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGdyaWQtYXJlYTogZ3NwO1xyXG59XHJcblxyXG4uYXZlcmFnZS1nc3Age1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBjb2xvcjogZ3JleTtcclxuICBncmlkLWFyZWE6IGF2Z2dzcDtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gIGdyaWQtYXJlYTogc3RhcjtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ubWVudXtcclxuICBncmlkLWFyZWE6IG1lbnU7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcblxyXG4uZmlnaHRlci1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMjAwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcIi4gLiBtZW51XCJcclxuICAgIFwiLiBnc3AgLlwiXHJcbiAgICBcImljb24gZGF0ZSAuXCJcclxuICAgIFwiaWNvbiAuIC5cIlxyXG4gICAgXCIuIHN0YXIgLlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbn1cclxuXHJcbi5maWdodGVyLWNhcmQyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMjAwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcIi4gLiBtZW51XCJcclxuICAgIFwiLiBnc3AgLlwiXHJcbiAgICBcImljb24gZGF0ZSAuXCJcclxuICAgIFwiaWNvbiAuIC5cIlxyXG4gICAgXCIuIHN0YXIgLlwiO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/fighter/fighter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fighter/fighter.component.ts ***!
  \**********************************************/
/*! exports provided: FighterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterComponent", function() { return FighterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_fightericon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/fightericon */ "./src/app/_models/fightericon.ts");
/* harmony import */ var _models_fighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/fighter */ "./src/app/_models/fighter.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");








var FighterComponent = /** @class */ (function () {
    function FighterComponent(router, auth, notifService, userSerivce) {
        this.router = router;
        this.auth = auth;
        this.notifService = notifService;
        this.userSerivce = userSerivce;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = '';
        this.currentUser = '';
        this.star = _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].star;
        this.users = [];
    }
    FighterComponent.prototype.delete = function (date) {
        console.log(date);
        this.deleteEvent.emit(date);
    };
    FighterComponent.prototype.edit = function () {
        if (this.fighter.createdBy.toString() === this.auth.currentUserValue._id) {
            this.router.navigate(['/edit', this.fighter.createdDate, this.fighter.name, this.fighter.gsp,
                this.fighter.isFavorite]);
        }
        else {
            this.notifService.showNotif('Operation Not Permitted For: ' + this.currentUser);
        }
    };
    FighterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSerivce.getAll().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.fighter.createdBy.toString() === _this.users[i]._id) {
                    _this.username = _this.users[i].username;
                }
                if (_this.auth.currentUserValue._id === _this.users[i]._id) {
                    _this.currentUser = _this.users[i].username;
                }
            }
        });
        this.gsp = this.fighter.gsp;
        this.avggsp = this.fighter.avggsp;
        this.date = this.fighter.createdDate.toString();
        this.username = this.fighter.createdBy.username;
        this.avatar = this.getIcon();
        this.isElite = this.fighter.isElite;
        this.isFavorite = this.fighter.isFavorite;
        console.log(this.fighter.createdBy);
    };
    FighterComponent.prototype.getIcon = function () {
        if (this.fighter.name == 'Kirby') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Kirby;
        }
        else if (this.fighter.name == 'Fox') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Fox;
        }
        else if (this.fighter.name == 'Marth') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Marth;
        }
        else if (this.fighter.name == 'Falco') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Falco;
        }
        else if (this.fighter.name == 'Mario') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Mario;
        }
        else if (this.fighter.name == 'Pikachu') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Pikachu;
        }
        else if (this.fighter.name == 'Captain Falcon') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].CFalcon;
        }
        else if (this.fighter.name == 'Ganondorf') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Ganon;
        }
        else if (this.fighter.name == 'Cloud') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Cloud;
        }
        else if (this.fighter.name == 'Luigi') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Luigi;
        }
        else if (this.fighter.name == 'Meta Knight') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].MKnight;
        }
        else if (this.fighter.name == 'Peach') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Peach;
        }
        else if (this.fighter.name == 'Roy') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Roy;
        }
        else if (this.fighter.name == 'Yoshi') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Yoshi;
        }
        else if (this.fighter.name == 'Pichu') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].Pichu;
        }
        else {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_2__["FighterIcon"].None;
        }
    };
    FighterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_fighter__WEBPACK_IMPORTED_MODULE_3__["Fighter"])
    ], FighterComponent.prototype, "fighter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FighterComponent.prototype, "deleteEvent", void 0);
    FighterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fighter',
            template: __webpack_require__(/*! raw-loader!./fighter.component.html */ "./node_modules/raw-loader/index.js!./src/app/fighter/fighter.component.html"),
            styles: [__webpack_require__(/*! ./fighter.component.css */ "./src/app/fighter/fighter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], FighterComponent);
    return FighterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.course-list-container{\r\n  border-radius: 2px;\r\n}\r\n\r\n\r\n.pa-record-container{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill,minmax(300px, 300px));\r\n  -webkit-column-gap: 50px;\r\n     -moz-column-gap: 50px;\r\n          column-gap: 50px;\r\n}\r\n\r\n\r\n.pa-record-container>* {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 200px;\r\n  margin: 10px;\r\n}\r\n\r\n\r\n.card {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 800px;\r\n}\r\n\r\n\r\n.text {\r\n  text-align: center;\r\n  color: maroon;\r\n}\r\n\r\n\r\n.icon {\r\n  margin-top: 20px;\r\n  margin-left: 250px;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  margin-left: 150px;\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n\r\n.button {\r\n  margin-left: 350px\r\n}\r\n\r\n\r\n.card-item{\r\n  align-self: flex-start;\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  padding: 3px 3px 3px 3px;\r\n  width:300px;\r\n\r\n}\r\n\r\n\r\n.fab-container {\r\n  position: fixed;\r\n  bottom: 15px;\r\n  right: 15px;\r\n  z-index: 100;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: reverse;\r\n          flex-direction: column-reverse;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYiw2REFBNkQ7RUFDN0Qsd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsbUJBQWU7VUFBZixlQUFlO0VBQ2YsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRTtBQUNGOzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBTztVQUFQLE9BQU87RUFDUCx3QkFBd0I7RUFDeEIsV0FBVzs7QUFFYjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQThCO0VBQTlCLDhCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb3Vyc2UtbGlzdC1jb250YWluZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLnBhLXJlY29yZC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDMwMHB4LCAzMDBweCkpO1xyXG4gIGNvbHVtbi1nYXA6IDUwcHg7XHJcbn1cclxuXHJcbi5wYS1yZWNvcmQtY29udGFpbmVyPioge1xyXG4gIGZsZXg6IDEgMSAyMDBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNTBweFxyXG59XHJcblxyXG4uY2FyZC1pdGVte1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgd2lkdGg6MzAwcHg7XHJcblxyXG59XHJcblxyXG4uZmFiLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");
/* harmony import */ var _services_fighter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/fighter.service */ "./src/app/_services/fighter.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _models_fightericon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/fightericon */ "./src/app/_models/fightericon.ts");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, fighterService, notifService, authService) {
        this.userService = userService;
        this.fighterService = fighterService;
        this.notifService = notifService;
        this.authService = authService;
        this.characters = ['Fox', 'Cloud', 'Pikachu', 'Mario', 'Luigi', 'Marth', 'Roy', 'Falco', 'Meta Knight', 'Peach',
            'Pichu', 'Captain Falcon', 'Ganondorf', 'Yoshi', 'Kirby'];
        this.fighter = 'Fox';
        this.avatar = _models_fightericon__WEBPACK_IMPORTED_MODULE_6__["FighterIcon"].cfal;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submit = function () {
        var _this = this;
        var record = {
            name: this.fighter,
            gsp: this.GSP,
            isFavorite: false,
            isElite: false
        };
        console.log(record);
        console.log(this.authService.currentUserValue.username);
        this.fighterService.submit(record, this.authService.currentUserValue.username).subscribe(function () {
            console.log('here');
            _this.notifService.showNotif('Fighter GSP recorded!', 'confirmation');
        }, function (error) {
            _this.notifService.showNotif(error, 'error');
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_fighter_service__WEBPACK_IMPORTED_MODULE_4__["FighterService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"), styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_fighter_service__WEBPACK_IMPORTED_MODULE_4__["FighterService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, notif) {
        this.authenticationService = authenticationService;
        this.notif = notif;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            if ([400, 501, 502, 503].indexOf(err.status) !== -1) {
                _this.notif.showNotif(err.error.message, 'error', 1000);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/jwt.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        // console.log('JWT Interceptor request:', request);
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/lbcard/lbcard.component.css":
/*!*********************************************!*\
  !*** ./src/app/lbcard/lbcard.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rank-card {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1.5fr 1.5fr 1fr;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  background-color: gold;\r\n}\r\n\r\n.rank-card2 {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1.5fr 1.5fr 1fr;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.ranking {\r\n  margin-left: 15px;\r\n  font-family: \"Lucida Console\";\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  padding-right: 25px;\r\n}\r\n\r\n.avggsp {\r\n  margin-top: -30px;\r\n}\r\n\r\n.avggsp-number {\r\n  margin-top: -10px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\n.topgsp-number {\r\n  margin-top: -10px;\r\n  font-size: 25px;\r\n  font-weight: lighter;\r\n}\r\n\r\n.topgsp {\r\n  margin-top: -30px;\r\n}\r\n\r\n.main {\r\n  margin-left: -20px;\r\n  display: grid;\r\n  grid-template-columns: 75px 50px;\r\n  margin-top: -30px;\r\n}\r\n\r\n.icon {\r\n  margin-top: 30px;\r\n  margin-right: -20px\r\n}\r\n\r\n.title {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGJjYXJkL2xiY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sYmNhcmQvbGJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuay1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxLjVmciAxLjVmciAxZnI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbn1cclxuXHJcbi5yYW5rLWNhcmQyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxLjVmciAxLjVmciAxZnI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucmFua2luZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmF2Z2dzcCB7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbn1cclxuXHJcbi5hdmdnc3AtbnVtYmVyIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b3Bnc3AtbnVtYmVyIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi50b3Bnc3Age1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTIwcHhcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/lbcard/lbcard.component.ts":
/*!********************************************!*\
  !*** ./src/app/lbcard/lbcard.component.ts ***!
  \********************************************/
/*! exports provided: LBCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LBCardComponent", function() { return LBCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_lbcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/lbcard */ "./src/app/_models/lbcard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _models_fightericon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/fightericon */ "./src/app/_models/fightericon.ts");





var LBCardComponent = /** @class */ (function () {
    function LBCardComponent(auth) {
        this.auth = auth;
        this.rank = 0;
        this.mode = 'determinate';
        this.avggsp = 0;
        this.topgsp = 0;
        this.color = '#';
        this.letters = '0123456789ABCDEF';
    }
    LBCardComponent.prototype.ngOnInit = function () {
        this.avggsp = this.LBCard.avggsp;
        this.topgsp = this.LBCard.topgsp;
        this.initials = this.LBCard.first[0] + this.LBCard.last[0];
        for (var i = 0; i < 6; i++) {
            this.color += this.letters[Math.floor(Math.random() * 16)];
        }
        this.avatar = this.getIcon();
        this.isElite = this.LBCard.isElite;
        this.rank = this.LBCard.rank;
    };
    LBCardComponent.prototype.isUser = function () {
        return this.LBCard.username === this.auth.currentUserValue.username;
    };
    LBCardComponent.prototype.getIcon = function () {
        if (this.LBCard.favoriteFighter == 'Kirby') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Kirby;
        }
        else if (this.LBCard.favoriteFighter == 'Fox') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Fox;
        }
        else if (this.LBCard.favoriteFighter == 'Marth') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Marth;
        }
        else if (this.LBCard.favoriteFighter == 'Falco') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Falco;
        }
        else if (this.LBCard.favoriteFighter == 'Mario') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Mario;
        }
        else if (this.LBCard.favoriteFighter == 'Pikachu') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Pikachu;
        }
        else if (this.LBCard.favoriteFighter == 'Captain Falcon') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].CFalcon;
        }
        else if (this.LBCard.favoriteFighter == 'Ganondorf') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Ganon;
        }
        else if (this.LBCard.favoriteFighter == 'Cloud') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Cloud;
        }
        else if (this.LBCard.favoriteFighter == 'Luigi') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Luigi;
        }
        else if (this.LBCard.favoriteFighter == 'Meta Knight') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].MKnight;
        }
        else if (this.LBCard.favoriteFighter == 'Peach') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Peach;
        }
        else if (this.LBCard.favoriteFighter == 'Roy') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Roy;
        }
        else if (this.LBCard.favoriteFighter == 'Yoshi') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Yoshi;
        }
        else if (this.LBCard.favoriteFighter == 'Pichu') {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].Pichu;
        }
        else {
            return _models_fightericon__WEBPACK_IMPORTED_MODULE_4__["FighterIcon"].None;
        }
    };
    LBCardComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_lbcard__WEBPACK_IMPORTED_MODULE_2__["LBCard"])
    ], LBCardComponent.prototype, "LBCard", void 0);
    LBCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lbcard',
            template: __webpack_require__(/*! raw-loader!./lbcard.component.html */ "./node_modules/raw-loader/index.js!./src/app/lbcard/lbcard.component.html"),
            styles: [__webpack_require__(/*! ./lbcard.component.css */ "./src/app/lbcard/lbcard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LBCardComponent);
    return LBCardComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbcard-container {\r\n  display: grid;\r\n}\r\n\r\n.card-item {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGJjYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmNhcmQtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lbcard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/lbcard.service */ "./src/app/_services/lbcard.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");




var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(lbcardService, notifService) {
        this.lbcardService = lbcardService;
        this.notifService = notifService;
        this.LBCards = [];
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.loadAllCards();
    };
    LeaderboardComponent.prototype.loadAllCards = function () {
        var _this = this;
        this.lbcardService.getAll().subscribe(function (cards) {
            _this.LBCards = cards;
            _this.LBCards.forEach(function (card, index) {
                card.rank = index + 1;
            });
            _this.LBCards.sort(_this.compare);
            console.log(_this.LBCards);
        }, function (error) { _this.notifService.showNotif(error, 'error'); });
    };
    LeaderboardComponent.prototype.compare = function (a, b) {
        return b.avggsp - a.avggsp;
    };
    LeaderboardComponent.ctorParameters = function () { return [
        { type: _services_lbcard_service__WEBPACK_IMPORTED_MODULE_2__["LBCardService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! raw-loader!./leaderboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/leaderboard/leaderboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_lbcard_service__WEBPACK_IMPORTED_MODULE_2__["LBCardService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card{\r\n\r\n  display: -webkit-box;\r\n\r\n  display: flex;\r\n  height: 300px;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxvQkFBYTs7RUFBYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNhcmR7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    // private formBuilder: FormBuilder,
    router, authService, notif) {
        this.router = router;
        this.authService = authService;
        this.notif = notif;
        // loginForm: FormGroup;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            //   this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //   return;
        // }
        this.loading = true;
        this.loading = true;
        this.authService.login(this.username, this.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['']);
            _this.notif.showNotif('Logged in as: ' + _this.username, 'confirmation');
        }, function (error) {
            _this.error = error;
            _this.loading = false;
            // show a snackbar to user
            _this.notif.showNotif('Username or password is incorrect', 'dismiss');
            console.log('Error', error);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"), styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");











































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/my-gsp/my-gsp.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-gsp/my-gsp.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fighter-container  {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill,minmax(305px, 1fr));\r\n  grid-column-gap: 20px;\r\n}\r\n\r\n\r\n.card-item{\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  padding: 5px 5px 5px 5px;\r\n  width:300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZ3NwL215LWdzcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxxQkFBcUI7QUFDdkI7OztBQUdBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0VBQ1Asd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL215LWdzcC9teS1nc3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWdodGVyLWNvbnRhaW5lciAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgzMDVweCwgMWZyKSk7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQtaXRlbXtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICB3aWR0aDozMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/my-gsp/my-gsp.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-gsp/my-gsp.component.ts ***!
  \********************************************/
/*! exports provided: MyGSPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGSPComponent", function() { return MyGSPComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_fighter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/fighter.service */ "./src/app/_services/fighter.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MyGSPComponent = /** @class */ (function () {
    function MyGSPComponent(userService, notifService, authService, fighterService) {
        this.userService = userService;
        this.notifService = notifService;
        this.authService = authService;
        this.fighterService = fighterService;
        this.fighters = [];
    }
    MyGSPComponent.prototype.ngOnInit = function () {
        this.loadAllFighters();
    };
    MyGSPComponent.prototype.loadAllFighters = function () {
        var _this = this;
        this.fighterService.getAll().subscribe(function (fighters) {
            _this.fighters = fighters;
            console.log(_this.fighters);
        }, function (error) { return _this.notifService.showNotif(error.toString(), 'warning'); });
    };
    MyGSPComponent.prototype.deleteFighter = function (date) {
        var _this = this;
        console.log('Getting through');
        console.log(date);
        console.log(this.authService.currentUserValue.username);
        this.fighterService.delete(date, this.authService.currentUserValue.username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function () {
            _this.fighters = null;
            _this.loadAllFighters();
            _this.notifService.showNotif('Deleted Fighter!', 'response');
        });
    };
    MyGSPComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_fighter_service__WEBPACK_IMPORTED_MODULE_5__["FighterService"] }
    ]; };
    MyGSPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-gsp',
            template: __webpack_require__(/*! raw-loader!./my-gsp.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-gsp/my-gsp.component.html"),
            styles: [__webpack_require__(/*! ./my-gsp.component.css */ "./src/app/my-gsp/my-gsp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_fighter_service__WEBPACK_IMPORTED_MODULE_5__["FighterService"]])
    ], MyGSPComponent);
    return MyGSPComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/notification.service */ "./src/app/_services/notification.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(
    // private patternValidator: PatternValidator,
    formBuilder, router, authService, userService, notification) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.notification = notification;
        this.loading = false;
        this.submitted = false;
        this.roles = [];
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z]+$')]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z]+$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z]+$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log('Error in onSubmit()');
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log('Error:', error);
            _this.notification.showNotif(error);
            _this.loading = false;
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"), styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\OneDrive\Desktop\CS3754\SmashDBAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map