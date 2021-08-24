import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpService } from '../services/sp.service';

@Component({
  selector: 'app-editserviceprovider',
  templateUrl: './editserviceprovider.component.html',
  styleUrls: ['./editserviceprovider.component.css']
})
export class EditserviceproviderComponent implements OnInit {

  constructor(private spService: SpService, private actRoute: ActivatedRoute, private router: Router) { }

  serviceId: any;
  serviceProvider: any;
  errorMsg: any;
  serviceProviderList: any;

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.serviceId = id;
    });
    this.serviceProvider = this.spService.getServiceProviderById(this.serviceId).subscribe(
      (data) => {this.serviceProvider = data;},
      (error) => { this.errorMsg = error;}
    );
  }

  update(serviceId: any, serviceProviderList: any){
    this.spService.updateServiceProvider(this.serviceId, this.serviceProvider).subscribe(
      (data) => {this.serviceProvider = data
        this.spService.getServiceProviders().subscribe(
          (data) => this.serviceProviderList = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; }
    );
    this.router.navigate(['/serviceproviderdetails', this.serviceId]);
  }

  cancel(){
    this.router.navigate(['/serviceproviderdetails', this.serviceId]);
  }

}
