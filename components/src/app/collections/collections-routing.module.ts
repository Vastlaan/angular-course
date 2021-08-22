import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionsHomeComponent} from './collections-home/collections-home.component'
import { BiographyComponent } from './biography/biography.component';
import { CompanyComponent } from './company/company.component';
import { PartnerComponent } from './partner/partner.component';

const routes: Routes = [
  // because it is lazy loaded route the path "elements" is defined within app-routing.module,
  // here the path is relative to the one defined in app-routing.module
  {
    path: '',
    component: CollectionsHomeComponent,
    children:[
      {
        path: '', component: BiographyComponent
      },
      {
        path: "company", component: CompanyComponent
      },
      {
        path: 'partner', component: PartnerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
