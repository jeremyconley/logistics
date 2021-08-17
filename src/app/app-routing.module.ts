import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServiceproviderdetailsComponent } from './serviceproviderdetails/serviceproviderdetails.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addserviceprovider', component: AddserviceproviderComponent},
  {path: 'serviceproviderdetails/:id', component: ServiceproviderdetailsComponent},
  {path: 'addNote/:id', component: AddnoteComponent},
  {path: 'addContact/:id', component: AddcontactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
