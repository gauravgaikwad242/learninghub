import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { CodeEditoryComponent } from './components/util/code-editory/code-editory.component';
import { NotFoundComponent } from './components/util/not-found/not-found.component';
import { TextEditorComponent } from './components/util/text-editor/text-editor.component';

const routes: Routes = [
  {path:'',component:JavascriptComponent},
  {path:'javascript',component:JavascriptComponent,children:[
    {path:"", component:IntroductionComponent},
    {path:"introduction", component:IntroductionComponent},
    {path:"editor",component:CodeEditoryComponent},
    {path:"textEditor", component:TextEditorComponent},
    {path:"**", component:NotFoundComponent},
  ]},
  { path: 'css', loadChildren: () => import('../css/css.module').then(m => m.CssModule) },
  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
