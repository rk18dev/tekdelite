import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelffillformComponent } from './selffillform.component';

describe('SelffillformComponent', () => {
  let component: SelffillformComponent;
  let fixture: ComponentFixture<SelffillformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelffillformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelffillformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
