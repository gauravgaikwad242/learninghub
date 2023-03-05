import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NotFoundComponent } from './components/util/not-found/not-found.component';

const routes: Routes = [
  {path:"introduction", component:IntroductionComponent},
  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
