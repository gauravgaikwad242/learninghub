import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {EditorModule} from '@tinymce/tinymce-angular'


//material imports
import {MatButtonModule} from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CodeEditoryComponent } from './components/util/code-editory/code-editory.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { MainComponent } from './components/main/main.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NotFoundComponent } from './components/util/not-found/not-found.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { TopicTitleDirective } from './directives/topic-title.directive';
import { TextEditorComponent } from './components/util/text-editor/text-editor.component';
import { SortFieldArrayPipe } from './pipes/sortFieldArray/sort-field-array.pipe';
import { AngularModule } from 'src/angular/angular.module';
import { ObservablesIntroComponent } from './components/observables-intro/observables-intro.component';
import { ObservablesOperatorsComponent } from './components/observables-operators/observables-operators.component';
import { HttpClientModule } from '@angular/common/http';
import { SequentialStepsComponent } from './components/sequential-steps/sequential-steps.component';
import { ParentComponent } from './components/SequentialSteps/parent/parent.component';
import { UISelectionComponent } from './components/SequentialSteps/uiselection/uiselection.component';
import { BackendSelectionComponent } from './components/SequentialSteps/backend-selection/backend-selection.component';
import { DataBaseSelectionComponent } from './components/SequentialSteps/data-base-selection/data-base-selection.component';
import { ComponentInjectorDirective } from './components/SequentialSteps/component-injector.directive';
import { FinalPreviewComponent } from './components/SequentialSteps/final-preview/final-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    CodeEditoryComponent,
    MainComponent,
    IntroductionComponent,
    NotFoundComponent,
    JavascriptComponent,
    TopicTitleDirective,
    TextEditorComponent,
    SortFieldArrayPipe,
    ObservablesIntroComponent,
    ObservablesOperatorsComponent,
    SequentialStepsComponent,
    ParentComponent,
    UISelectionComponent,
    BackendSelectionComponent,
    DataBaseSelectionComponent,
    ComponentInjectorDirective,
    FinalPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,

    //material
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressBarModule,

    MatDividerModule,
    FormsModule,
    AngularModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MainComponent]
})
export class AppModule { }
