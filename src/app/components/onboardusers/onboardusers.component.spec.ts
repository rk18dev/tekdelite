import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardusersComponent } from './onboardusers.component';

describe('OnboardusersComponent', () => {
  let component: OnboardusersComponent;
  let fixture: ComponentFixture<OnboardusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
