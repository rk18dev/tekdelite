import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytoonboardComponent } from './readytoonboard.component';

describe('ReadytoonboardComponent', () => {
  let component: ReadytoonboardComponent;
  let fixture: ComponentFixture<ReadytoonboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadytoonboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadytoonboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
