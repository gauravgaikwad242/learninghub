import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {EditorModule} from '@tinymce/tinymce-angular'


//material imports
import {MatButtonModule} from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CodeEditoryComponent } from './components/util/code-editory/code-editory.component';
import { MainComponent } from './components/main/main.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NotFoundComponent } from './components/util/not-found/not-found.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { TopicTitleDirective } from './directives/topic-title.directive';
import { TextEditorComponent } from './components/util/text-editor/text-editor.component';
import { SortFieldArrayPipe } from './pipes/sortFieldArray/sort-field-array.pipe';



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
    SortFieldArrayPipe
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

    MatDividerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
