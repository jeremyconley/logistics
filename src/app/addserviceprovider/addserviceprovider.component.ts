import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProvider } from '../models/serviceprovider';
import { SpService } from '../services/sp.service';

@Component({
  selector: 'app-addserviceprovider',
  templateUrl: './addserviceprovider.component.html',
  styleUrls: ['./addserviceprovider.component.css']
})
export class AddserviceproviderComponent implements OnInit {

  public spModel = new ServiceProvider();
  serviceProviders: any;
  errorMsg: any;

  constructor(private spService: SpService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(spForm: any){
    this.spModel.id = this.spService.getServiceProviders().length.toString();
    this.spService.addServiceProvider(this.spModel)
    // this.empService.postEmployee(this.empModel).subscribe(
    //   (data) => {this.employees = data;
    //     this.empService.getEmployees().subscribe(
    //       (data) => this.employees = data, //Get Updataed list after inserting
    //       (error) => this.errorMsg = error
    //     )
    //   }
    // )
    this.router.navigate(['/home']);
  }


}


