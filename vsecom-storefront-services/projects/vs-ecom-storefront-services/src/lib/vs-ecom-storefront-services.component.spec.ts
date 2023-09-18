import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsEcomStorefrontServicesComponent } from './vs-ecom-storefront-services.component';

describe('VsEcomStorefrontServicesComponent', () => {
  let component: VsEcomStorefrontServicesComponent;
  let fixture: ComponentFixture<VsEcomStorefrontServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsEcomStorefrontServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsEcomStorefrontServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
