(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ngx = global.ngx || {}, global.ngx.lib = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var HelloWorldComponent =               (function () {
    function HelloWorldComponent() {
    }
    return HelloWorldComponent;
}());
HelloWorldComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-hello-world',
                template: "<h2>Hello, World!</h2>\n",
                styles: [""]
            },] },
];
HelloWorldComponent.ctorParameters = function () { return []; };
var HelloWorldModule =               (function () {
    function HelloWorldModule() {
    }
    return HelloWorldModule;
}());
HelloWorldModule.decorators = [
    { type: core.NgModule, args: [{
                exports: [HelloWorldComponent],
                declarations: [HelloWorldComponent]
            },] },
];
HelloWorldModule.ctorParameters = function () { return []; };
var NgxLibModule =               (function () {
    function NgxLibModule() {
    }
    return NgxLibModule;
}());
NgxLibModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [HelloWorldModule],
                exports: [HelloWorldModule]
            },] },
];
NgxLibModule.ctorParameters = function () { return []; };

exports.NgxLibModule = NgxLibModule;
exports.HelloWorldModule = HelloWorldModule;
exports.HelloWorldComponent = HelloWorldComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-lib.umd.js.map
