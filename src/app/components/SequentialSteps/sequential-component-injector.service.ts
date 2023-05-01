import { Injectable } from '@angular/core';
import { UISelectionComponent } from './uiselection/uiselection.component';
import { BackendSelectionComponent } from './backend-selection/backend-selection.component';
import { DataBaseSelectionComponent } from './data-base-selection/data-base-selection.component';
import { FinalPreviewComponent } from './final-preview/final-preview.component';

@Injectable({
  providedIn: 'root'
})
export class SequentialComponentInjectorService {

  constructor() { }

  getComponentMetadata(){
    return [
      {"component":UISelectionComponent,indexInSequence:1,"variables":{},"condition":{}},
      {"component":BackendSelectionComponent,indexInSequence:2,"variables":{},"condition":{}},
      {"component":DataBaseSelectionComponent,indexInSequence:3,"variables":{},"condition":{}},
      {"component":FinalPreviewComponent,indexInSequence:4,"variables":{},"condition":{}},
    ]
  }
  getNoOfComponents(){
    return Object.keys(this.getComponentMetadata()).length
  }
}
