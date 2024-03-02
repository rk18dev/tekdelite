import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersigningComponent } from './usersigning.component';

describe('UsersigningComponent', () => {
  let component: UsersigningComponent;
  let fixture: ComponentFixture<UsersigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersigningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
