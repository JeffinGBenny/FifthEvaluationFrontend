import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOfficerListComponent } from './loan-officer-list.component';

describe('LoanOfficerListComponent', () => {
  let component: LoanOfficerListComponent;
  let fixture: ComponentFixture<LoanOfficerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOfficerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOfficerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
