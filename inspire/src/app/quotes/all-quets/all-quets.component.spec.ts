import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuetsComponent } from './all-quets.component';

describe('AllQuetsComponent', () => {
  let component: AllQuetsComponent;
  let fixture: ComponentFixture<AllQuetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllQuetsComponent]
    });
    fixture = TestBed.createComponent(AllQuetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
