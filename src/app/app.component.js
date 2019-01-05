"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_service_service_1 = require("./services/app-service.service");
var AppComponent = (function () {
    function AppComponent(_appService) {
        this._appService = _appService;
        this.tableData = {};
        this.addition = true;
        this.updation = false;
        this.updateData = {};
        this.newRow = false;
        this.isSpinner = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTableData();
    };
    AppComponent.prototype.getTableData = function () {
        var _this = this;
        this.isSpinner = true;
        this._appService.getData().subscribe(function (response) {
            _this.tableData = response;
            _this.isSpinner = false;
        }, function (error) {
            _this.isSpinner = false;
            console.log(error);
        });
    };
    AppComponent.prototype.removeRow = function (postCont, index) {
        var _this = this;
        this.isSpinner = true;
        this._appService.removeRow(postCont).subscribe(function (response) {
            _this.getTableData();
            _this.isSpinner = false;
        }, function (error) {
            _this.isSpinner = false;
            console.log(error);
        });
    };
    AppComponent.prototype.onSubmitRecord = function (data) {
        var _this = this;
        if (this.addition) {
            this.isSpinner = true;
            this._appService.submit(this.title, this.description).subscribe(function (response) {
                _this.getTableData();
                _this.title = '';
                _this.description = '';
                _this.isSpinner = true;
            }, function (error) {
                _this.isSpinner = false;
                console.log(error);
            });
        }
        else {
        }
    };
    AppComponent.prototype.updateRecord = function (postCont, index) {
        this.newRow = true;
        this.updateIndex = index;
        this.updateData = postCont;
        this.updation = true;
        this.addition = false;
        this.title = postCont.fields.title.stringValue;
        this.description = postCont.fields.description.stringValue;
    };
    ;
    AppComponent.prototype.addRow = function () {
        this.newRow = true;
        this.addition = true;
        this.updation = false;
        this.resetData();
    };
    AppComponent.prototype.cancelSave = function () {
        this.newRow = false;
        this.addition = false;
        this.updation = false;
        this.resetData();
    };
    AppComponent.prototype.resetData = function () {
        this.title = '';
        this.description = '';
        this.updateData = {};
        this.updateIndex = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [app_service_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map