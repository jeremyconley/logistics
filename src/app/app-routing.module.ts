import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { EditserviceproviderComponent } from './editserviceprovider/editserviceprovider.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServiceproviderdetailsComponent } from './serviceproviderdetails/serviceproviderdetails.component';
import { AuthguardGuard } from './services/authguard.guard';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthguardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthguardGuard]},
  {path: 'addserviceprovider', component: AddserviceproviderComponent, canActivate: [AuthguardGuard]},
  {path: 'serviceproviderdetails/:id', component: ServiceproviderdetailsComponent, canActivate: [AuthguardGuard]},
  {path: 'editService/:id', component: EditserviceproviderComponent, canActivate: [AuthguardGuard]},
  {path: 'addNote/:id', component: AddnoteComponent, canActivate: [AuthguardGuard]},
  {path: 'editnote/:id', component: EditnoteComponent, canActivate: [AuthguardGuard]},
  {path: 'addContact/:id', component: AddcontactComponent, canActivate: [AuthguardGuard]},
  {path: 'editContact/:id', component: EditcontactComponent, canActivate: [AuthguardGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
