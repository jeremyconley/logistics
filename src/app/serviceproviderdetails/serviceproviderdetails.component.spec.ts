import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderdetailsComponent } from './serviceproviderdetails.component';

describe('ServiceproviderdetailsComponent', () => {
  let component: ServiceproviderdetailsComponent;
  let fixture: ComponentFixture<ServiceproviderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceproviderdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproviderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
