import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpService } from '../services/sp.service';
import {MatDialog} from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errorMsg: any;
  public spList: any;

  constructor(private router: Router, private spService: SpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    console.log("Hellooooo")
    this.getData();
  }

  getData(){
    this.spService.getServiceProviders().subscribe(
      (data) => {
        this.spList = data;
      },
      (error) => {
        this.errorMsg = error;
      },
      () => console.log("Complete")
    )
  }


  onSelect(id: number) {
    this.router.navigate(['serviceproviderdetails', id]);
  }

  addServiceProvider(){
    this.router.navigate(['addserviceprovider']);
  }

  editServiceProvider(sp: any) {
    // this.router.navigate(['/editemployee', emp.id]);
  }

  deleteServiceProvider(sp: any) {
    // this.empService.deleteEmployee(emp.id).subscribe(() => {
    //   this.empService.getEmployees().subscribe(
    //     (data) => this.employeeList = data,
    //     (error) => this.errorMsg = error
    //   )
    // })
  }

  changePassword(){
    const dialogRef = this.dialog.open(ChangepasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
