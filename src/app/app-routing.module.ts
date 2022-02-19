import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyStatusComponent } from './my-status/my-status.component';
import { MyteamsComponent } from './myteams/myteams.component';

const routes: Routes = [
  {path:'',redirectTo:'/my-status',pathMatch:'full'},
  { path: 'my-status', component: MyStatusComponent},
  {path: 'my-teams', component: MyteamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyStatusComponent,MyteamsComponent]
