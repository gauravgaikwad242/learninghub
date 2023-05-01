import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[jsComponentInjector]'
})
export class ComponentInjectorDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
