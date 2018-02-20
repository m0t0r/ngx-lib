import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent { }

@NgModule({
  exports: [HelloWorldComponent],
  declarations: [HelloWorldComponent]
})
export class HelloWorldModule {}
