import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElementsHomeComponent} from './elements-home/elements-home.component'

// because it is lazy loaded route the path "elements" is defined within app-routing.module,
// here the path is relative to the one defined in app-routing.module
const routes: Routes = [{path: '', component: ElementsHomeComponent }]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
