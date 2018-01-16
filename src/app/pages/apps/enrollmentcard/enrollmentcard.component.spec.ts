import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentcardComponent } from './enrollmentcard.component';

describe('EnrollmentcardComponent', () => {
  let component: EnrollmentcardComponent;
  let fixture: ComponentFixture<EnrollmentcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
