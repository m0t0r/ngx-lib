import { NgModule } from '@angular/core';
import { HelloWorldModule } from './components/hello-world/hello-world.component';

@NgModule({
  imports: [HelloWorldModule],
  exports: [HelloWorldModule]
})
export class NgxLibModule {}
