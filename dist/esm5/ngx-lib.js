import { Component, NgModule } from '@angular/core';
var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
    }
    return HelloWorldComponent;
}());
HelloWorldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hello-world',
                template: "<h2>Hello, World!</h2>\n",
                styles: [""]
            },] },
];
HelloWorldComponent.ctorParameters = function () { return []; };
var HelloWorldModule = /** @class */ (function () {
    function HelloWorldModule() {
    }
    return HelloWorldModule;
}());
HelloWorldModule.decorators = [
    { type: NgModule, args: [{
                exports: [HelloWorldComponent],
                declarations: [HelloWorldComponent]
            },] },
];
HelloWorldModule.ctorParameters = function () { return []; };
var NgxLibModule = /** @class */ (function () {
    function NgxLibModule() {
    }
    return NgxLibModule;
}());
NgxLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [HelloWorldModule],
                exports: [HelloWorldModule]
            },] },
];
NgxLibModule.ctorParameters = function () { return []; };
export { NgxLibModule, HelloWorldModule, HelloWorldComponent };
//# sourceMappingURL=ngx-lib.js.map
