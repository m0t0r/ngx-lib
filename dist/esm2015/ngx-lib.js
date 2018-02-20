import { Component, NgModule } from '@angular/core';

class HelloWorldComponent {
}
HelloWorldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hello-world',
                template: `<h2>Hello, World!</h2>
`,
                styles: [``]
            },] },
];
HelloWorldComponent.ctorParameters = () => [];
class HelloWorldModule {
}
HelloWorldModule.decorators = [
    { type: NgModule, args: [{
                exports: [HelloWorldComponent],
                declarations: [HelloWorldComponent]
            },] },
];
HelloWorldModule.ctorParameters = () => [];

class NgxLibModule {
}
NgxLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [HelloWorldModule],
                exports: [HelloWorldModule]
            },] },
];
NgxLibModule.ctorParameters = () => [];

export { NgxLibModule, HelloWorldModule, HelloWorldComponent };
//# sourceMappingURL=ngx-lib.js.map
