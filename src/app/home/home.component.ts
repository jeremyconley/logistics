import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpService } from '../services/sp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errorMsg: any;
  public spList: any;

  constructor(private router: Router, private spService: SpService) { }

  ngOnInit(): void {
    this.spList = this.spService.getServiceProviders();
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
}
