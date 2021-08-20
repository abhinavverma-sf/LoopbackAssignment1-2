import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTableComponent } from './edit-table/edit-table.component';
import { EditcustomersComponent } from './editcustomers/editcustomers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { ShowapiComponent } from './showapi/showapi.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { ShowusersComponent } from './showusers/showusers.component';

const routes: Routes = [
  { path: "", redirectTo: '', pathMatch: 'full'},
  { path: 'view-members', component: ShowapiComponent},
  { path: 'editMembers/:id', component: EditTableComponent},
  { path: 'view-customers', component: ShowcustomersComponent},
  { path: 'editCustomers/:id', component: EditcustomersComponent},
  { path: 'showusers/:id', component: ShowusersComponent },
  { path: 'editUsers/:id', component: EditusersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
