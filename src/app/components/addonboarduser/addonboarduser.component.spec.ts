import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonboarduserComponent } from './addonboarduser.component';

describe('AddonboarduserComponent', () => {
  let component: AddonboarduserComponent;
  let fixture: ComponentFixture<AddonboarduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddonboarduserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddonboarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
