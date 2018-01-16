import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarycardComponent } from './librarycard.component';

describe('LibrarycardComponent', () => {
  let component: LibrarycardComponent;
  let fixture: ComponentFixture<LibrarycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
