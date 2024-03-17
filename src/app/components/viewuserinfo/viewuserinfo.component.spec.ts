import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserinfoComponent } from './viewuserinfo.component';

describe('ViewuserinfoComponent', () => {
  let component: ViewuserinfoComponent;
  let fixture: ComponentFixture<ViewuserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewuserinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
