import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuetsComponent } from './single-quets.component';

describe('SingleQuetsComponent', () => {
  let component: SingleQuetsComponent;
  let fixture: ComponentFixture<SingleQuetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleQuetsComponent]
    });
    fixture = TestBed.createComponent(SingleQuetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
