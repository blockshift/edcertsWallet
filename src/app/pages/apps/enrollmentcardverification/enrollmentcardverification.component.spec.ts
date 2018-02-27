import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentcardverificationComponent } from './enrollmentcardverification.component';

describe('EnrollmentcardverificationComponent', () => {
  let component: EnrollmentcardverificationComponent;
  let fixture: ComponentFixture<EnrollmentcardverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentcardverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentcardverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
