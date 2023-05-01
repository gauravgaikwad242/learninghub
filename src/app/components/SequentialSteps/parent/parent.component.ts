import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentInjectorDirective } from '../component-injector.directive';
import { UISelectionComponent } from '../uiselection/uiselection.component';
import { BackendSelectionComponent } from '../backend-selection/backend-selection.component';
import { SequentialComponentInjectorService } from '../sequential-component-injector.service';

@Component({
  selector: 'js-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  sequentialCompObj;
  currentComponentIndex = -1;

  constructor(private sequentialComp:SequentialComponentInjectorService){
    this.sequentialCompObj = this.sequentialComp.getComponentMetadata()
  }
  ngOnInit(): void {
  this.switchToNextComponent()
  }

@ViewChild(ComponentInjectorDirective,{static:true})
 componentInjector!:ComponentInjectorDirective;


 switchToNextComponent(){
  if(this.canGoNext()){
    this.currentComponentIndex = this.currentComponentIndex + 1
    this.loadComponent()
  }
 }
 switchToPrevComponent(){
  if(this.canGoBack()){
    this.currentComponentIndex = this.currentComponentIndex - 1
    this.loadComponent()
  }
 }

 loadComponent() {
  // const adItem = {component:UISelectionComponent};
  const viewContainerRef = this.componentInjector.viewContainerRef;
  viewContainerRef.clear();
  const componentRef = viewContainerRef.createComponent(this.sequentialCompObj[this.currentComponentIndex].component);

}
  canGoNext(){
    if(this.currentComponentIndex+1 >= this.sequentialComp.getNoOfComponents()){
      return false;
    }
    else{
      return true
    }
  }
  canGoBack(){
    if(this.currentComponentIndex <= 0){
      return false;
    }
    else{
      return true
    }
  }

  getProgress(){
    let multiplyingConst = 100/this.sequentialComp.getNoOfComponents()

    let percentageComplete = (this.currentComponentIndex+1) * multiplyingConst
    return percentageComplete
  }
}
