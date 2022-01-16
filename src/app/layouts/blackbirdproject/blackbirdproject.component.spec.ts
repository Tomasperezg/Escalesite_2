import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackbirdprojectComponent } from './blackbirdproject.component';

describe('BlackbirdprojectComponent', () => {
  let component: BlackbirdprojectComponent;
  let fixture: ComponentFixture<BlackbirdprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackbirdprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackbirdprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
