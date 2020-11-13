import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {UpdatepageComponent} from './updatepage/updatepage.component';
import {AddpageComponent} from './addpage/addpage.component';
import { DeletepageComponent } from './deletepage/deletepage.component';

const routes: Routes = [
	{path:"cours",component:HomepageComponent},
	{path:"cours/:id",component:UpdatepageComponent},
	{path:"addForm",component:AddpageComponent},
	{path:"deletecours",component:DeletepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
