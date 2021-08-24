import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { ServiceproviderdetailsComponent } from './serviceproviderdetails/serviceproviderdetails.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditserviceproviderComponent } from './editserviceprovider/editserviceprovider.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AddserviceproviderComponent,
    ServiceproviderdetailsComponent,
    AddnoteComponent,
    AddcontactComponent,
    EditserviceproviderComponent,
    EditnoteComponent,
    EditcontactComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
